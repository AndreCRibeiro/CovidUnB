/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import { Container, CardList, Card, Info, EndView, SimpleText } from './styles';

export default class Questions extends Component {
  render() {
    return (
      <Container>
        <CardList horizontal>
          <Card>
            <Info />
          </Card>
          <Card>
            <Info />
          </Card>
          <Card>
            <Info />
          </Card>
          <Card>
            <Info />
          </Card>
          <Card>
            <Info />
          </Card>
        </CardList>
        <EndView>
          <SimpleText>Fonte: OMS</SimpleText>
        </EndView>
      </Container>
    );
  }
}
