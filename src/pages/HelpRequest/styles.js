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

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(123, 123, 123, 0.4);
`;

export const ModalView = styled.View`
  background: #fff;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 36%;
  width: 62%;
  elevation: 5;
`;

export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ModalViewAnimation = styled.View`
  flex: 1;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

export const ModalButtonSair = styled.TouchableOpacity`
  margin-left: 1%;
  margin-top: 2%
  justify-content: center;
  align-items: center;
  background: #ff0000;
  border-radius: 10px;
  height: 18px;
  width: 80px;
`;

export const ModalButtonCancel = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 12px;
  margin-right: 10%;
`;

export const ModalButtonTextSair = styled.Text`
  color: #fff;
`;

export const ModalButtonText = styled.Text``;

export const ModalText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  padding-top: 3px;
  color: #ff0000;
`;

export const DescriptionText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  padding: 5px;
  align-self: center;
`;
