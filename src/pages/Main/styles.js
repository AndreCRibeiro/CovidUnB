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
  margin-top: 25px;
  margin-bottom: 80px;
`;

export const Form = styled.View`
  flex-direction: column;
  border-color: #fff;
  flex: 1;
  padding: 10px 20px;
  margin-top: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  height: 50px;
  background: #fff;
  border-radius: 11px;
  padding: 0 15px;
  border: 2px solid #000;
  margin: 10px 0;
  margin-bottom: 15px;
  elevation: 7;
`;

export const Slash = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const SimpleText = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const LineLeft = styled.View`
  background: #000;
  height: 1px;
  width: 135px;
  margin-right: 5px;
`;

export const LineRight = styled.View`
  background: #000;
  height: 1px;
  width: 135px;
  margin-left: 5px;
`;

export const ButtonLogin = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 10px;
  margin-top: 5px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 50px;
  margin-top: 50px;
  margin-bottom: 5px;
`;

export const LoginButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const ButtonSingup = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const SignupButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;
