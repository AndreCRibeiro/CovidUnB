/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container,
  Logo,
  Form,
  Input,
  ButtonLogin,
  LoginButtonText,
  Slash,
  SignupButtonText,
  Line,
  SimpleText,
  ButtonSingup,
} from './styles';

export default class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    userMail: '',
    userPass: '',
    loading: false,
  };

  handleLogin = () => { };

  handleNavigationSignUp = () => {
    const { navigation } = this.props;

    navigation.navigate('Registro');
  };

  render() {
    const { userMail, userPass, loading } = this.state;

    return (
      <Container>
        <Logo source={require('../../assets/images/logo.png')} />
        <Form>
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
            returnKeyType="send"
            onSubmitEditing={this.handleLogin}
          />
          <ButtonLogin loading={loading} onPress={this.handleLogin}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
                <LoginButtonText>Login</LoginButtonText>
              )}
          </ButtonLogin>
          <Slash>
            <Line />
            <SimpleText>OU</SimpleText>
            <Line />
          </Slash>
          <ButtonSingup onPress={this.handleNavigationSignUp}>
            <SignupButtonText>Registre-se</SignupButtonText>
          </ButtonSingup>
        </Form>
      </Container>
    );
  }
}
