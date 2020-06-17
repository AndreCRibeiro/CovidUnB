/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  Linking,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

import { Container, CardContainer } from './styles';

import useAuth from '../../store';

import api from '../../services/api';

const withZustand = (Comp) => (props) => {
  const { token, userData } = useAuth();
  return <Comp {...props} token={token} userData={userData} />;
};

class Orientation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orientations: [],
      query: '',
    };
  }

  async componentDidMount() {
    const { token } = this.props;

    try {
      const response = await api.get('/orientations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.setState({ orientations: response.data });
    } catch (err) {
      console.log(err);
    }
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
    return true;
  };

  filterByDepartament = async () => {
    const { token } = this.props;

    try {
      const response = await api.get(`/orientations?dep=${this.state.query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.setState({ orientations: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  sendMail = async () => { };

  render() {
    const { orientations } = this.state;
    const { userData } = this.props;

    return (
      <Container>
        <TextInput
          placeholder="Ex: ENE, MAT"
          autoCapitalize="characters"
          onChangeText={(text) => this.setState({ query: text })}
        />
        <Button
          onPress={this.filterByDepartament}
          title="Filtrar por Departamento"
        />
        <ScrollView>
          {orientations.map((item) =>
            !item.is_sick ? (
              <CardContainer onPress={() => this.sendMail}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      `mailto:${userData.email}?subject=UnB Solidária - Solicitação de Orientação&body=Caro aluno, \nvi seu pedido de orientação e gostaria de auxiliá-lo.\n\nResponda este email caso ainda deseje orientação.`
                    )
                  }
                  title="support@example.com"
                >
                  <Text>Departamento: {item.departament}</Text>
                  <Text>Título: {item.title}</Text>
                  <Text>Resumo: {item.details}</Text>
                </TouchableOpacity>
              </CardContainer>
            ) : null
          )}
        </ScrollView>
      </Container>
    );
  }
}

export default withZustand(Orientation);
