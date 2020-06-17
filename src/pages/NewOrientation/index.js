/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { TouchableOpacity, Text, TextInput } from 'react-native';

import { Container } from './styles';

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
      departament: '',
      title: '',
      details: '',
      token: '',
    };
  }

  async createOrientation() {
    try {
      const response = await api.post(
        '/orientations',
        { departament: 'teste', details: 'teste', title: 'teste' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { departament, title, details } = this.state;
    const { userData } = this.props;

    return (
      <Container>
        <TextInput
          placeholder="Departamento"
          onChangeText={(text) => this.setState({ departament: text })}
        />
        <TextInput
          placeholder="Título"
          onChangeText={(text) => this.setState({ title: text })}
        />
        <TextInput
          placeholder="Resumo"
          onChangeText={(text) => this.setState({ details: text })}
        />

        <TouchableOpacity onPress={this.createOrientation}>
          <Text>Enviar Solicitação</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default withZustand(NewOrientation);
