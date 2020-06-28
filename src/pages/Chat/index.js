import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { Divider } from 'react-native-elements';

import { GiftedChat } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import { UserName } from './styles';

import useAuth from '../../store';

const App = (props) => {
  const { token, userData } = useAuth();
  const [messages, setMessages] = useState([]);
  const { chatId, userName } = props.route.params;
  const chatRef = firestore().collection('Chats').doc(chatId);
  const { id } = userData;

  const handleBackButton = () => {
    const { navigation } = props;
    navigation.navigate('ChatList');
    return true;
  };

  useEffect(() => {
    const subscriber = chatRef.onSnapshot((documentSnapshot) => {
      if (documentSnapshot.data()) {
        const formattedMessages = documentSnapshot
          .data()
          .messages.map((obj) => ({
            ...obj,
            createdAt: obj.createdAt.toDate(),
          }));
        setMessages(formattedMessages.reverse());
      } else {
        alert('Chat não existe');
        props.navigation.navigate('ChatList');
      }
    }); // subscreve pra todas as mudanças no doc, daí só setar o estado das mensagens

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [chatId]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [handleBackButton]);

  const onSend = (newMessages = []) => {
    console.log(GiftedChat.append(messages, newMessages));
    chatRef.update({
      // messages: firestore.FieldValue.arrayUnion(...newMessages),
      messages: GiftedChat.append(messages, newMessages),
    }); // atualizar as mensagens no Doc do Firebase
    setMessages((oldArray) => [...newMessages, ...oldArray]);
  };
  return (
    <>
      <UserName style={{ textAlign: 'center', fontWeight: 'bold' }}>
        {userName}
      </UserName>
      <Divider />
      <GiftedChat
        messages={messages}
        placeholder="Digite uma mensagem"
        onSend={(messages) => onSend(messages)}
        textInputProps={{ autoCapitalize: 'none', autoCorrect: false }}
        user={{
          _id: id,
          // TODO : mudar pro id do user atual
        }}
        renderAvatar={() => null}
      />
    </>
  );
};

export default App;
