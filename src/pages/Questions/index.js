/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Linking } from 'react-native';

import {
  Container,
  CardList,
  Card,
  Info,
  EndView,
  SimpleText,
  Source,
} from './styles';

export default class Questions extends Component {
  render() {
    return (
      <Container>
        <CardList horizontal>
          <Card>
            <Info source={require('../../assets/images/compobj.png')} />
            <Source
              onPress={() =>
                Linking.openURL('https://</Card>coronavirus.saude.gov.br')
              }
            >
              https://coronavirus.saude.gov.br/
            </Source>
          </Card>
          <Card>
            <Info source={require('../../assets/images/cubrir.png')} />
          </Card>
          <Card>
            <Info source={require('../../assets/images/evitar.png')} />
          </Card>
          <Card>
            <Info source={require('../../assets/images/lavar.png')} />
          </Card>
          <Card>
            <Info source={require('../../assets/images/manter.png')} />
          </Card>
        </CardList>
        <EndView>
          <SimpleText>Fonte: OMS</SimpleText>
        </EndView>
      </Container>
    );
  }
}
