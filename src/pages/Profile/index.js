import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Icon, { mdiStarOutline } from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Container,
    Card,
    Avaliation,
    Stars,
    Image,
    Info,
    TextContainer,
    Title,
    Text,
    Comments,
    ActivitiesTitle,
} from './styles';

class Profile extends Component {

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

                    <Stars>

                    </Stars>
                </Card>


                <Comments>
                    <Card>
                        <Title>Teste
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</Text>
                        </Title>
                    </Card>
                    <Card>
                        <Title>Teste
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</Text>
                        </Title>
                    </Card>
                    <Card>
                        <Title>Teste
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</Text>
                        </Title>
                    </Card>
                    <Card>
                        <Title>Teste
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</Text>
                        </Title>
                    </Card>
                </Comments>

                <Avaliation>

                </Avaliation>


            </Container>
        )
    }
}

export default Profile;