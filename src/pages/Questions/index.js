/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Linking, BackHandler } from 'react-native';

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

import {
  infoHeight,
  infoWidth,
  questionHeight,
  questionWidth,
} from '../../styles/responsividade';

export default class Questions extends Component {
  componentDidMount() {
    console.log(questionWidth);
    console.log(questionHeight);
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
        <Title>Siga as recomendações:</Title>
        <CardList horizontal>
          <Card>
            <Info source={require('../../assets/images/lavar.png')} />
          </Card>
          <Card>
            <Info source={require('../../assets/images/cubrir.png')} />
          </Card>
          <Card>
            <Info source={require('../../assets/images/compobj.png')} />
          </Card>
          <Card>
            <Info source={require('../../assets/images/evitar.png')} />
          </Card>
          <Card last>
            <Info source={require('../../assets/images/manter.png')} />
          </Card>
        </CardList>
        <EndView>
          <SimpleText>
            Para mais informações, busque fontes confiáveis:
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
