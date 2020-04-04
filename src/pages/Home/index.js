/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import useAuth from '../../store';
import CheckBoxBall from '../../components/checkboxBall';

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
} from './styles';

const withZustand = (Comp) => (props) => {
  const { token, userData, reqIsSick, isSick } = useAuth();
  return (
    <Comp
      {...props}
      token={token}
      userData={userData}
      reqIsSick={reqIsSick}
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
    yes: false,
    no: false,
    answer: [],
  };

  componentDidMount() {
    const { yes, no, answer } = this.state;
    const { isSick, reqIsSick, userData } = this.props;
    console.log(userData);
    if (yes) {
      answer.push('yes');
    }
    if (no) {
      answer.push('no');
    }
    reqIsSick(answer);
    console.tron.log(isSick);
  }

  handleNavigateToHelp = () => {
    const { navigation } = this.props;

    navigation.navigate('HelpRequest');
  };

  handleNavigateToLocal = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
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
    const { yes, no } = this.state;
    const { userData } = this.props;

    return (
      <Container>
        <SelectionView>
          <QuestionText>Olá {userData.name}, você está doente?</QuestionText>
          <CheckBoxBall
            selected={yes}
            onPress={() =>
              this.setState({
                yes: !yes,
                no: false,
              })
            }
            text="Sim"
          />
          <CheckBoxBall
            selected={no}
            onPress={() =>
              this.setState({
                yes: false,
                no: !no,
              })
            }
            text="Não"
          />
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
