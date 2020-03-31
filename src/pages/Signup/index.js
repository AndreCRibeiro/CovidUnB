/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';

import {
  Container,
  Form,
  Input,
  Button,
  ButtonText,
  SimpleText,
  FirstSelect,
  FirstSelectOptions,
} from './styles';

export default class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    userName: '',
    userMail: '',
    userPass: '',
    userPassConfirmed: '',
    userAddress: '',
    userBirth: '',
    loading: false,
  };

  handleLogin = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  handleNavigationSignUp = () => { };

  render() {
    const {
      userName,
      userMail,
      userPass,
      userPassConfirmed,
      userAddress,
      userBirth,
      loading,
    } = this.state;

    return (
      <Container>
        <Form>
          <SimpleText>CRIE SUA CONTA</SimpleText>
          <Input
            autoCorrect
            autoCapitalize="none"
            placeholder="Nome"
            value={userName}
            onChangeText={(text) => this.setState({ userName: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
            value={userMail}
            onChangeText={(text) => this.setState({ userMail: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Senha"
            value={userPass}
            onChangeText={(text) => this.setState({ userPass: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Confirmação de senha"
            value={userPassConfirmed}
            onChangeText={(text) => this.setState({ userPassConfirmed: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Endereço"
            value={userAddress}
            onChangeText={(text) => this.setState({ userAddress: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Data de nascimento"
            value={userBirth}
            onChangeText={(text) => this.setState({ userBirth: text })}
          />
          <FirstSelect>
            <CheckBox
              center
              title="Click Here to Remove This Item"
              iconRight
              iconType="material"
              checkedIcon="clear"
              uncheckedIcon="add"
              checkedColor="red"
              checked={this.state.checked}
            />
          </FirstSelect>
          <Button loading={loading} onPress={this.handleLogin}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
                <ButtonText>Registrar</ButtonText>
              )}
          </Button>
        </Form>
      </Container>
    );
  }
}
