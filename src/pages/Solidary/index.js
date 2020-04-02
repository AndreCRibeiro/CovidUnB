/* eslint-disable no-nested-ternary */
/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
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
} from './styles';

export default class Volunteer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    region: false,
    task: false,
    loading: false,
  };

  handleSubmit = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  render() {
    const { region, task, loading } = this.state;

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
          <ButtonVolunteer loading={loading} onPress={this.handleSubmit}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
                <VolunteerButtonText>CANDITAR</VolunteerButtonText>
              )}
          </ButtonVolunteer>
        </Form>
      </Container>
    );
  }
}
