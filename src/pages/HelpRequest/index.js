/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { BackHandler, Modal } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Lottie from 'lottie-react-native';
import CheckBox from '../../components/checkbox';
import Doctors from '../../assets/animations/doctors.json';

import {
  Container,
  TextHeader,
  CheckBoxField,
  Others,
  ButtonArea,
  TextArea,
  Image,
  ModalContainer,
  ModalView,
  RowView,
  ModalText,
  DescriptionText,
  ModalButtonSair,
  ModalButtonCancel,
  ModalButtonText,
  ModalButtonTextSair,
  ModalViewAnimation,
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
      latitude: '',
      longitude: '',
      geolocation: [],
      allSymptoms: [],
      showAlert: false,
      modal: false,
    };
  }

  componentDidMount() {
    const { geolocation, latitude, longitude } = this.state;

    const isLatitude = this.props.route.params.region.latitude;
    const isLongitude = this.props.route.params.region.longitude;

    if (this.props.route.params.region.latitude) {
      geolocation.push(isLatitude);
    }
    if (this.props.route.params.region.longitude) {
      geolocation.push(isLongitude);
    }
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
    const { other, allSymptoms, geolocation } = this.state;
    const { token, userData, navigation } = this.props;

    if (other !== '') {
      allSymptoms.push(other);
    }
    const body = {
      name: userData.name,
      sintoms: allSymptoms.toString(),
      user_location: geolocation.toString(),
      whatsapp: userData.whatsapp,
    };

    try {
      const response = await api.post('/help', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ showAlert: true });
    } catch (err) { }
  };

  hideAlert = () => {
    const { navigation } = this.props;

    this.setState({
      showAlert: false,
    });
    navigation.navigate('Home');
  };

  handleBack = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  render() {
    const {
      febre,
      tosse,
      faltaAr,
      cansaco,
      other,
      showAlert,
      modal,
    } = this.state;

    return (
      <Container showAlert={showAlert}>
        <Modal
          animationType="fade"
          transparent
          visible={modal}
          onRequestClose={() => this.setState({ modal: false })}
        >
          <ModalContainer>
            <ModalView>
              <ModalText>ATENÇÃO!</ModalText>
              <DescriptionText>
                Fique em casa e com o celular próximo. A ajuda está a caminho!
              </DescriptionText>
              <ModalButtonSair
                onPress={() => {
                  this.setState({ modal: false });
                  this.handleBack();
                }}
              >
                <ModalButtonTextSair>Entendido</ModalButtonTextSair>
              </ModalButtonSair>
              <ModalViewAnimation>
                <Lottie resizeMode="contain" source={Doctors} autoPlay loop />
              </ModalViewAnimation>
            </ModalView>
          </ModalContainer>
        </Modal>
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
            this.setState({ modal: true });
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
