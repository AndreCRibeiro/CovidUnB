/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';

import { Container, CardContainer } from './styles';

import useAuth from '../../store';

import api from '../../services/api';

const withZustand = (Comp) => (props) => {
  const { token, userData } = useAuth();
  return <Comp {...props} token={token} userData={userData} />;
};

class MyOrientation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Myorientations: [],
      query: '',
    };
  }

  async componentDidMount() {
    const { token } = this.props;

    try {
      const response = await api.get('/Myorientations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.setState({ Myorientations: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { Myorientations } = this.state;
    const { userData } = this.props;

    return (
      <Container>
        <ScrollView>
          {Myorientations.map((item) =>
            !item.is_sick ? (
              <CardContainer onPress={() => this.sendMail}>
                <Text>Departamento: {item.departament}</Text>
                <Text>Título: {item.title}</Text>
                <Text>Resumo: {item.details}</Text>
              </CardContainer>
            ) : null
          )}
        </ScrollView>
      </Container>
    );
  }
}

export default withZustand(MyOrientation);
