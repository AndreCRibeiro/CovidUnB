import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const Card = styled.View`
  height: ${normalize(150)};
  width: ${normalize(320)};
  background: #fff;
  border-top-width: 2px;
  border-width: 2px;
  elevation: 10;
  border-color: #0039a6;
  borderRadius: 10;
  align-items: center;
  margin-top: ${normalize(10)}px;
`;
export const CardComment = styled.View`
  width: ${normalize(300)};
  background: #fff;
  margin-bottom: 20px;
  padding: ${normalize(10)}px;
  elevation: 10;
  borderRadius: 10;
  align-items: center;
`;

export const Avaliation = styled.View`
  height: ${normalize(200)};
  width: ${normalize(280)};
  margin: ${normalize(5)}px;
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
  margin-top:${normalize(15)}px;

`;

export const ButtonComment = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 10px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  width: ${normalize(100)};
  padding: 0 ${normalize(6)}px;
  height: ${normalize(40)};
  align-self: flex-end;
  margin-top: ${normalize(10)}px;
  margin-bottom: ${normalize(5)}px;
`;

export const ButtonCommentText = styled.Text`
  text-transform: uppercase;
  font-size: ${normalize(15)};
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const Opinion = styled.View`
height: ${normalize(150)};
margin-top: ${normalize(8)}px;
background: #fff;
align-items: center;
elevation: 10;

`;

