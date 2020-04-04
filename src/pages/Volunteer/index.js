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
  Input,
  ButtonVolunteer,
  VolunteerButtonText,
  CenterView,
  SimpleText,
  PickerView,
} from './styles';

import { colors } from '../../styles';

export default class Volunteer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    userName: '',
    userRG: '',
    userNRP: '',
    loading: false,
  };

  handleSubmit = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

  render() {
    const { userName, userRG, userNRP, loading } = this.state;

    return (
      <Container>
        <CenterView>
          <SimpleText>
            Informe os dados para o exercício do voluntário
          </SimpleText>
        </CenterView>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome"
            value={userName}
            onChangeText={(text) => this.setState({ userName: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="RG"
            value={userRG}
            onChangeText={(text) => this.setState({ userRG: text })}
          />
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="N Registro Profissional"
            value={userNRP}
            onChangeText={(text) => this.setState({ userCRM: text })}
          />
          <PickerView>
            <Picker>
              <Picker.Item label="Selecionar a UF do Conselho" />
              <Picker.Item label="Opção 1" value="1" />
              <Picker.Item label="Opção 2" value="2" />
            </Picker>
            <Picker>
              <Picker.Item label="Selecione sua especialidade" />
              <Picker.Item label="Opção A" value="1" />
              <Picker.Item label="Opção B" value="2" />
            </Picker>
          </PickerView>
          <ButtonVolunteer loading={loading} onPress={this.handleSubmit}>
            {loading ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <VolunteerButtonText>CANDITAR</VolunteerButtonText>
            )}
          </ButtonVolunteer>
        </Form>
      </Container>
    );
  }
}
