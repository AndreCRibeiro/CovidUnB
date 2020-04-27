/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import firestore from '@react-native-firebase/firestore';

const App: () => React$Node = (props) => {
  const [messages, setMessages] = useState([]);
  const { chatId } = props.route.params;
  const chatRef = firestore().collection('Chats').doc(chatId);

  useEffect(() => {
    const subscriber = chatRef.onSnapshot((documentSnapshot) => {
      const formattedMessages = documentSnapshot
        .data()
        .messages.map((obj) => ({ ...obj, createdAt: obj.createdAt.toDate() }));
      setMessages(formattedMessages.reverse());
    }); // subscreve pra todas as mudanças no doc, daí só setar o estado das mensagens

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [chatId]);

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
          _id: 16, // TODO : mudar pro id do user atual
        }}
        renderAvatar={() => null}
      />
    </>
  );
};

export default App;
