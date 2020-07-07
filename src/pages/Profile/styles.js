import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 10px 0px 0px 0px;
`;

export const Card = styled.View`
  height: ${normalize(165)};
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
  width: ${normalize(100)}px;
  height: ${normalize(100)}px;
  border-radius: 50px;
  margin: 5px 15px 10px 10px;
`;

export const TextContainer = styled.View`
  width: ${normalize(200)}px;
  height: ${normalize(30)}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${normalize(28)}px;
`;

export const TitleCard = styled.Text`
  font-size: ${normalize(15)}px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 1px;
  text-align: center;
`;

export const TextCard = styled.Text`
  font-size: ${normalize(15)}px;
  padding-top: 5px;
  text-align: center;
`;

export const ActivitiesTitle = styled.Text`
  font-size: ${normalize(15)};
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-top: ${normalize(5)};
`;

export const RatingView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const RatingText = styled.Text`
  font-size: ${normalize(15)}px;
  font-weight: bold;
  color: #0039a6;
  padding-left: 7px;
`;

export const Avaliation = styled.View`
  height: ${normalize(180)}px;
  width: ${normalize(320)}px;
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

export const ButtonsAvaliation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${normalize(15)}px;
`;

export const RatingViewComment = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: ${normalize(18)}px;
`;

export const RatingTextComment = styled.Text`
  font-size: ${normalize(20)}px;
  font-weight: bold;
  color: #0039a6;
  padding-left: 7px;
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
  height: ${normalize(35)};
  align-self: flex-end;
`;

export const ButtonCommentText = styled.Text`
  text-transform: uppercase;
  font-size: ${normalize(15)};
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: ${normalize(17)}px;
  font-weight: bold;
  margin-bottom: ${normalize(5)}px;
`;

export const Opinion = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    width: '100%',
  },
})`
  flex: 1;
`;

export const CardComment = styled.View`
  background: #fff;
  width: ${normalize(340)}px;
  margin: 20px;
  padding: ${normalize(10)}px;
  elevation: 5;
  border-radius: 10px;
  border-width: 2px;
`;

export const Text = styled.Text`
  font-size: ${normalize(13)}px;
  padding: 5px;
`;

export const ChatButton = styled(RectButton)`
  height: 42px;
  width: 42px;
  background: #fff;
  border-width: 3px;
  border-radius: 35px;
  border-color: #fff;
  justify-content: center;
  align-items: center;
  elevation: 8;
  background: #0039a6;
  position: absolute;
  left: ${normalize(325)}px;
  top: ${normalize(650)}px;
`;
