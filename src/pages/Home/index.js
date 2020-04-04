/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
} from './styles';

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigateToHelp = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
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
    return (
      <Container>
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
