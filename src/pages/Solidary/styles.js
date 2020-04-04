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
  margin-top: 8px;
  margin-bottom: 40px;
`;

export const Form = styled.View`
  flex-direction: column;
  border-color: #fff;
  flex: 1;
  padding: 10px 20px;
  margin-top: 5px;
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

export const CenterView = styled.View``;

export const SimpleText = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const PickerView = styled.View`
  margin-top: 20px;
`;

export const Volunteers = styled.FlatList``;
export const Info = styled.View``;
export const VolunteerName = styled.Text``;
export const VolunteerTel = styled.Text``;
