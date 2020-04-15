/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator, Alert, StatusBar } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import PropTypes from 'prop-types';
import CheckBox from '../../components/checkbox';
import CheckBoxBall from '../../components/checkboxBall';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  InputPass,
  InputConfirmedPass,
  Button,
  ButtonText,
  SimpleText,
  FirstSelect,
  SecondSelect,
  CenterView,
  SecondCenterView,
  ThirdCenterView,
  ErrorText,
} from './styles';

import { colors } from '../../styles';

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
    matriculaUnb: '',
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
    check: true,
    passLengthCheck: true,
  };

  checkPassLength = (text) => {
    const checkUserPassLength = text.length;
    if (checkUserPassLength <= 5) {
      this.setState({ passLengthCheck: false });
    } else {
      this.setState({ passLengthCheck: true });
    }
  };

  checkPass = (confirmedText) => {
    const { userPass } = this.state;
    const userPassConfirm = confirmedText;

    if (userPass === userPassConfirm) {
      this.setState({ check: true });
    } else {
      this.setState({ check: false });
    }
  };

  handleSignUp = async () => {
    this.setState({ loading: true });
    const {
      userName,
      userMail,
      userTel,
      userPassConfirmed,
      userAddress,
      userBirth,
      linkUnb,
      riskGroup,
      matriculaUnb,
    } = this.state;
    const { navigation } = this.props;
    if (this.state.diabetes === true) {
      this.setState({ riskGroup: [...riskGroup, 'Diabetes'] });
    }
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
        user_location: '',
        matricula_unb: matriculaUnb,
      });

      Alert.alert(
        'Atenção',
        'Usuário cadastrado com sucesso!',
        [{ text: 'OK', onPress: () => navigation.navigate('Main') }],
        { cancelable: false }
      );
    } catch (err) {
      this.setState({ loading: false });
      Alert.alert('Falha no cadastro', 'Verifique os dados informados');
    }
  };

  handleCheck = (group) => {
    const {
      riskGroup,
      diabetes,
      hipertensao,
      bronquite,
      asma,
      sistema,
      paciente,
    } = this.state;

    const index = riskGroup.findIndex((gp) => gp === group);

    if (index >= 0) {
      riskGroup.splice(index, 1);
    } else {
      riskGroup.push(group);
    }
    switch (group) {
      case 'Diabetes': {
        this.setState({ riskGroup, diabetes: !diabetes });
        break;
      }
      case 'Hipertensão': {
        this.setState({ riskGroup, hipertensao: !hipertensao });
        break;
      }
      case 'Bronquite': {
        this.setState({ riskGroup, bronquite: !bronquite });
        break;
      }
      case 'Asma': {
        this.setState({ riskGroup, asma: !asma });
        break;
      }
      case 'Sistema Imunológico Enfraquecido': {
        this.setState({ riskGroup, sistema: !sistema });
        break;
      }
      case 'Paciente Oncológico': {
        this.setState({ riskGroup, paciente: !paciente });
        break;
      }
      default: {
        break;
      }
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
      matriculaUnb,
      diabetes,
      hipertensao,
      bronquite,
      asma,
      sistema,
      paciente,
      check,
      passLengthCheck,
    } = this.state;

    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#0039A6" />
        <Container>
          <Form>
            <CenterView>
              <SimpleText>CRIE SUA CONTA</SimpleText>
            </CenterView>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome"
              value={userName}
              onChangeText={(text) => this.setState({ userName: text })}
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email"
              value={userMail}
              onChangeText={(text) => this.setState({ userMail: text })}
            />
            <TextInputMask
              type="cel-phone"
              style={{
                height: 45,
                borderRadius: 11,
                padding: 13,
                borderWidth: 2,
                marginTop: 8,
                marginBottom: 15,
                elevation: 2,
              }}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
              placeholder="Telefone"
              placeholderTextColor="#000"
              value={userTel}
              onChangeText={(text) => this.setState({ userTel: text })}
            />
            <InputPass
              autoCorrect={false}
              caretHidden
              autoCapitalize="none"
              secureTextEntry
              placeholder="Senha"
              value={userPass}
              onChangeText={(text) => {
                this.setState({ userPass: text });
                this.checkPassLength(text);
              }}
              passLengthCheck={passLengthCheck}
            />
            {!passLengthCheck ? (
              <ErrorText>A senha deve possuir no mínimo 6 caracteres</ErrorText>
            ) : null}
            <InputConfirmedPass
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry
              placeholder="Confirmação de senha"
              value={userPassConfirmed}
              onChangeText={(text) => {
                this.setState({ userPassConfirmed: text });
                this.checkPass(text);
              }}
              check={check}
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Endereço"
              value={userAddress}
              onChangeText={(text) => this.setState({ userAddress: text })}
            />
            <TextInputMask
              type="datetime"
              options={{ format: 'DD/MM/YYYY' }}
              style={{
                height: 45,
                borderRadius: 11,
                padding: 13,
                borderWidth: 2,
                marginTop: 8,
                marginBottom: 15,
                elevation: 2,
              }}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Data de nascimento"
              placeholderTextColor="#000"
              value={userBirth}
              onChangeText={(text) => this.setState({ userBirth: text })}
            />

            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
              placeholder="Matrícula UnB"
              value={matriculaUnb}
              onChangeText={(text) => this.setState({ matriculaUnb: text })}
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
                onPress={() => this.handleCheck('Diabetes')}
                text="Diabetes"
              />
              <CheckBox
                selected={hipertensao}
                onPress={() => this.handleCheck('Hipertensão')}
                text="Hipertensão"
              />
              <CheckBox
                selected={bronquite}
                onPress={() => this.handleCheck('Bronquite')}
                text="Bronquite"
              />
              <CheckBox
                selected={asma}
                onPress={() => this.handleCheck('Asma')}
                text="Asma"
              />
              <CheckBox
                selected={sistema}
                onPress={() =>
                  this.handleCheck('Sistema Imunológico Enfraquecido')
                }
                text="Sistema Imunológico Enfraquecido"
              />
              <CheckBox
                selected={paciente}
                onPress={() => this.handleCheck('Paciente Oncológico')}
                text="Paciente Oncológico"
              />
            </SecondSelect>
            <Button loading={loading} onPress={this.handleSignUp}>
              {loading ? (
                <ActivityIndicator color={colors.white} />
              ) : (
                  <ButtonText>Registrar</ButtonText>
                )}
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}
