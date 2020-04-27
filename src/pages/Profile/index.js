import React, { Component } from 'react';
import { Rating, AirbnbRating } from 'react-native-elements';
import { TextInput, BackHandler } from 'react-native';
import normalize from 'react-native-normalize';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles';
import {
  Container,
  Card,
  Avaliation,
  Rate,
  Stars,
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
} from './styles';

class Profile extends Component {
  state = {};

  componentDidMount() {
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

  ratingCompleted(rating) {
    // console.tron.log(`Rating is: ${rating}`);
  }

  handlePress() {
    console.log(this.state);
    this.textInput.clear();
  }

  render() {
    const { params } = this.props.route;
    console.tron.log(params.perfil);

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
          <Rating imageSize={16} readonly startingValue={3} />
        </Card>
        <Avaliation>
          <Input
            ref={(input) => {
              this.textInput = input;
            }}
            placeholder="O que você achou de trabalhar com essa pessoa?"
            onChangeText={(text) => this.setState({ text })}
            multiline
          />
          <ButtonsAvaliation>
            <AirbnbRating
              count={5}
              defaultRating={0}
              size={20}
              reviewSize={0}
              onFinishRating={this.ratingCompleted}
            />
            <ButtonComment onPress={() => this.handlePress()}>
              <ButtonCommentText>Enviar</ButtonCommentText>
            </ButtonComment>
          </ButtonsAvaliation>
        </Avaliation>

        <Title>Avaliações anteriores:</Title>
        <Opinion>
          <Comments
            contentContainerStyle={{
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <CardComment>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </CardComment>
            <CardComment>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </CardComment>
          </Comments>
        </Opinion>
        <ChatButtonView>
          <ChatButton onPress={() => { }}>
            <Icon name="chat" size={33} color={colors.white} />
          </ChatButton>
        </ChatButtonView>
      </Container>
    );
  }
}

export default Profile;
