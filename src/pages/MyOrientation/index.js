/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-return-assign */
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
import { Picker } from '@react-native-community/picker';
import {
  Container,
  SubContainer,
  CardContainer,
  HeaderTitle,
  HeaderText,
  TextView,
  Text,
  TextTeste,
  Input,
  PickerView,
} from './styles';

import useAuth from '../../store';

import api from '../../services/api';

const withZustand = (Comp) => (props) => {
  const { token, userData } = useAuth();
  return <Comp {...props} token={token} userData={userData} />;
};

class MyOrientation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myOrientations: [],
      lista: '',
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

      this.setState({ myOrientations: response.data });
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

  checkOwner(user, orientationOwner) {
    if ((user = orientationOwner)) {
      return true;
    }
    return false;
  }
  state = { filtro: '' };

  render() {
    const { myOrientations, lista } = this.state;
    const { userData } = this.props;

    return (
      <Container>
        <SubContainer>
          <HeaderTitle>
            <HeaderText>Minhas Orientações</HeaderText>
          </HeaderTitle>
          <PickerView>
            <Picker
              selectedValue={lista}
              onValueChange={(value) => this.setState({ lista: value })}
            >
              <Picker.Item label="Status Orientações" value="" />
              <Picker.Item label="Todas Orientações " value="" />
              <Picker.Item label="Orientações Favoritas" value="favorite" />
              <Picker.Item
                label="Orientações em Atendimento"
                value="answering"
              />
              <Picker.Item label="Orientações Finalizadas" value="closed" />
            </Picker>
          </PickerView>
        </SubContainer>

        <ScrollView>
          {myOrientations.map((item) =>
            this.checkOwner(userData.id, item.professor_id) &&
            item.status === lista ? (
              <CardContainer>
                <TextView>
                  <Text b>Nº da Solicitação: </Text>
                  <Text>{item.id}</Text>
                </TextView>
                <TextView>
                  <Text b>Departamento: </Text>
                  <Text>{item.departament}</Text>
                </TextView>
                <TextView>
                  <Text b>Título: </Text>
                  <Text>{item.title}</Text>
                </TextView>
                <TextView>
                  <Text b>Resumo: </Text>
                  <TextTeste>{item.details}</TextTeste>
                </TextView>
              </CardContainer>
            ) : null
          )}

          {!myOrientations ? (
            <Text>Departamento: Você ainda não possui orientações!</Text>
          ) : null}
        </ScrollView>
      </Container>
    );
  }
}

export default withZustand(MyOrientation);
