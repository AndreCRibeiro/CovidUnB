import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 10px;
  background: #fff;
`;

export const Form = styled.View`
  flex: 1;
  flex-direction: column;
  border-bottom-width: 1px;
  border-color: #fff;
  padding: 5px;
  margin-bottom: 100px;
`;

export const SimpleText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const ErrorText = styled.Text`
  font-size: 10px;
  padding-bottom: 8px;
  padding-left: 15px;
  font-weight: bold;
  color: #ff0000;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  height: 45px;
  background: #fff;
  border-radius: 11px;
  padding: 0 15px;
  border: 2px solid #000;
  margin-top: 8px;
  margin-bottom: 15px;
  elevation: 6;
`;

export const InputPass = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  height: 45px;
  background: #fff;
  border-radius: 11px;
  padding: 0 15px;
  border: ${(props) =>
    props.passLengthCheck ? '2px solid #000' : '2px solid #ff0000'};
  margin-top: 8px;
  margin-bottom: ${(props) => (props.passLengthCheck ? '15px' : '5px')};
  elevation: 6;
`;

export const InputConfirmedPass = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  height: 45px;
  background: #fff;
  border-radius: 11px;
  padding: 0 15px;
  border: ${(props) => (props.check ? '2px solid #000' : '2px solid #ff0000')};
  margin-top: 8px;
  margin-bottom: 15px;
  elevation: 6;
`;

export const FirstSelect = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  margin-bottom: 15px;
`;

export const SecondSelect = styled.View`
  /*   flex-wrap: wrap;*/

  flex-direction: column;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 10px;
  margin-top: 23px;
  margin-bottom: 35px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 35px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const CenterView = styled.View`
  justify-content: center;
  align-self: center;
  margin-bottom: 10px;
`;

export const SecondCenterView = styled.View`
  justify-content: center;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 8px;
`;

export const ThirdCenterView = styled.View`
  justify-content: center;
  align-self: center;
  margin-top: 5px;
  margin-bottom: 3px;
`;

export const AvatarView = styled.View`
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: center;
`;
export const ButtonChangeAvatar = styled.TouchableOpacity`
  width: 125px;
  height: 125px;
  border-radius: 100px;
  border-width: 4px;
  border-color: #000;
  align-items: center;
  justify-content: center;
  background: #eee;
  elevation: 10;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 90px;
`;
export const AvatarText = styled.Text`
  font-weight: bold;
  font-size: 13px;
  align-self: center;
`;
