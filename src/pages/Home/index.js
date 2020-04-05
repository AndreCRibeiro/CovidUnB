/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
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
  CheckboxView,
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
    yes: false,
    no: false,
    sick: '',
  };

  async componentDidMount() {
    const { sick } = this.state;
    const { isSick } = this.props;

    try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(isSick));
      console.tron.log('entrei');
    } catch (e) {
      // console.tron.log('aqui');
    }

    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        console.tron.log(value);
      }
    } catch (e) {
      // error reading value
    }

    if (isSick === true) {
      this.setState({ yes: true, no: false });
    }
    if (isSick === false) {
      this.setState({ yes: false, no: true });
    } else {
      this.setState({ yes: false, no: false });
    }
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    const { isSick } = this.props;
    if (isSick !== nextprops.isSick) {
      this.componentDidMount();
    }
  }

  handleYes = async () => {
    const { yes } = this.state;
    const { reqIsSick, userData, isSick, token } = this.props;
    await reqIsSick(true);
    await this.changeState(true);
    if (isSick !== null) {
      const body = { email: userData.email, is_sick: isSick };
      const response = await api.put('volunteers', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ yes: !yes, no: false });
    } else {
      await reqIsSick(true);
    }
  };

  handleNo = async () => {
    const { no, sick } = this.state;
    const { reqIsSickNo, userData, isSick, token } = this.props;
    reqIsSickNo(false);
    if (isSick !== null) {
      const body = { email: userData.email, is_sick: isSick };
      const response = await api.put('volunteers', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ yes: false, no: !no, sick: 'false' });
    } else {
      await reqIsSickNo(false);
    }
  };

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
          <QuestionText>Bem-vindo !</QuestionText>
          <QuestionText>Você está com algum dos sintomas?</QuestionText>
          <CheckboxView>
            <CheckBoxBall selected={yes} onPress={this.handleYes} text="Sim" />
            <CheckBoxBall selected={no} onPress={this.handleNo} text="Não" />
          </CheckboxView>
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
