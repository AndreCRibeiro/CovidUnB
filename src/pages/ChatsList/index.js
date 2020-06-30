/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, BackHandler } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ChatButton } from './styles';

import api from '../../services/api';
import useAuth from '../../store';
import { ScrollView } from 'react-native-gesture-handler';

const App = (props) => {
  const { token, userData } = useAuth();
  const [chats, setChats] = useState([]);

  const fetchChat = async () => {
    const res = await api.get(`/chats?user=${userData.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);

    setChats(res.data);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  const handleBackButton = () => {
    const { navigation } = props;
    navigation.navigate('Home');
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [handleBackButton]);

  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Meus chats
      </Text>
      {chats && chats.length > 0 ? (
        chats.map(({ chat_id, user2, user2_id, user1_id, user1 }) => (
          <>
            {user1_id === userData.id ? (
              <Card
                onPress={() => {
                  props.navigation.navigate('Chat', {
                    chatId: chat_id,
                    userName:
                      user2_id === userData.id ? user1.name : user2.name,
                  });
                }}
              >
                <Card.Title
                  title={user2_id === userData.id ? user1.name : user2.name}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 15,
                  }}
                />
              </Card>
            ) : null}
            <ChatButton onPress={() => props.navigation.navigate('Solidary')}>
              <Icon name="chat" size={28} color="white" />
            </ChatButton>
          </>
        ))
      ) : (
        <>
          <Text style={{ margin: 20 }}>Você ainda não tem chats</Text>
          <ChatButton onPress={() => props.navigation.navigate('Solidary')}>
            <Icon name="chat" size={28} color="white" />
          </ChatButton>
        </>
      )}
    </SafeAreaView>
  );
};

export default App;
