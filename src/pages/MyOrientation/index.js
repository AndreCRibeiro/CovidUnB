/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ScrollView, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  CardContainer,
  HeaderTitle,
  HeaderText,
  TextView,
  Text,
  TextTeste,
  Favorite,
  CloseView,
  CloseButton,
  TextClose,
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
      statusOrientation: '',
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

  handleFavoriteAnswering = async (id) => {
    const { token } = this.props;

    const status = 'favorite';

    const body = {
      status,
    };

    try {
      const response = await api.put(`/orientations/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(err);
    }

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
  };

  handleFavorite = async (id) => {
    const { token } = this.props;

    const status = 'answering';

    const body = {
      status,
    };

    try {
      const response = await api.put(`/orientations/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(err);
    }

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
  };

  handleClose = async (id) => {
    const { token } = this.props;

    const status = 'closed';

    const body = {
      status,
    };

    try {
      const response = await api.put(`/orientations/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { myOrientations } = this.state;
    const { userData } = this.props;

    return (
      <Container>
        <ScrollView>
          <HeaderTitle>
            <HeaderText>Minhas Orientações</HeaderText>
          </HeaderTitle>

          {myOrientations.map((item) =>
            this.checkOwner(userData.id, item.professor_id) ? (
              <CardContainer>
                <TextView>
                  <Text b>Nº da Solicitação: </Text>
                  <Text>{item.id}</Text>
                  {item.status === 'answering' ? (
                    <Favorite
                      onPress={() => this.handleFavoriteAnswering(item.id)}
                    >
                      {item.status === 'favorite' ? (
                        <Icon name="star" size={28} color="#0039A6" />
                      ) : (
                          <Icon name="star-outline" size={28} color="#0039A6" />
                        )}
                    </Favorite>
                  ) : (
                      <Favorite onPress={() => this.handleFavorite(item.id)}>
                        {item.status === 'answering' ? (
                          <Icon name="star-outline" size={28} color="#0039A6" />
                        ) : (
                            <Icon name="star" size={28} color="#0039A6" />
                          )}
                      </Favorite>
                    )}
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
                <CloseView>
                  <CloseButton
                    onPress={() => {
                      this.setState({ statusOrientation: 'closed' }),
                        this.handleClose(item.id);
                    }}
                  >
                    <TextClose>Encerrar orientação</TextClose>
                  </CloseButton>
                </CloseView>
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
