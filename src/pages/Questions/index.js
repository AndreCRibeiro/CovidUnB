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

export default class Questions extends Component {
  render() {
    return (
      <Container>
        <CenterView>
          <LogoUnB source={require('../../assets/images/logo.png')} />
          <SimpleText>Telefone: (61)XXXX-XXXX</SimpleText>
        </CenterView>
        <CenterView>
          <LogoLatitude source={require('../../assets/images/latitude.png')} />
          <SimpleText>Telefone: (61)YYYY-YYYY</SimpleText>
        </CenterView>
      </Container>
    );
  }
}
