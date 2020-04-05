/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import api from '../../services/api';
import useAuth from '../../store';

import { colors } from '../../styles';

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

const withZustand = (Comp) => (props) => {
  const { loading, fetchAuth, token } = useAuth();
  return (
    <Comp {...props} loading={loading} fetchAuth={fetchAuth} token={token} />
  );
};

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    userMail: '',
    userPass: '',
    showingPass: true,
  };

  UNSAFE_componentWillReceiveProps(nextprops) {
    const { token, navigation } = this.props;
    if (token !== nextprops.token) {
      navigation.navigate('Home');
    }
  }

  handleLogin = async () => {
    const { userMail, userPass } = this.state;
    const { fetchAuth, navigation } = this.props;
    const body = { email: userMail, password: userPass };
    fetchAuth(body);
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
    const { userMail, userPass, showingPass } = this.state;
    const { loading } = this.props;

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
                <Icon name="visibility" size={28} color={colors.black} />
              ) : (
                  <Eye source={require('../../assets/images/eye.png')} />
                )}
            </HideNShowPassword>
          </Teste>

          <ButtonLogin loading={loading} onPress={this.handleLogin}>
            {loading ? (
              <ActivityIndicator color={colors.white} />
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

export default withZustand(Main);
