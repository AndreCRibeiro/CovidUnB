/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator, Alert, StatusBar, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../assets/animations/loadingVolunteers.json';
import Grade from '../../assets/animations/grade.json';
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
  OptionsView,
  RememberButton,
  ForgotPassword,
  PasswordText,
  RememberText,
  ModalContainerAnimationTop,
  ModalContainerAnimation,
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
    userMailReset: null,
    userPassReset: null,
    showingPass: true,
    checked: null,
    showAnimation: true,
    reset: false,
  };

  async componentDidMount() {
    const { fetchAuth } = this.props;

    const checkedAsync = await AsyncStorage.getItem('check');
    const checkedUserAsync = await AsyncStorage.getItem('userNameAsync');
    const checkedPassAsync = await AsyncStorage.getItem('userPassAsync');

    if (checkedAsync === 'true') {
      this.setState({
        checked: true,
        userMail: JSON.parse(checkedUserAsync),
        userPass: JSON.parse(checkedPassAsync),
      });
      const body = {
        email: JSON.parse(checkedUserAsync),
        password: JSON.parse(checkedPassAsync),
      };
      fetchAuth(body);
    } else {
      this.setState({ checked: false });
      await AsyncStorage.multiRemove('userNameAsync');
      await AsyncStorage.multiRemove('userPassAsync');
    }
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    const { token, navigation } = this.props;

    const cameByLogin = true;

    if (token !== nextprops.token) {
      navigation.navigate('Home', { cameByLogin });
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

  handleLoginReset = async () => {
    const { userMailReset, userPassReset, checked } = this.state;
    const { fetchAuth, navigation } = this.props;

    if (!userMailReset || !userPassReset) {
      Alert.alert(
        'Falha na Autenticação',
        'É necessário informar email e senha!'
      );
    } else {
      try {
        const body = { email: userMailReset, password: userPassReset };
        fetchAuth(body);
        if (checked) {
          AsyncStorage.setItem('check', JSON.stringify(checked));
          AsyncStorage.setItem('userNameAsync', JSON.stringify(userMailReset));
          AsyncStorage.setItem('userPassAsync', JSON.stringify(userPassReset));
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

  handleCamera = () => {
    const { navigation } = this.props;

    navigation.navigate('Camera');
  };

  showPass = () => {
    const { showingPass } = this.state;

    this.setState({ showingPass: !showingPass });
  };

  render() {
    const {
      userMail,
      userPass,
      userMailReset,
      userPassReset,
      showingPass,
      checked,
      showAnimation,
      reset,
    } = this.state;
    const { loading } = this.props;

    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Container>
          {showAnimation ? (
            <Modal animationType="fade" transparent visible={showAnimation}>
              <ModalContainerAnimation />
              <ModalContainerAnimation />
              <ModalContainerAnimationTop>
                <Lottie
                  resizeMode="contain"
                  source={Grade}
                  autoPlay
                  loop={false}
                  onAnimationFinish={() =>
                    this.setState({ showAnimation: false })
                  }
                />
              </ModalContainerAnimationTop>
              <ModalContainerAnimation />
              <ModalContainerAnimation />
            </Modal>
          ) : null}
          <Logo source={require('../../assets/images/logo.png')} />
          <Form>
            {this.props.route.params ? (
              <>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Email"
                  value={userMailReset}
                  onChangeText={(text) =>
                    this.setState({ userMailReset: text })
                  }
                />
                <Teste>
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={showingPass}
                    placeholder="Senha"
                    value={userPassReset}
                    onChangeText={(text) =>
                      this.setState({ userPassReset: text })
                    }
                    returnKeyType="send"
                    onSubmitEditing={this.handleLogin}
                  />
                  <HideNShowPassword onPress={this.showPass}>
                    {showingPass ? (
                      <Icon
                        name="visibility"
                        size={28}
                        color={colors.black}
                        style={{ paddingRigth: 3, paddingBottom: 3 }}
                      />
                    ) : (
                        <Icon
                          name="visibility-off"
                          size={28}
                          color={colors.black}
                          style={{ paddingRigth: 3, paddingBottom: 3 }}
                        />
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
                  <ForgotPassword onPress={() => { }}>
                    <PasswordText>Esqueceu sua senha?</PasswordText>
                  </ForgotPassword>
                </OptionsView>
                <ButtonLogin loading={loading} onPress={this.handleLoginReset}>
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
              </>
            ) : (
                <>
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
                        <Icon
                          name="visibility"
                          size={28}
                          color={colors.black}
                          style={{ paddingRigth: 3, paddingBottom: 3 }}
                        />
                      ) : (
                          <Icon
                            name="visibility-off"
                            size={28}
                            color={colors.black}
                            style={{ paddingRigth: 3, paddingBottom: 3 }}
                          />
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
                    <ForgotPassword onPress={() => { }}>
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
                </>
              )}
          </Form>
        </Container>
      </>
    );
  }
}

export default withZustand(Main);
