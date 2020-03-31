import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Logo = styled.Image`
  width: 160px;
  height: 160px;
  background: #fff;
  align-self: center;
`;

export const Form = styled.View`
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #fff;
  flex: 1;
  padding: 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  height: 45px;
  background: #fff;
  border-radius: 11px;
  padding: 0 15px;
  border: 2px solid #000;
  margin-top: 35px;
  margin-bottom: 15px;
`;

export const ButtonLogin = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 10px;
  margin-top: 23px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 35px;
`;

export const LoginButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const Slash = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  background: #000;
  height: 5px;
`;

export const SimpleText = styled.Text``;

export const ButtonSingup = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 35px;
`;

export const SignupButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
