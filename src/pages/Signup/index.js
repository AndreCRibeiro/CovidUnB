/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import CheckBox from '../../components/checkbox';
import CheckBoxBall from '../../components/checkboxBall';
import api from '../../services/api';

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
    linkUnb: '',
    docente: false,
    servidor: false,
    discente: false,
    riskGroup: [],
    diabetes: false,
    hipertensao: false,
    bronquite: false,
    asma: false,
    sistema: false,
    paciente: false,
    loading: false,
  };

  handleSignUp = async () => {
    const {
      userName,
      userMail,
      userTel,
      userPass,
      userPassConfirmed,
      userAddress,
      userBirth,
      linkUnb,
      riskGroup,
    } = this.state;
    const { navigation } = this.props;

    if (userPass !== userPassConfirmed) {
      console.tron.log('Senhas fornecidas não são iguais');
    } else {
      try {
        const response = await api.post('/users', {
          name: userName,
          email: userMail,
          whatsapp: userTel,
          password: userPassConfirmed,
          address: userAddress,
          birth_date: userBirth,
          link_unb: linkUnb,
          risk_group: riskGroup.toString(),
          user_location: null,
        });
        navigation.navigate('Home');
      } catch (err) {
        console.tron.log(err);
      }
      navigation.navigate('Home');
    }
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
      riskGroup,
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
                  linkUnb: 'Docente',
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
                  linkUnb: 'Servidor',
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
                  linkUnb: 'Discente',
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
              onPress={() =>
                this.setState({
                  diabetes: !diabetes,
                  riskGroup: [...riskGroup, 'Diabetes'],
                })
              }
              text="Diabetes"
            />
            <CheckBox
              selected={hipertensao}
              onPress={() =>
                this.setState({
                  hipertensao: !hipertensao,
                  riskGroup: [...riskGroup, 'Hipertensão'],
                })
              }
              text="Hipertensão"
            />
            <CheckBox
              selected={bronquite}
              onPress={() =>
                this.setState({
                  bronquite: !bronquite,
                  riskGroup: [...riskGroup, 'Bronquite'],
                })
              }
              text="Bronquite"
            />
            <CheckBox
              selected={asma}
              onPress={() =>
                this.setState({
                  asma: !asma,
                  riskGroup: [...riskGroup, 'Asma'],
                })
              }
              text="Asma"
            />
            <CheckBox
              selected={sistema}
              onPress={() =>
                this.setState({
                  sistema: !sistema,
                  riskGroup: [...riskGroup, 'Sistema Imunológico Enfraquecido'],
                })
              }
              text="Sistema Imunológico Enfraquecido"
            />
            <CheckBox
              selected={paciente}
              onPress={() =>
                this.setState({
                  paciente: !paciente,
                  riskGroup: [...riskGroup, 'Paciente Oncológico'],
                })
              }
              text="Paciente Oncológico"
            />
          </SecondSelect>
          <Button loading={loading} onPress={this.handleSignUp}>
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
