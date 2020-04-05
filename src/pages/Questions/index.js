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
  Title,
} from './styles';

export default class Questions extends Component {
  render() {
    return (
      <Container>
        <Title>Siga as recomendações:</Title>
        <CardList horizontal>
          <Card>
            <Info source={require('../../assets/images/lavar.png')} />
            <Source
              onPress={() =>
                Linking.openURL('https://coronavirus.saude.gov.br')
              }
            >
              https://coronavirus.saude.gov.br/
            </Source>
          </Card>
          <Card>
            <Info source={require('../../assets/images/cubrir.png')} />
            <Source
              onPress={() =>
                Linking.openURL('https://coronavirus.saude.gov.br')
              }
            >
              https://coronavirus.saude.gov.br/
            </Source>
          </Card>
          <Card>
            <Info source={require('../../assets/images/compobj.png')} />
            <Source
              onPress={() =>
                Linking.openURL('https://coronavirus.saude.gov.br')
              }
            >
              https://coronavirus.saude.gov.br/
            </Source>
          </Card>
          <Card>
            <Info source={require('../../assets/images/evitar.png')} />
            <Source
              onPress={() =>
                Linking.openURL('https://coronavirus.saude.gov.br')
              }
            >
              https://coronavirus.saude.gov.br/
            </Source>
          </Card>
          <Card>
            <Info source={require('../../assets/images/manter.png')} />
            <Source
              onPress={() =>
                Linking.openURL('https://coronavirus.saude.gov.br')
              }
            >
              https://coronavirus.saude.gov.br/
            </Source>
          </Card>
        </CardList>
        <EndView>
          <SimpleText>
            Para mais informaçoes, busque fontes confiáveis:
          </SimpleText>
          <Source onPress={() => Linking.openURL('https://saude.gov.br/')}>
            https://saude.gov.br/
          </Source>
          <Source
            onPress={() => Linking.openURL('https://coronavirus.saude.gov.br')}
          >
            https://coronavirus.saude.gov.br/
          </Source>

          <Source onPress={() => Linking.openURL('https://www.paho.org/bra/')}>
            https://www.paho.org/bra/
          </Source>
        </EndView>
      </Container>
    );
  }
}
