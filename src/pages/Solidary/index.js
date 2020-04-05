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
  SafeAreaView,
  Flat,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import PropTypes from 'prop-types';
import useAuth from '../../store';

import {
  Container,
  Form,
  ButtonVolunteer,
  VolunteerButtonText,
  PickerView,
  ProfileList,
  Profile,
  Text,
} from './styles';

import api from '../../services/api';

import { colors } from '../../styles';

const withZustand = (Comp) => (props) => {
  const { token, userData } = useAuth();
  return <Comp {...props} token={token} />;
};

class Solidary extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    region: '',
    task: false,
    loading: false,
  };

  componentDidMount = async () => {
    const { token } = this.props;

    const response = await api.get('volunteers', {
      headers: {
        Authorization: `Bearer ${token}`,
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
    const { token } = this.props;

    const response = await api.get(`volunteers?ra=${region}`, {
      headers: {
        Authorization: `Bearer ${token}`,
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
              <Picker.Item label="Filtrar por Região Administrativa" value="" />
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

        {data ? (
          <ProfileList>
            <ScrollView showsVerticalScrollIndicator={false}>
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
        ) : null}
      </Container>
    );
  }
}

export default withZustand(Solidary);
