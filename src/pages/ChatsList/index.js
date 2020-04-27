import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Card, Appbar, Button } from 'react-native-paper';

import api from '../../services/api';

const App: () => React$Node = (props) => {
  const [chats, setChats] = useState([]);

  const fetchChat = async () => {
    const { token } = props;
    const res = await api.get('/chats', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // setChats(res);
  };

  useEffect(() => {
    fetchChat();
  }, []);

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
        <Button color="blue" onPress={() => {}}>
          {' '}
          Meus chats{' '}
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
      {chats.map(({ user_id, chat_id }) => (
        <Card>
          <Card.Title
            title={`Usuário: ${user_id}`}
            style={{
              backgroundColor: '#fff',
              borderRadius: 15,
            }}
          />
        </Card>
      ))}
    </SafeAreaView>
  );
};

export default App;
