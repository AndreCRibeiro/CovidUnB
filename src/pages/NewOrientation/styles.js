import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const HeaderTitle = styled.View`
  align-items: center;
  justify-content: center;
  margin: 20px 0 30px 0;
`;

export const HeaderText = styled.Text`
  text-align: center;
  color: #0039a6;
  font-weight: bold;
  font-size: 18px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  height: ${(props) => (props.resumo ? '75px' : '45px')};
  width: 85%;
  background: #fff;
  border-radius: 11px;
  padding: 0 15px;
  border: 2px solid #000;
  margin: 15px 0 8px 0;
  elevation: 6;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 25px;
  padding: 3px 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 42px;
  width: 85%;
  margin: 20px 0px 5px 0px;
`;

export const ButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
