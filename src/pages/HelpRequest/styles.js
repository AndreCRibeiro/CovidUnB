import styled from 'styled-components/native';
import { Alert } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
`;

export const TextHeader = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
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

export const ButtonArea = styled.TouchableOpacity`
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

export const TextArea = styled.Text`
  margin: 5px 50%;
  color: #ff0000;
  font-weight: bold;
  font-size: 20px;
`;

export const AlertField = styled(Alert)``;
