/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  ScrollView,
  TextInput,
  Linking,
  TouchableOpacity,
  BackHandler,
  ActivityIndicator,
  Modal,
} from 'react-native';

import {
  Container,
  CardContainer,
  Text,
  ButtonFilter,
  ButtonText,
  Input,
  ModalView,
  ModalText,
  DescriptionText,
  ModalButtonSair,
  ModalButtonTextSair,
  ModalContainer,
  TextView,
} from './styles';
import { colors } from '../../styles';

import useAuth from '../../store';

import api from '../../services/api';

const withZustand = (Comp) => (props) => {
  const { token, userData } = useAuth();
  return <Comp {...props} token={token} userData={userData} />;
};

class Orientation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orientations: [],
      query: '',
      loading: false,
      modal: false,
      data: [],
    };
  }

  async componentDidMount() {
    const { token } = this.props;

    try {
      const response = await api.get('/orientations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.setState({ orientations: response.data });
    } catch (err) {
      console.log(err);
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

  filterByDepartament = async () => {
    const { token } = this.props;

    try {
      const response = await api.get(`/orientations?dep=${this.state.query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      this.setState({ orientations: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  confirmAndSendMail = (item) => {
    this.setState({ modal: true, data: item });
  };

  sendMail = async () => {
    const { data } = this.state;
    const { token, userData } = this.props;

    try {
      const response = await api.put(
        `/orientations/${data.id}`,
        {
          professor_id: userData.id,
          status: 'answering',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    Linking.openURL(
      `mailto:${data.user.email}?subject=UnB Solidária - Solicitação de Orientação&body=Caro(a) ${data.user.name}, \nvi seu pedido de orientação e gostaria de auxiliá-lo.\n\nResponda este email caso ainda deseje orientação.`
    );
  };

  render() {
    const { orientations, loading, modal } = this.state;

    return (
      <Container>
        {modal ? (
          <Modal
            animationType="fade"
            transparent
            visible={modal}
            onRequestClose={() => this.setState({ modal: false })}
          >
            <ModalContainer>
              <ModalView>
                <DescriptionText>Deseja iniciar orientação?</DescriptionText>
                <ModalButtonSair
                  onPress={() => {
                    this.setState({ modal: false });
                    this.sendMail();
                  }}
                >
                  <ModalButtonTextSair>Orientar</ModalButtonTextSair>
                </ModalButtonSair>

                <ModalButtonSair
                  onPress={() => {
                    this.setState({ modal: false });
                  }}
                >
                  <ModalButtonTextSair>Agora não</ModalButtonTextSair>
                </ModalButtonSair>
              </ModalView>
            </ModalContainer>
          </Modal>
        ) : null}
        <Input
          autoCorrect={false}
          autoCapitalize="characters"
          placeholder="Ex: ENE"
          onChangeText={(text) => this.setState({ query: text.toUpperCase() })}
        />
        <ButtonFilter loading={loading} onPress={this.filterByDepartament}>
          {loading ? (
            <ActivityIndicator color={colors.white} />
          ) : (
            <ButtonText>FILTRAR POR DEPARTAMENTO</ButtonText>
          )}
        </ButtonFilter>

        <ScrollView showsVerticalScrollIndicator = {false}>
          {orientations.map((item) =>
            item.status === 'open' ? (
              <CardContainer
                onPress={() => this.confirmAndSendMail(item)}
                key={item.id}
              >
               <TextView>
                 <Text>Departamento: {item.departament}</Text>
               </TextView>

              <TextView>
                <Text>Título: {item.title}</Text>
              </TextView>

              <TextView>
                <Text>Resumo: {item.details}</Text>
              </TextView>

              </CardContainer>
            ) : null
          )}
        </ScrollView>
      </Container>
    );
  }
}

export default withZustand(Orientation);
