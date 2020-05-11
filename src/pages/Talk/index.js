/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { BackHandler } from 'react-native';

import {
  Container,
  CenterView,
  LogoUnB,
  LogoLatitude,
  SimpleText,
} from './styles';

export default class Talk extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
    return true;
  };

  render() {
    return (
      <Container>
        <CenterView>
          <LogoUnB source={require('../../assets/images/logo.png')} />
          <SimpleText>Telefone: XXXX-XXXX</SimpleText>
        </CenterView>
        <CenterView>
          <LogoLatitude source={require('../../assets/images/latitude.png')} />
          <SimpleText>Telefone: YYYY-YYYY</SimpleText>
        </CenterView>
      </Container>
    );
  }
}

// 16
