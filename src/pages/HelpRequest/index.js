import React, { Component } from 'react';
import CheckBox from '../../components/checkbox';
import { Alert } from 'react-native';
import {
  Container,
  TextHeader,
  CheckBoxField,
  Others,
  Button,
  Text,
  Image,
  AlertField,
} from './styles';

export default class HelpRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      febre: false,
      tosse: false,
      faltaAr: false,
      cansaco: false,
    };
  }

  sendHelpRequest = () => {
    AlertField.alert(
      'Mantenha a calma e o seu celular por perto. A ajuda está a caminho!'
    );
  };

  render() {
    const { febre, tosse, faltaAr, cansaco } = this.state;
    return (
      <Container>
        <TextHeader>
          Para pedir ajuda informe seus sintomas e toque no botão:
        </TextHeader>
        <CheckBoxField>
          <CheckBox
            selected={febre}
            onPress={() => this.setState({})}
            text="Febre"
          />
          <CheckBox
            selected={tosse}
            onPress={() => this.handleCheck('Diabetes')}
            text="Tosse seca"
          />
          <CheckBox
            selected={faltaAr}
            onPress={() => this.handleCheck('Diabetes')}
            text="Falta de ar"
          />
          <CheckBox
            selected={cansaco}
            onPress={() => this.handleCheck('Diabetes')}
            text="Cansaço"
          />
          <Others placeholder="Outros sintomas" autoCorrect={false} />
        </CheckBoxField>
        <Button
          onPress={() => {
            this.sendHelpRequest();
          }}
        >
          <Image source={require('../../assets/images/megaphone.png')} />
          <Text>SOCORRO!</Text>
        </Button>
      </Container>
    );
  }
}
