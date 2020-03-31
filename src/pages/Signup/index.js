/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import CheckBox from '../../components/checkbox';
import CheckBoxBall from '../../components/checkboxBall';

import {
  Container,
  Form,
  Input,
  Button,
  ButtonText,
  SimpleText,
  FirstSelect,
  SecondSelect,
  CenterView,
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
    b1: false,
    b2: false,
    loading: false,
  };

  handleLogin = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  handleNavigationSignUp = () => { };

  handleCheckBox = () => {
    const { b1 } = this.state;

    this.setState({ b1: !b1 });
  };

  handleCheckBall = () => {
    const { b2 } = this.state;

    this.setState({ b2: !b2 });
  };

  render() {
    const {
      userName,
      userMail,
      userPass,
      userPassConfirmed,
      userAddress,
      userBirth,
      loading,
      b1,
      b2,
    } = this.state;

    return (
      <Container>
        <Form>
          <CenterView>
            <SimpleText>CRIE SUA CONTA</SimpleText>
          </CenterView>
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
          <CenterView>
            <SimpleText>QUAL SEU VÍNCULO COM A UNB?</SimpleText>
          </CenterView>
          <FirstSelect>
            <CheckBoxBall
              selected={b2}
              onPress={this.handleCheckBall}
              text="Docente"
            />
            <CheckBoxBall
              selected={b2}
              onPress={this.handleCheckBall}
              text="Servidor(a)"
            />
            <CheckBoxBall
              selected={b2}
              onPress={this.handleCheckBall}
              text="Discente"
            />
          </FirstSelect>
          <CenterView>
            <SimpleText>GRUPO DE RISCO?</SimpleText>
          </CenterView>
          <SecondSelect>
            <CheckBox
              selected={b1}
              onPress={this.handleCheckBox}
              text="Diabetes"
            />
            <CheckBox
              selected={b1}
              onPress={this.handleCheckBox}
              text="Hipertensão"
            />
            <CheckBox
              selected={b1}
              onPress={this.handleCheckBox}
              text="Bronquite"
            />
            <CheckBox selected={b1} onPress={this.handleCheckBox} text="Asma" />
            <CheckBox
              selected={b1}
              onPress={this.handleCheckBox}
              text="Sistema Imunológico Enfraquecido"
            />
            <CheckBox
              selected={b1}
              onPress={this.handleCheckBox}
              text="Paciente Oncológico"
            />
          </SecondSelect>
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
