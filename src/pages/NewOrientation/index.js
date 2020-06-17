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

class NewOrientation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Neworientations: [],
      query: '',
    };
  }

  async componentDidMount() {
    const { token } = this.props;

    try {
      const response = await api.get('/Neworientations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.setState({ Neworientations: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { Neworientations } = this.state;
    const { userData } = this.props;

    return (
      <Container>
        <ScrollView>
          {Neworientations.map((item) =>
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

export default withZustand(NewOrientation);
