/* eslint-disable no-nested-ternary */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-community/picker';
import PropTypes from 'prop-types';
import api from '../../services/api';
import useAuth from '../../store';

import {
  Container,
  Form,
  CenterView,
  SimpleText,
  PickerView,
  Volunteers,
  Info,
  VolunteerName,
  VolunteerTel,
} from './styles';

import { colors } from '../../styles';

const withZustand = (Comp) => (props) => {
  const { token, userData } = useAuth();
  return <Comp {...props} token={token} userData={userData} />;
};

class Volunteer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    region: false,
    task: false,
    allVolunteers: [],
    loading: false,
  };

  async componentDidMount() {
    const { token, userData } = this.props;
    try {
      const response = await api.get('/volunteers', {
        headers: { Authorization: `bearer ${token}` },
      });
      this.setState({ allVolunteers: response });
      console.tron.log(response);
    } catch (err) {
      console.tron.log(err);
    }
  }

  handleSubmit = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  render() {
    const { region, task, loading, allVolunteers } = this.state;

    console.tron.log(allVolunteers);

    return (
      <Container>
        <CenterView>
          <SimpleText>
            Informe com o que podemos contar com sua ajuda
          </SimpleText>
        </CenterView>
        <Form>
          <PickerView>
            <Picker
              selectedValue={region}
              onValueChange={(itemValue) =>
                this.setState({ region: itemValue })
              }
            >
              <Picker.Item label="Selecionar sua região" />
              <Picker.Item label="Asa Norte" value="1" />
              <Picker.Item label="Asa Sul" value="2" />
              <Picker.Item label="Taguatinga" value="3" />
            </Picker>
            {region && region === '1' ? (
              <Picker
                selectedValue={task}
                onValueChange={(itemValue) =>
                  this.setState({ task: itemValue })
                }
              >
                <Picker.Item label="Selecione o serviço" />
                <Picker.Item label="Médicos" value="1" />
                <Picker.Item label="Passear com cachorros" value="2" />
                <Picker.Item label="Realizar compras" value="3" />
              </Picker>
            ) : region && region === '2' ? (
              <Picker
                selectedValue={task}
                onValueChange={(itemValue) =>
                  this.setState({ task: itemValue })
                }
              >
                <Picker.Item label="Selecione o serviço" />
                <Picker.Item label="Psicólogo" value="1" />
                <Picker.Item label="Conversar" value="2" />
                <Picker.Item label="Compras" value="3" />
              </Picker>
            ) : (
                  region && (
                    <Picker
                      selectedValue={task}
                      onValueChange={(itemValue) =>
                        this.setState({ task: itemValue })
                      }
                    >
                      <Picker.Item label="Selecione o serviço" />
                      <Picker.Item label="Personal" value="1" />
                      <Picker.Item label="Remédios" value="2" />
                      <Picker.Item label="Veterinário" value="3" />
                    </Picker>
                  )
                )}
          </PickerView>
          <Volunteers data={allVolunteers}>
            <Info>
              <VolunteerName />
              <VolunteerTel />
            </Info>
          </Volunteers>
        </Form>
      </Container>
    );
  }
}

export default withZustand(Volunteer);
