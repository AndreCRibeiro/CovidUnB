/* eslint-disable react/static-property-placement */
/* eslint-disable global-require */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';
import useAuth from '../../store';

import {
  Container,
  Form,
  Input,
  ButtonVolunteer,
  VolunteerButtonText,
  CenterView,
  SimpleText,
} from './styles';

import { colors } from '../../styles';

const withZustand = (Comp) => (props) => {
  const { token, isSick } = useAuth();
  return <Comp {...props} token={token} isSick={isSick} />;
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

  handleSubmit = async () => {
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
    } = this.state;
    const { navigation, token, isSick } = this.props;

    const body = {
      name: userName,
      email: userEmail,
      whatsapp,
      cpf: userCPF,
      professional_id: userNRP,
      uf,
      specialty,
      administrative_region: administrativeRegion,
      activities,
      user_location: '',
      is_sick: isSick,
    };
    try {
      const response = await api.post('volunteers', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {}

    // navigation.navigate('Home');
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
          <ScrollView>
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
              placeholder="Email"
              value={userEmail}
              onChangeText={(text) => this.setState({ userEmail: text })}
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
              placeholder="whatsapp"
              value={whatsapp}
              onChangeText={(text) => this.setState({ whatsapp: text })}
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
              placeholder="CPF"
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
              placeholder="Região Administrativa"
              value={administrativeRegion}
              onChangeText={(text) =>
                this.setState({ administrativeRegion: text })
              }
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

            <ButtonVolunteer loading={loading} onPress={this.handleSubmit}>
              {loading ? (
                <ActivityIndicator color={colors.white} />
              ) : (
                <VolunteerButtonText>CANDITAR-SE</VolunteerButtonText>
              )}
            </ButtonVolunteer>
          </ScrollView>
        </Form>
      </Container>
    );
  }
}

export default withZustand(Volunteer);
