import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import { paddingMain } from '../../styles/responsividade';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Logo = styled.Image`
  width: ${normalize(120)};
  height: ${normalize(120)};
  background: #fff;
  align-self: center;
  margin-top: ${normalize(30, 'height')}px;
  margin-bottom: ${normalize(30, 'height')}px;
`;

export const Form = styled.View`
  flex-direction: column;
  border-color: #fff;
  flex: 1;
  padding: 10px 20px;
  margin-top: ${normalize(10, 'height')}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  height: ${normalize(40)};
  background: #fff;
  border-radius: 11px;
  padding: 0 15px;
  border: 2px solid #000;
  margin: 10px 0;
  margin-bottom: 15px;
  elevation: 7;
`;

export const Teste = styled.View`
  position: relative;
  align-self: stretch;
  justify-content: center;
`;

export const HideNShowPassword = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  justify-content: center;
  height: 40px;
  width: 35px;
  padding: 2px;
  elevation: 10;
`;

export const Eye = styled.Image`
  width: ${normalize(20)};
`;

export const OptionsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${normalize(10, 'height')}px;
`;

export const RememberButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
`;

export const RememberText = styled.Text`
  margin-left: 5px;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const PasswordText = styled.Text`
  font-style: italic;
  font-weight: bold;
  color: #0039a6;
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
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 45px;
  margin-top: ${paddingMain}px;
  margin-bottom: ${normalize(5)}px;
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
  height: 45px;
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

export const ModalContainerAnimationTop = styled.View`
  flex: 1;
  background: #fff;
`;

export const ModalContainerAnimation = styled.View`
  flex: 1;
  background: #fff;
`;
