import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 15px;
`;

export const Card = styled.View`
  height: ${normalize(150)};
  width: ${normalize(320)};
  background: #fff;
  border-top-width: 2px;
  border-width: 2px;
  elevation: 10;
  border-color: #0039a6;
  border-radius: 10;
  align-items: center;
  margin-top: ${normalize(10)}px;
`;

export const Info = styled.View`
  width: 30px;
  height: 100px;
  flex-direction: row;
  align-self: flex-start;
  margin-top: 15px;
  margin-bottom: ${normalize(8)}px;
`;

export const Image = styled.Image`
  width: ${normalize(90)};
  height: ${normalize(90)};
  border-radius: 50px;
  align-self: flex-start;
  margin: 5px 15px 10px 10px;
`;

export const TextContainer = styled.View`
  width: ${normalize(200)};
  height: ${normalize(30)};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: ${normalize(20)};
`;

export const Title = styled.Text`
  font-size: ${normalize(15)}px;
  font-weight: bold;
`;

export const TitleCard = styled.Text`
  font-size: ${normalize(13)}px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ActivitiesTitle = styled.Text`
  font-size: ${normalize(16)};
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-top: ${normalize(10)};
`;

export const Avaliation = styled.View`
  height: ${normalize(200)};
  width: 90%;
`;

export const ButtonsAvaliation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  padding: 15px;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  margin-top: 25px;
`;

export const Stars = styled.View`
  height: ${normalize(30)};
  width: ${normalize(280)};
`;

export const Comments = styled.ScrollView`
  margin-top: ${normalize(5)}px;
`;

export const ButtonComment = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 10px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  width: ${normalize(100)};
  padding: 0 ${normalize(6)}px;
  height: ${normalize(35)};
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
  width: 90%;
  margin-top: ${normalize(8)}px;
  background: #fff;
  align-items: center;
  flex: 1;
`;

export const CardComment = styled.View`
  width: 95%;
  background: #fff;
  margin-bottom: 20px;
  padding: ${normalize(10)}px;
  elevation: 5;
  border-radius: 10;
  border-width: 2px;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${normalize(13)}px;
  padding: 5px;
`;

export const TextCard = styled.Text`
  font-size: ${normalize(13)}px;
  padding-top: 5px;
`;

export const ChatButtonView = styled.View`
  align-self: flex-end;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-top: 3%;
  flex: 0.15;
`;

export const ChatButton = styled(RectButton)`
  height: 55px;
  width: 55px;
  background: #fff;
  border-width: 3px;
  border-radius: 35px;
  border-color: #fff;
  justify-content: center;
  align-items: center;
  elevation: 12;
  background: #0039a6;
`;
