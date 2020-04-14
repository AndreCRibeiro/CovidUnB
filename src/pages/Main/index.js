/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
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
  OptionsView,
  RememberButton,
  ForgotPassword,
  PasswordText,
  RememberText,
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
    userMail: null,
    userPass: null,
    showingPass: true,
    checked: null,
  };

  UNSAFE_componentWillReceiveProps(nextprops) {
    const { token, navigation } = this.props;
    if (token !== nextprops.token) {
      navigation.navigate('Home');
    }
  }

  async componentDidMount() {
    const checkedAsync = await AsyncStorage.getItem('check');
    const checkedUserAsync = await AsyncStorage.getItem('userNameAsync');
    const checkedPassAsync = await AsyncStorage.getItem('userPassAsync');

    if (checkedAsync === 'true') {
      this.setState({
        checked: true,
        userMail: JSON.parse(checkedUserAsync),
        userPass: JSON.parse(checkedPassAsync),
      });
    } else {
      this.setState({ checked: false });
      await AsyncStorage.multiRemove('userNameAsync');
      await AsyncStorage.multiRemove('userPassAsync');
    }
  }

  handleLogin = async () => {
    const { userMail, userPass, checked } = this.state;
    const { fetchAuth, navigation } = this.props;

    if (!userMail || !userPass) {
      Alert.alert(
        'Falha na Autenticação',
        'É necessário informar email e senha!'
      );
    } else {
      try {
        const body = { email: userMail, password: userPass };
        fetchAuth(body);
        if (checked) {
          AsyncStorage.setItem('check', JSON.stringify(checked));
          AsyncStorage.setItem('userNameAsync', JSON.stringify(userMail));
          AsyncStorage.setItem('userPassAsync', JSON.stringify(userPass));
        } else {
          AsyncStorage.setItem('check', JSON.stringify(checked));
        }
      } catch (err) {
        Alert.alert('Verifique sua conexão com a Internet!');
      }
    }
  };

  handleNavigationToSignUp = () => {
    const { navigation } = this.props;

    navigation.navigate('Register');
  };

  showPass = () => {
    const { showingPass } = this.state;

    this.setState({ showingPass: !showingPass });
  };

  handleSavecredentials = () => {
    const { userMail, userPass } = this.state;
  };

  render() {
    const { userMail, userPass, showingPass, checked } = this.state;
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
          <OptionsView>
            <RememberButton
              onPress={() => {
                this.setState({ checked: !checked });
              }}
            >
              {checked ? (
                <Icon name="check-box" size={17} color={colors.black} />
              ) : (
                  <Icon
                    name="check-box-outline-blank"
                    size={17}
                    color={colors.black}
                  />
                )}
              <RememberText>Lembrar-me</RememberText>
            </RememberButton>
            <ForgotPassword>
              <PasswordText>Esqueceu sua senha?</PasswordText>
            </ForgotPassword>
          </OptionsView>
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
