/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  LineLeft,
  LineRight,
  SimpleText,
  ButtonSingup,
  Teste,
  HideNShowPassword,
  Eye,
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
    showingPass: true,
    loading: false,
  };

  handleLogin = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  handleNavigationToSignUp = () => {
    const { navigation } = this.props;

    navigation.navigate('Register');
  };

  showPass = () => {
    const { showingPass } = this.state;

    this.setState({ showingPass: !showingPass });
  };

  render() {
    const { userMail, userPass, showingPass, loading } = this.state;

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
          <Teste>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={showingPass}
              placeholder="Senha"
              value={userPass}
              onChangeText={(text) => this.setState({ userPass: text })}
              returnKeyType="send"
              onSubmitEditing={this.handleLogin}
            />
            <HideNShowPassword onPress={this.showPass}>
              {showingPass ? (
                <Icon name="visibility" size={28} color="#000" />
              ) : (
                  <Eye source={require('../../assets/images/eye.png')} />
                )}
            </HideNShowPassword>
          </Teste>

          <ButtonLogin loading={loading} onPress={this.handleLogin}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
                <LoginButtonText>Login</LoginButtonText>
              )}
          </ButtonLogin>
          <Slash>
            <LineLeft />
            <SimpleText>OU</SimpleText>
            <LineRight />
          </Slash>
          <ButtonSingup onPress={this.handleNavigationToSignUp}>
            <SignupButtonText>Registre-se</SignupButtonText>
          </ButtonSingup>
        </Form>
      </Container>
    );
  }
}
