import React, { Component } from 'react';
import { Rating, AirbnbRating } from 'react-native-elements';
import { TextInput } from 'react-native';
import normalize from 'react-native-normalize';

import PropTypes from 'prop-types';
import Icon, { mdiStarOutline } from 'react-native-vector-icons/MaterialCommunityIcons';
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
    Text,
    Comments,
    ActivitiesTitle,
    CardComment,
    ButtonComment,
    ButtonCommentText,
    Opinion
} from './styles';



class Profile extends Component {

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    _handlePress() {
        console.log(this.state);
        this.textInput.clear()
    }

    render() {
        return (
            <Container>
                <Card>
                    <Info>
                        <Image source={require('../../assets/images/placeholder.png')} />
                        <TextContainer>
                            <Title>Meu Nome fica aqui</Title>
                            <Text>Minha Cidade fica aqui</Text>
                            <ActivitiesTitle>Eu Me Voluntario Para</ActivitiesTitle>
                        </TextContainer>

                    </Info>
                    <Rating
                        imageSize={18}
                        readonly
                        startingValue={3}
                        sytles={{position: 'absolute', right: 20}}
                    />

                </Card>
                <Avaliation>
                    <AirbnbRating
                        count={5}
                        defaultRating={3}
                        size={20}
                        reviewSize={0}
                        style={{ margin: 0 }}
                        onFinishRating={this.ratingCompleted}
                    />
                    <TextInput
                        style={{ height: normalize(80), borderColor: 'gray', borderWidth: 1, marginTop: 15 }}
                        ref={input => { this.textInput = input }}
                        placeholder="O que você achou de trabalhar com essa pessoa?"
                        onChangeText={(text) => this.setState({ text })}
                        multiline={true}
                    ></TextInput>
                    <ButtonComment onPress={() => this._handlePress()}>
                        <ButtonCommentText>Enviar</ButtonCommentText>
                    </ButtonComment>

                </Avaliation>

                <Title>O que outras pessoas acharam:</Title>
                <Opinion>
                    <Comments contentContainerStyle={{ justifyContent: 'center', alignContent: 'center' }}>
                        <CardComment>

                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                </Text>
                        </CardComment>
                        <CardComment>

                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                </Text>
                        </CardComment>

                    </Comments>
                </Opinion>




            </Container>
        )
    }
}

export default Profile;