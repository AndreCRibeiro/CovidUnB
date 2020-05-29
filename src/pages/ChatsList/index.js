import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, BackHandler } from 'react-native';
import { Card, Appbar, Button } from 'react-native-paper';

import api from '../../services/api';
import useAuth from '../../store';

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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button
          color="blue"
          onPress={() => props.navigation.navigate('Solidary')}
        >
          Novo chat
        </Button>
      </View>
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
        chats.map(({ chat_id, user2 }) => (
          <Card
            onPress={() => {
              props.navigation.navigate('Chat', { chatId: chat_id });
            }}
          >
            <Card.Title
              title={`Usuário: ${user2.name} ${user2.id}`}
              style={{
                backgroundColor: '#fff',
                borderRadius: 15,
              }}
            />
          </Card>
        ))
      ) : (
        <Text>Você ainda não tem chats</Text>
      )}
    </SafeAreaView>
  );
};

export default App;
