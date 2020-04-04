import React, { Component } from 'react';
import Geolocation from 'react-native-geolocation-service';
import CheckBox from '../../components/checkbox';

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
      allSymptoms: [],
    };
  }

  handleCheck = (group) => {
    const { allSymptoms, febre, tosse, faltaAr, cansaco } = this.state;

    const index = allSymptoms.findIndex((gp) => gp === group);

    if (index >= 0) {
      allSymptoms.splice(index, 1);
    } else {
      allSymptoms.push(group);
    }
    switch (group) {
      case 'Febre': {
        this.setState({ allSymptoms, febre: !febre });
        break;
      }
      case 'Tosse seca': {
        this.setState({ allSymptoms, tosse: !tosse });
        break;
      }
      case 'Falta de ar': {
        this.setState({ allSymptoms, faltaAr: !faltaAr });
        break;
      }
      case 'Cansaço': {
        this.setState({ allSymptoms, cansaco: !cansaco });
        break;
      }
      default: {
        break;
      }
    }
  };

  sendHelpRequest = async () => {
    const { allSymptoms, other } = this.state;

    console.tron.log('Teste', other);

    if (other !== '') {
      this.setState({ allSymptoms: [...allSymptoms, other] });
    } else {
      console.tron.log('Entrei aqui');
    }

    console.tron.log(allSymptoms);

    /* await Geolocation.getCurrentPosition((info) => console.tron.log(info));

    AlertField.alert(
      'Mantenha a calma e o seu celular por perto. A ajuda está a caminho!'
    );

    const response = await api.post('/help', {
      headers: { Authorization: 'application/x-www-form-urlencoded' },
      data: {
        name: 'Rafael Zerbini',
        sintoms: allSymptoms,
        user_location: ' ',
        whatsapp: '61999712343',
      },
    }); */
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
            onPress={() => this.handleCheck('Febre')}
            text="Febre"
          />
          <CheckBox
            selected={tosse}
            onPress={() => this.handleCheck('Tosse seca')}
            text="Tosse seca"
          />
          <CheckBox
            selected={faltaAr}
            onPress={() => this.handleCheck('Falta de ar')}
            text="Falta de ar"
          />
          <CheckBox
            selected={cansaco}
            onPress={() => this.handleCheck('Cansaço')}
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
