import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

import firestore from '@react-native-firebase/firestore';
import useAuth from '../../store';

const App = (props) => {
  const { token, userData } = useAuth();
  const [messages, setMessages] = useState([]);
  const { chatId } = props.route.params;
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
  console.log(id);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [handleBackButton]);

  const onSend = (newMessages = []) => {
    chatRef.update({
      // messages: firestore.FieldValue.arrayUnion(...newMessages),
      messages: GiftedChat.append(messages, newMessages),
    }); // atualizar as mensagens no Doc do Firebase
    setMessages((oldArray) => [...newMessages, ...oldArray]);
  };
  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: { id }, // TODO : mudar pro id do user atual
        }}
        renderAvatar={() => null}
      />
    </>
  );
};

export default App;
