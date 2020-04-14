import styled from 'styled-components/native';
import { Alert } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: ${(props) => (props.showAlert ? '0px' : '15px')};
`;

export const TextHeader = styled.Text`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  margin-top: 30px;
`;

export const CheckBoxField = styled.View`
  padding: 10px;
`;

export const Others = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  align-self: center;
  padding: 5px;
  width: 90%;
  height: 60px;
  margin-top: 10px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 10px;
  border: 2px solid #000;
`;

export const ButtonArea = styled.TouchableOpacity`
  padding: 10px;
  margin-top: 60px;
  align-self: center;
  align-content: center;
  flex-direction: column;
`;

export const Image = styled.Image`
  margin: 0 50%;
  width: 110px;
  height: 110px;
`;

export const TextArea = styled.Text`
  margin: 5px 51%;
  color: #ff0000;
  font-weight: bold;
  font-size: 20px;
`;

export const AlertField = styled(Alert)``;
