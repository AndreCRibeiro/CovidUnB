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
  SecondCenterView,
  ThirdCenterView,
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
    userTel: '',
    userPass: '',
    userPassConfirmed: '',
    userAddress: '',
    userBirth: '',
    docente: false,
    servidor: false,
    discente: false,
    diabetes: false,
    hipertensao: false,
    bronquite: false,
    asma: false,
    sistema: false,
    paciente: false,
    loading: false,
  };

  handleLogin = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  handleNavigationToLogin = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  render() {
    const {
      userName,
      userMail,
      userTel,
      userPass,
      userPassConfirmed,
      userAddress,
      userBirth,
      loading,
      docente,
      servidor,
      discente,
      diabetes,
      hipertensao,
      bronquite,
      asma,
      sistema,
      paciente,
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
            keyboardType="numeric"
            placeholder="Telefone"
            value={userTel}
            onChangeText={(text) => this.setState({ userTel: text })}
          />
          <Input
            autoCorrect={false}
            caretHidden
            autoCapitalize="none"
            secureTextEntry
            placeholder="Senha"
            value={userPass}
            onChangeText={(text) => this.setState({ userPass: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
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
          <SecondCenterView>
            <SimpleText>QUAL SEU VÍNCULO COM A UNB?</SimpleText>
          </SecondCenterView>
          <FirstSelect>
            <CheckBoxBall
              selected={docente}
              onPress={() =>
                this.setState({
                  docente: !docente,
                  servidor: false,
                  discente: false,
                })
              }
              text="Docente"
            />
            <CheckBoxBall
              selected={servidor}
              onPress={() =>
                this.setState({
                  docente: false,
                  servidor: !servidor,
                  discente: false,
                })
              }
              text="Servidor(a)"
            />
            <CheckBoxBall
              selected={discente}
              onPress={() =>
                this.setState({
                  docente: false,
                  servidor: false,
                  discente: !discente,
                })
              }
              text="Discente"
            />
          </FirstSelect>
          <ThirdCenterView>
            <SimpleText>GRUPO DE RISCO?</SimpleText>
          </ThirdCenterView>
          <SecondSelect>
            <CheckBox
              selected={diabetes}
              onPress={() => this.setState({ diabetes: !diabetes })}
              text="Diabetes"
            />
            <CheckBox
              selected={hipertensao}
              onPress={() => this.setState({ hipertensao: !hipertensao })}
              text="Hipertensão"
            />
            <CheckBox
              selected={bronquite}
              onPress={() => this.setState({ bronquite: !bronquite })}
              text="Bronquite"
            />
            <CheckBox
              selected={asma}
              onPress={() => this.setState({ asma: !asma })}
              text="Asma"
            />
            <CheckBox
              selected={sistema}
              onPress={() => this.setState({ sistema: !sistema })}
              text="Sistema Imunológico Enfraquecido"
            />
            <CheckBox
              selected={paciente}
              onPress={() => this.setState({ paciente: !paciente })}
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
