import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Card, Text } from './styles';

export default function Home() {
  return (
    <Container>
      <Card>
        <Icon name="location-on" size={30} color="#0039A6" />
        <Text>Localização</Text>
      </Card>
      <Card>
        <Icon name="question-answer" size={30} color="#0039A6" />
        <Text>Dúvidas</Text>
      </Card>
      <Card>
        <Icon name="local-hospital" size={30} color="#0039A6" />
        <Text>Pedir Socorro</Text>
      </Card>
      <Card>
        <Icon name="people" size={30} color="#0039A6" />
        <Text>Voluntarie-se</Text>
      </Card>
      <Card>
        <Icon name="phone" size={30} color="#0039A6" />
        <Text>Ajuda Solidária</Text>
      </Card>
      <Card>
        <Icon name="email" size={30} color="#0039A6" />
        <Text>Fale Conosco</Text>
      </Card>
    </Container>
  );
}
