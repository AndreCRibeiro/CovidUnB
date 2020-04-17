/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator, Alert, BackHandler } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Picker } from '@react-native-community/picker';
import AwesomeAlert from 'react-native-awesome-alerts';
import PropTypes from 'prop-types';
import api from '../../services/api';
import useAuth from '../../store';

import {
  Container,
  Form,
  Input,
  PickerView,
  ButtonVolunteer,
  VolunteerButtonText,
  CenterView,
  SimpleText,
} from './styles';

import { colors } from '../../styles';

const withZustand = (Comp) => (props) => {
  const { token, isSick, userData } = useAuth();
  return <Comp {...props} token={token} isSick={isSick} userData={userData} />;
};

class Volunteer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    userName: '',
    userEmail: '',
    whatsapp: '',
    userCPF: '',
    userNRP: '',
    uf: '',
    specialty: '',
    administrativeRegion: '',
    activities: '',
    loading: false,
  };

  componentDidMount() {
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

  handleSubmit = async () => {
    const { userData } = this.props;

    this.setState({ loading: true });
    const {
      userCPF,
      userNRP,
      uf,
      specialty,
      administrativeRegion,
      activities,
    } = this.state;
    const { navigation, token } = this.props;

    const body = {
      name: userData.name,
      email: userData.email,
      whatsapp: userData.whatsapp,
      cpf: userCPF,
      professional_id: userNRP,
      uf,
      specialty,
      administrative_region: administrativeRegion,
      activities,
      user_location: ' ',
      is_sick: false,
    };
    try {
      const response = await api.post('volunteers', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Alert.alert(
        'Voluntário cadastrado',
        'Obrigado por se voluntariar a ajudar o próximo!',
        [{ text: 'OK', onPress: () => navigation.navigate('Home') }],
        { cancelable: false }
      );
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      userName,
      userEmail,
      whatsapp,
      userCPF,
      userNRP,
      uf,
      specialty,
      administrativeRegion,
      activities,
      loading,
    } = this.state;

    return (
      <Container>
        <CenterView>
          <SimpleText>Candidate-se como voluntário:</SimpleText>
        </CenterView>
        <Form>
          <TextInputMask
            type="cpf"
            style={{
              height: 50,
              borderRadius: 11,
              padding: 13,
              borderWidth: 2,
              marginTop: 8,
              marginBottom: 15,
              elevation: 2,
              backgroundColor: '#fff',
            }}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="CPF"
            placeholderTextColor="#000"
            value={userCPF}
            onChangeText={(text) => this.setState({ userCPF: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Unidade da Federação"
            value={uf}
            onChangeText={(text) => this.setState({ uf: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="N Registro Profissional"
            keyboardType="numeric"
            value={userNRP}
            onChangeText={(text) => this.setState({ userNRP: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Especialidade"
            value={specialty}
            onChangeText={(text) => this.setState({ specialty: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Atividades voluntárias"
            value={activities}
            onChangeText={(text) => this.setState({ activities: text })}
          />
          <PickerView>
            <Picker
              selectedValue={administrativeRegion}
              onValueChange={(label) =>
                this.setState({ administrativeRegion: label })
              }
            >
              <Picker.Item label="Sua Região Administrativa" value="" />
              <Picker.Item label="Plano Piloto" value="Plano Piloto" />
              <Picker.Item label="Águas Claras" value="Águas Claras" />
              <Picker.Item label="Brazlândia" value="Brazlândia" />
              <Picker.Item label="Candangolândia" value="Candangolândia" />
              <Picker.Item label="Ceilândia" value="Ceilândia" />
              <Picker.Item label="Cruzeiro" value="Cruzeiro" />
              <Picker.Item label="Fercal" value="Fercal" />
              <Picker.Item label="Gama" value="Gama" />
              <Picker.Item label="Guará" value="Guará" />
              <Picker.Item label="Itapoã" value="Itapoã" />
              <Picker.Item label="Jardim Botânico" value="Jardim Botânico" />
              <Picker.Item label="Lago Norte" value="Lago Norte" />
              <Picker.Item label="Lago Sul" value="Lago Sul" />
              <Picker.Item
                label="Núcleo Bandeirante"
                value="Núcleo Bandeirante"
              />
              <Picker.Item label="Paranoá" value="Paranoá" />
              <Picker.Item label="Park Way" value="Park Way" />
              <Picker.Item label="Planaltina" value="Planaltina" />
              <Picker.Item label="Recanto das Emas" value="Recanto das Emas" />
              <Picker.Item label="Riacho Fundo I" value="Riacho Fundo I" />
              <Picker.Item label="Riacho Fundo II" value="Riacho Fundo II" />
              <Picker.Item label="Samambaia" value="Samambaia" />
              <Picker.Item label="Santa Maria" value="Santa Maria" />
              <Picker.Item label="São Sebastião" value="São Sebastião" />
              <Picker.Item label="SCIA/Estrutural" value="SCIA/Estrutural" />
              <Picker.Item label="SIA" value="SIA" />
              <Picker.Item label="Sobradinho" value="Sobradinho" />
              <Picker.Item label="Sobradinho II" value="Sobradinho II" />
              <Picker.Item
                label="Sudoeste/Octogonal"
                value="Sudoeste/Octogonal"
              />
              <Picker.Item label="Taguatinga" value="Taguatinga" />
              <Picker.Item label="Varjão" value="Varjão" />
              <Picker.Item label="Vicente Pires" value="Vicente Pires" />
            </Picker>
          </PickerView>

          <ButtonVolunteer loading={loading} onPress={this.handleSubmit}>
            {loading ? (
              <ActivityIndicator color={colors.white} />
            ) : (
                <VolunteerButtonText>CANDIDATAR-SE</VolunteerButtonText>
              )}
          </ButtonVolunteer>
        </Form>
      </Container>
    );
  }
}

export default withZustand(Volunteer);
