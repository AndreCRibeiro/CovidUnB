/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Alert } from 'react-native';
import CheckBox from '../../components/checkbox';

import {
  Container,
  TextHeader,
  CheckBoxField,
  Others,
  ButtonArea,
  TextArea,
  Image,
} from './styles';

import useAuth from '../../store';
import api from '../../services/api';

const withZustand = (Comp) => (props) => {
  const { token, userData, reqIsSick, isSick } = useAuth();
  return <Comp {...props} token={token} userData={userData} />;
};

class HelpRequest extends Component {
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
    const { other, allSymptoms } = this.state;
    const { token, userData, navigation } = this.props;

    if (other !== '') {
      allSymptoms.push(other);
    } else {
      console.tron.log('entrei aqui');
    }

    const body = {
      name: userData.name,
      sintoms: allSymptoms.toString(),
      user_location: '',
      whatsapp: userData.whatsapp,
    };

    // await Geolocation.getCurrentPosition((info) => console.tron.log(info));

    try {
      const response = await api.post('/help', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Alert.alert(
        'Atenção',
        'Fique em casa e com o celular próximo!',
        [{ text: 'OK', onPress: () => navigation.navigate('Home') }],
        { cancelable: false }
      );
    } catch (err) { }
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

export default withZustand(HelpRequest);
