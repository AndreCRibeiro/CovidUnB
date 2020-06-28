/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator, Alert, StatusBar } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  AvatarView,
  ButtonChangeAvatar,
  AvatarText,
  Avatar,
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
    drc: false,
    ddi: false,
    loading: false,
    check: true,
    passLengthCheck: true,
    filepath: {
      data: '',
      uri: '',
    },
    fileData: '',
    fileUri: '',
    fileType: '',
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
    const { fileUri, fileData, fileType } = this.state;

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
      diabetes,
    } = this.state;
    const { navigation } = this.props;

    if (diabetes === true) {
      this.setState({ riskGroup: [...riskGroup, 'Diabetes'] });
    }

    /* const data = new FormData();
    data.append({
      uri: fileUri,
      name: 'photo.jpg',
      data: fileData,
      type: fileType,
    });
    try {
      const res = await api.post(
        '/files',
        { file: data },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            email: 'andre_ribeiro97@hotmail.com',
          },
        }
      );
    } catch (error) {
      console.log(error);
    } */

    try {
      const response = await api.post('/users', {
        name: userName,
        email: userMail,
        whatsapp: userTel,
        password: userPassConfirmed,
        address: userAddress,
        birth_date: userBirth,
        linkUnb,
        type: linkUnb,
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
    const { riskGroup, diabetes, hipertensao, drc, ddi } = this.state;

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
      case 'Doença Respiratória Crônica': {
        this.setState({ riskGroup, drc: !drc });
        break;
      }
      case 'Doenças com Depressão Imunológica': {
        this.setState({ riskGroup, ddi: !ddi });
        break;
      }
      default: {
        break;
      }
    }
  };

  changeAvatar = async () => {
    const { fileUri, fileData } = this.state;

    const options = {
      title: 'Escolha uma das opções',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Tirar uma foto',
      chooseFromLibraryButtonTitle: 'Escolher uma foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'mixed',
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));
        console.log(response);
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
          fileType: response.type,
        });
      }
    });
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
      drc,
      ddi,
      check,
      passLengthCheck,
      fileUri,
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
                backgroundColor: '#fff',
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
                backgroundColor: '#fff',
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
            <AvatarView>
              <ButtonChangeAvatar onPress={this.changeAvatar}>
                {fileUri ? (
                  <Avatar
                    source={{ uri: fileUri }}
                    style={{ resizeMode: 'cover' }}
                  />
                ) : (
                  <>
                    <Icon name="camera-alt" size={38} />
                    <AvatarText>Escolha uma foto</AvatarText>
                  </>
                )}
              </ButtonChangeAvatar>
            </AvatarView>
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
                selected={drc}
                onPress={() => this.handleCheck('Doença Respiratória Crônica')}
                text="Doença Respiratória Crônica"
              />
              <CheckBox
                selected={ddi}
                onPress={() =>
                  this.handleCheck('Doenças com Depressão Imunológica')
                }
                text="Doenças com Depressão Imunológica"
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
