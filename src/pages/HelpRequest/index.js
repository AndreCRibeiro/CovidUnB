import React, { Component } from 'react';
import CheckBox from '../../components/checkbox';

import Geolocation from 'react-native-geolocation-service';

import {
  Container,
  TextHeader,
  CheckBoxField,
  Others,
  ButtonArea,
  TextArea,
  Image,
  AlertField,
} from './styles';

import api from '../../services/api';

export default class HelpRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      febre: false,
      tosse: false,
      faltaAr: false,
      cansaco: false,
      other: '',
    };
  }

  sendHelpRequest = async () => {
    await Geolocation.getCurrentPosition((info) => console.tron.log(info));

    AlertField.alert(
      'Mantenha a calma e o seu celular por perto. A ajuda está a caminho!'
    );

    const response = await api.post('/help', {
      headers: { Authorization: 'application/x-www-form-urlencoded' },
      data: {
        name: 'Rafael Zerbini',
        sintoms: 'Pesadelos com Princom',
        user_location: ' ',
        whatsapp: '61999712343',
      },
    });
  };

  render() {
    const { febre, tosse, faltaAr, cansaco, other } = this.state;
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
          <Others
            placeholder="Outros sintomas"
            autoCorrect={false}
            value={other}
            onChangeText={(text) => this.setState({ other: text })}
          />
        </CheckBoxField>
        <ButtonArea
          onPress={() => {
            this.sendHelpRequest();
          }}
        >
          <Image source={require('../../assets/images/megaphone.png')} />
          <TextArea>SOCORRO!</TextArea>
        </ButtonArea>
      </Container>
    );
  }
}
