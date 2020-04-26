import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import normalize from 'react-native-normalize';
import {
  cardHeight,
  cardWidth,
  cardMargin,
  fontHome
} from '../../styles/responsividade'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const Card = styled.View`
  height: ${normalize(180)};
  width: ${normalize(320)};
  background: #fff;
  border-top-width: 2px;
  margin-bottom: 20px;
  border-width: 2px;
  elevation: 10;
  border-color: #0039a6;
  borderRadius: 10;


  align-items: center;


  margin: ${normalize(10)}px;
`;

export const Avaliation = styled.View`
  height: ${normalize(80)};
  width: ${normalize(280)};
  background: blue;
  margin: ${normalize(10)}px;
`;
export const Stars = styled.View`
  height: ${normalize(30)};
  width: ${normalize(280)};

`;
export const Image = styled.Image`
  width: ${normalize(90)};
  height: ${normalize(90)};
  borderRadius: 50;
  align-self: flex-start;
  margin: 5px 30px 10px 10px ;
`;
export const Info = styled.View`
  width: 30px;
  height: 100px;
  flex-direction: row;
  align-self: flex-start;
  margin-top: 15px;
  margin-bottom: ${normalize(8)}px;
`;
export const TextContainer = styled.View`
  width: ${normalize(200)};
  height: ${normalize(30)};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  textAlign: right;
  margin-top:${normalize(20)};

`;

export const Title = styled.Text`
  font-size: ${normalize(15)}px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;

`;

export const Text = styled.Text`
  font-size: ${normalize(13)}px;
`;

export const ActivitiesTitle = styled.Text`
  font-size: ${normalize(16)};
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-top: ${normalize(10)};
`;

export const Comments = styled.ScrollView`
height: ${normalize(180)};
width: ${normalize(320)};
background: #fff;
border-top-width: 2px;
margin-bottom: 20px;
border-width: 2px;
elevation: 10;
border-color: #0039a6;
borderRadius: 10;
margin: ${normalize(10)}px;
`;