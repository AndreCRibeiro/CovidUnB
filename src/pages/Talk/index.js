/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import {
  Container,
  CenterView,
  LogoUnB,
  LogoLatitude,
  SimpleText,
} from './styles';

export default class Talk extends Component {
  render() {
    return (
      <Container>
        <CenterView>
          <LogoUnB source={require('../../assets/images/logo.png')} />
          <SimpleText>Telefone: (61) 3107-3300</SimpleText>
        </CenterView>
        <CenterView>
          <LogoLatitude source={require('../../assets/images/latitude.png')} />
          <SimpleText>Telefone: (61) 3107-5597</SimpleText>
        </CenterView>
      </Container>
    );
  }
}
