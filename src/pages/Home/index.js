/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { RadioButton } from 'react-native-paper';
import { View } from 'react-native';
import useAuth from '../../store';
import CheckBoxBall from '../../components/checkboxBall';
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
  QuestionText,
  CheckboxView,
  ViewButtonYes,
  ViewButtonNo,
  RadioText,
} from './styles';
import api from '../../services/api';

const withZustand = (Comp) => (props) => {
  const { token, userData, reqIsSick, reqIsSickNo, isSick } = useAuth();
  return (
    <Comp
      {...props}
      token={token}
      userData={userData}
      reqIsSick={reqIsSick}
      reqIsSickNo={reqIsSickNo}
      isSick={isSick}
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
    checked: 'second',
  };

  handleYes = async () => {
    const { userData, token } = this.props;
    const body = { email: userData.email, is_sick: true };
    const response = await api.put('volunteers', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  handleNo = async () => {
    const { userData, token } = this.props;
    const body = { email: userData.email, is_sick: false };
    const response = await api.put('volunteers', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  handleNavigateToHelp = () => {
    const { navigation } = this.props;

    navigation.navigate('HelpRequest');
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

  render() {
    const { checked } = this.state;
    const { userData } = this.props;

    return (
      <Container>
        <SelectionView>
          <QuestionText>
            Bem-vindo, {userData ? userData.name : 'Usuário'} !
          </QuestionText>
          <QuestionText>Você está com algum dos sintomas?</QuestionText>
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
        </SelectionView>
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
      </Container>
    );
  }
}

export default withZustand(Home);
