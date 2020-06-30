/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  BackHandler,
  ActivityIndicator,
  Modal,
} from 'react-native';

import {
  Container,
  Input,
  HeaderTitle,
  HeaderText,
  Button,
  ButtonText,
  ModalContainer,
  ModalButtonSair,
  ModalButtonTextSair,
  ModalText,
  ModalView,
  RowView,
} from './styles';

import useAuth from '../../store';

import api from '../../services/api';

const withZustand = (Comp) => (props) => {
  const { token, userData } = useAuth();
  return <Comp {...props} token={token} userData={userData} />;
};

class NewOrientation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departament: '',
      title: '',
      details: '',
      loading: false,
      modalHome: false,
      modalError: false,
    };
  }

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

  handleHome = async () => {
    const { navigation } = this.props;

    this.setState({ modalHome: false });

    navigation.navigate('Home');
  };

  createOrientation = async () => {
    const { departament, title, details } = this.state;
    const { token } = this.props;

    try {
      const response = await api.post(
        '/orientations',
        { departament, details, title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.setState({ modalHome: true });
    } catch (err) {
      this.setState({ modalError: true });
      console.log(err);
    }
  };

  render() {
    const { loading, modalHome, modalError } = this.state;

    return (
      <Container>
        <HeaderTitle>
          <HeaderText>Minhas Orientações</HeaderText>
        </HeaderTitle>

        <Modal
          animationType="fade"
          transparent
          visible={modalHome}
          onRequestClose={() => this.setState({ modalHome: false })}
        >
          <ModalContainer>
            <ModalView>
              <ModalText>Solicitação enviada!</ModalText>
              <ModalButtonSair
                onPress={() => {
                  this.handleHome();
                }}
              >
                <ModalButtonTextSair>OK</ModalButtonTextSair>
              </ModalButtonSair>
            </ModalView>
          </ModalContainer>
        </Modal>

        <Modal
          animationType="fade"
          transparent
          visible={modalError}
          onRequestClose={() => this.setState({ modalError: false })}
        >
          <ModalContainer>
            <ModalView error>
              <ModalText>Erro na solicitação, tente novamente.</ModalText>
              <ModalButtonSair
                onPress={() => {
                  this.setState({ modalError: false });
                }}
              >
                <ModalButtonTextSair>OK</ModalButtonTextSair>
              </ModalButtonSair>
            </ModalView>
          </ModalContainer>
        </Modal>

        <Input
          autoCorrect={false}
          autoCapitalize="characters"
          placeholder="Departamento - Ex: ENE, MAT"
          onChangeText={(text) =>
            this.setState({ departament: text.toUpperCase() })
          }
        />
        <Input
          autoCorrect={false}
          autoCapitalize="words"
          placeholder="Título"
          onChangeText={(text) => this.setState({ title: text })}
        />
        <Input
          autoCorrect={false}
          autoCapitalize="sentences"
          placeholder="Resumo"
          onChangeText={(text) => this.setState({ details: text })}
          multiline
          resumo
        />

        <Button loading={loading} onPress={this.createOrientation}>
          {loading ? (
            <ActivityIndicator color={colors.white} />
          ) : (
              <ButtonText>ENVIAR SOLICITAÇÃO</ButtonText>
            )}
        </Button>
      </Container>
    );
  }
}
export default withZustand(NewOrientation);
