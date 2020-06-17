/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import { Container, CardContainer } from './styles';

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
  }

  checkOwner(user, orientationOwner) {
    if ((user = orientationOwner)) {
      return true;
    }
    return false;
  }

  render() {
    const { myOrientations } = this.state;
    const { userData } = this.props;

    return (
      <Container>
        <ScrollView>
          {myOrientations.map((item) =>
            this.checkOwner(userData.id, item.professor_id) ? (
              <CardContainer>
                <Text>Nº da Solicitação: {item.id}</Text>
                <Text>Departamento: {item.departament}</Text>
                <Text>Título: {item.title}</Text>
                <Text>Resumo: {item.details}</Text>
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
