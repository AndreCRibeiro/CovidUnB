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
`;

export const SimpleText = styled.Text`
  font-size: 12px;
  font-weight: bold;
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

export const FirstSelect = styled.View`
  flex-direction: row;
  justify-content: center;
  align-self: center;
`;

export const SecondSelect = styled.View`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
  margin: 13px;
`;
