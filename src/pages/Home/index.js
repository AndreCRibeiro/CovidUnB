/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AwesomeAlert from 'react-native-awesome-alerts';

import { RadioButton } from 'react-native-paper';
import useAuth from '../../store';
import { colors } from '../../styles';

import {
  Container,
  TopCards,
  MiddleCards,
  BottomCards,
  Card,
  Text,
  Image,
  MediumImage,
  LargeImage,
  SelectionView,
  TextView,
  QuestionText,
  ViewButtons,
  ViewButtonYes,
  ViewButtonNo,
  RadioText,
  LogoutView,
  LogoutButton,
} from './styles';
import api from '../../services/api';

const withZustand = (Comp) => (props) => {
  const { token, userData, isSick, changeGeolocation, geolocation } = useAuth();
  return (
    <Comp
      {...props}
      token={token}
      userData={userData}
      isSick={isSick}
      changeGeolocation={changeGeolocation}
      geolocation={geolocation}
    />
  );
};

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    checked: null,
    region: {
      latitude: '',
      longitude: '',
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134,
    },
    showAlert: false,
  };

  async componentDidMount() {
    const checkedAsync = await AsyncStorage.getItem('checked');

    if (checkedAsync) {
      this.setState({ checked: checkedAsync });
    } else {
      this.setState({ checked: 'second' });
    }

    await Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          mapAvaible: false,
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      }, // sucesso
      () => {
        this.setState({
          mapAvaible: false,
          region: {
            latitude: -15.763847,
            longitude: -47.8721,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      }, // erro
      {
        timeout: 5000,
        enableHighAccuracy: false,
        maximumAge: 1000,
      }
    );
  }

  handleYes = async () => {
    const { userData, token } = this.props;
    const body = { email: userData.email, is_sick: true };
    const response = await api.put('volunteers', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    AsyncStorage.setItem('checked', 'first');
    this.setState({ showAlert: true });
  };

  handleNo = async () => {
    const { userData, token } = this.props;
    const body = { email: userData.email, is_sick: false };
    const response = await api.put('volunteers', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    AsyncStorage.setItem('checked', 'second');
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  handleNavigateToHelp = () => {
    const { region } = this.state;
    const { navigation } = this.props;

    navigation.navigate('HelpRequest', { region });
  };

  handleNavigateToLocal = () => {
    const { navigation } = this.props;

    navigation.navigate('Map');
  };

  handleNavigateToQuestions = () => {
    const { navigation } = this.props;

    navigation.navigate('Questions');
  };

  handleNavigateToSolidary = () => {
    const { navigation } = this.props;

    navigation.navigate('Solidary');
  };

  handleNavigateToTalk = () => {
    const { navigation } = this.props;

    navigation.navigate('Talk');
  };

  handleNavigateToVolunteer = () => {
    const { navigation } = this.props;

    navigation.navigate('Volunteer');
  };

  handleLogout = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  render() {
    const { checked, showAlert } = this.state;
    const { userData } = this.props;

    return (
      <Container>
        <SelectionView>
          <TextView>
            <QuestionText>
              Bem-vindo, {userData ? userData.name : 'Usuário'} !
            </QuestionText>
          </TextView>
          <QuestionText>Está com sintomas de Covid-19?</QuestionText>
          <ViewButtons>
            <ViewButtonYes>
              <RadioButton
                value="first"
                place
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({ checked: 'first' });
                  this.handleYes();
                }}
                color={colors.headerBlue}
              />
              <RadioText>Sim, estou com sintomas.</RadioText>
            </ViewButtonYes>
            <ViewButtonNo>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({ checked: 'second' });
                  this.handleNo();
                }}
                color={colors.headerBlue}
              />
              <RadioText>Não, estou bem.</RadioText>
            </ViewButtonNo>
          </ViewButtons>
        </SelectionView>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          message="Desejamos-lhe uma boa recuperação!"
          useNativeDriver
          closeOnTouchOutside
          closeOnHardwareBackPress
          showConfirmButton
          confirmText="Entendido"
          confirmButtonColor="#0039a6"
          onConfirmPressed={() => {
            this.hideAlert();
          }}
          alertContainerStyle={{
            elevation: 20,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          messageStyle={{ color: '#000' }}
        />
        <TopCards>
          <Card onPress={() => this.handleNavigateToLocal()}>
            <Image source={require('../../assets/images/destination.png')} />
            <Text>Localização</Text>
          </Card>
          <Card onPress={() => this.handleNavigateToVolunteer()}>
            <MediumImage source={require('../../assets/images/charity.png')} />
            <Text>Voluntarie-se</Text>
          </Card>
        </TopCards>
        <MiddleCards>
          <Card onPress={() => this.handleNavigateToQuestions()}>
            <MediumImage source={require('../../assets/images/question.png')} />
            <Text>Dúvidas</Text>
          </Card>
          <Card onPress={() => this.handleNavigateToSolidary()}>
            <LargeImage source={require('../../assets/images/phone.png')} />
            <Text>Ajuda solidária</Text>
          </Card>
        </MiddleCards>
        <BottomCards>
          <Card onPress={() => this.handleNavigateToHelp()}>
            <LargeImage source={require('../../assets/images/heart.png')} />
            <Text>Pedir Socorro</Text>
          </Card>
          <Card onPress={() => this.handleNavigateToTalk()}>
            <Image source={require('../../assets/images/reception.png')} />
            <Text>Fale Conosco</Text>
          </Card>
        </BottomCards>
        <LogoutView>
          <LogoutButton onPress={() => this.handleLogout()}>
            <Icon name="exit-to-app" size={33} color={colors.white} />
          </LogoutButton>
        </LogoutView>
      </Container>
    );
  }
}

export default withZustand(Home);
