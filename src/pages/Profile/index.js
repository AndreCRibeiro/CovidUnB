/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {
  BackHandler,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import normalize from 'react-native-normalize';
import { nanoid } from 'nanoid/non-secure';
import firestore from '@react-native-firebase/firestore';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles';
import {
  Container,
  Card,
  Avaliation,
  Image,
  Info,
  TextContainer,
  Title,
  TitleCard,
  Text,
  TextCard,
  Comments,
  ActivitiesTitle,
  CardComment,
  ButtonComment,
  ButtonCommentText,
  Opinion,
  ButtonsAvaliation,
  Input,
  ChatButtonView,
  ChatButton,
  RatingView,
  RatingText,
  RatingViewComment,
  RatingTextComment,
} from './styles';

import useAuth from '../../store';

import api from '../../services/api';

const withZustand = (Comp) => (props) => {
  const { token, userData } = useAuth();
  return <Comp {...props} token={token} userData={userData} />;
};

class Profile extends Component {
  state = {
    rating: '',
    userComment: '',
    loading: false,
  };

  async componentDidMount() {
    const { userData, token } = this.props;

    const body = { volunteer_id: userData.volunteer_id };
    const response = await api.get(
      `comments/${this.props.route.params.perfil.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    this.setState({ data: response.data });

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    const { navigation } = this.props;
    navigation.navigate('Solidary');
    return true;
  };

  ratingCompleted = (rating) => {
    // console.tron.log(`Rating is: ${rating}`);
    this.setState({ rating });
  };

  handleAvaliation = async () => {
    const { userComment, rating } = this.state;
    const { userData, token } = this.props;

    if (userComment !== '') {
      const body = {
        volunteer_id: userData.volunteer_id,
        comment: userComment,
      };
      const response = await api.post(`comments`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    if (rating !== '') {
      const body = { email: userData.email, volunteer_rate: rating };
      const response = await api.put('rates', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    this.setState({ data: '' });

    this.setState({ userComment: '', data: response.data });
  };

  handleChat = (profile) => {
    const { token, userData } = this.props;
    console.log(userData.id, profile.id);

    this.setState({ loading: true });

    const chatId = nanoid();
    firestore()
      .collection('Chats')
      .doc(chatId)
      .set({ messages: [] })
      .then(() => {
        api
          .post(
            '/chats',
            {
              user1_id: userData.id,
              user2_id: profile.id,
              chat_id: chatId,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            const { navigation } = this.props;
            navigation.navigate('Chat', { chatId });
          })
          .catch((err) => {
            Alert.alert('Falha ao criar chat backend');
          });
      })
      .catch((err) => {
        Alert.alert('Falha ao criar chat Firebase');
      });
  };

  render() {
    const { rating, data, userComment, loading } = this.state;
    const { params } = this.props.route;

    const number = params.perfil.rate;

    const rate = parseFloat(number.toFixed(2));

    return (
      <Container>
        <Card>
          <Info>
            <Image source={require('../../assets/images/placeholder.png')} />
            <TextContainer>
              <TitleCard>{params.perfil.name}</TitleCard>
              <TextCard>{params.perfil.administrative_region}</TextCard>
              <ActivitiesTitle>{params.perfil.activities}</ActivitiesTitle>
            </TextContainer>
          </Info>
          <RatingView>
            <Rating
              type="custom"
              imageSize={16}
              readonly
              startingValue={rate}
              ratingColor="#0039A6"
              style={{ flexDirection: 'row' }}
              fractions={1}
            />
            <RatingText>{`${rate} (${params.perfil.count_avaliation})`}</RatingText>
          </RatingView>
        </Card>
        <Avaliation>
          <Input
            autoCorrect={false}
            autoCapitalize="sentences"
            value={userComment}
            placeholder="O que você achou de trabalhar com essa pessoa?"
            onChangeText={(text) => this.setState({ userComment: text })}
            multiline
          />
          <ButtonsAvaliation>
            <RatingViewComment>
              <Rating
                type="custom"
                imageSize={28}
                startingValue={0}
                ratingColor="#0039A6"
                style={{ flexDirection: 'row' }}
                onFinishRating={this.ratingCompleted}
                showRating={false}
                fractions={1}
              />
              <RatingTextComment>{rating}</RatingTextComment>
            </RatingViewComment>
            <ButtonComment onPress={() => this.handleAvaliation()}>
              <ButtonCommentText>Enviar</ButtonCommentText>
            </ButtonComment>
          </ButtonsAvaliation>
        </Avaliation>

        <Title>AVALIAÇÕES ANTERIORES:</Title>
        <ChatButton />
        <Opinion>
          {data
            ? data.map((comments) => (
              <CardComment>
                <Text>{comments.comment}</Text>
              </CardComment>
            ))
            : null}
        </Opinion>
        <ChatButton
          onPress={() => {
            this.handleChat(params.perfil);
          }}
        >
          {loading ? (
            <ActivityIndicator color={colors.white} />
          ) : (
              <Icon name="chat" size={29} color={colors.white} />
            )}
        </ChatButton>
      </Container>
    );
  }
}

export default withZustand(Profile);
