import styled from 'styled-components/native';
import { Alert } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const TextHeader = styled.Text`
  margin: 25px;
  color: #000;
  font-weight: bold;
  font-size: 24px;
`;

export const CheckBoxField = styled.View`
  padding: 10px;
`;

export const Others = styled.TextInput`
  align-self: center;
  padding: 5px;
  width: 90%;
  height: 60px;
  margin-top: 10px;
  font-size: 16px;
  background-color: #ddd;
  border-radius: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  padding-top: 80px;
  align-self: center;
  align-content: center;
  flex-direction: column;
`;

export const Image = styled.Image`
  margin: 0 50%;
  width: 100px;
  height: 100px;
`;

export const Text = styled.Text`
  margin: 5px 50%;
  color: #ff0000;
  font-weight: bold;
  font-size: 20px;
`;

export const AlertField = styled(Alert)`
  color: #892323;
  background-color: #345670;
`;
