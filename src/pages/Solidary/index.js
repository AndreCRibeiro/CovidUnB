/* eslint-disable no-nested-ternary */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import PropTypes from 'prop-types';

import {
  Container,
  Form,
  ButtonVolunteer,
  VolunteerButtonText,
  CenterView,
  SimpleText,
  PickerView,
  ProfileList,
  Profile,
  Text,
} from './styles';

import api from '../../services/api';

import { colors } from '../../styles';

export default class Volunteer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    region: '',
    task: false,
    loading: false,
    data: [{ id: 1, name: 'Paulo' }],
  };

  componentDidMount = async () => {
    const response = await api.get('volunteers', {
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2MDMzODU4LCJleHAiOjE1ODYxMjAyNTh9.Gigw9MdlfM8Q7P8JcPQ2Btho36MNwngzjh2rl6zY4kY',
      },
    });

    this.setState({ data: response.data, loading: false });
  };

  sendwhatsapp = (profile) => {
    const message = `Olá ${profile.name}, ví que você se voluntariou para ${profile.activities} e gostaria da sua ajuda! Podemos falar a respeito?`;

    Linking.openURL(
      `whatsapp://send?phone=${profile.whatsapp}&text=${message}`
    );
  };

  filterByCity = async () => {
    const { region } = this.state;

    const response = await api.get(`volunteers?ra=${region}`, {
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2MDMzODU4LCJleHAiOjE1ODYxMjAyNTh9.Gigw9MdlfM8Q7P8JcPQ2Btho36MNwngzjh2rl6zY4kY',
      },
    });

    this.setState({ data: response.data, loading: false });
  };

  handleSubmit = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  render() {
    const { region, task, loading, data } = this.state;

    return (
      <Container>
        <Form>
          <PickerView>
            <Picker
              selectedValue={region}
              onValueChange={(label) => this.setState({ region: label })}
              style={{ backgroundColor: '#eee', borderRadius: 50 }}
            >
              <Picker.Item label="Filtrar por Região Administrativa" />
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
          <ButtonVolunteer loading={loading} onPress={this.filterByCity}>
            {loading ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <VolunteerButtonText>Buscar Voluntários</VolunteerButtonText>
            )}
          </ButtonVolunteer>
        </Form>

        <ProfileList>
          <ScrollView>
            {data.map((profile) =>
              !profile.is_sick ? (
                <Profile key={profile.id}>
                  <TouchableOpacity onPress={(profile) => this.sendwhatsapp}>
                    <Text>{profile.name}</Text>
                    <Text>{profile.administrative_region}</Text>
                    <Text>{profile.whatsapp}</Text>
                    <Text>Atividades: {profile.activities}</Text>
                  </TouchableOpacity>
                </Profile>
              ) : null
            )}
          </ScrollView>
        </ProfileList>
      </Container>
    );
  }
}
