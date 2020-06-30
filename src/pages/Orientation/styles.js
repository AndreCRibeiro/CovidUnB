import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.TouchableOpacity`

  padding: 10px 0px 10px 10px;
  margin: 12px 10px 15px 10px;
  background: #fff;
  flex-direction: column;
  border-top-width: 20px;
  border-width: 2px;
  elevation: 10;
  border-color: #0039a6;
  width: 375px;

`;

export const TextView = styled.View`
  flex-direction: row;
  flex: 1;
  margin: 2px 0px 2px 0px;
`;

export const Text = styled.Text`
  font-weight: ${(props) => (props.b ? 'bold' : 'normal')};
  margin-top: 2px;
`;

export const ButtonFilter = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 25px;
  padding: 3px 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 42px;
  width: 80%;
  margin: 5px 0px 5px 0px;
`;

export const ButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  height: 45px;
  width: 80%;
  background: #fff;
  border-radius: 11px;
  padding: 0 15px;
  border: 2px solid #000;
  margin: 15px 0 8px 0;
  elevation: 6;
`;

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
  height: 200px;
  width: 220px;
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
  margin-top: 8%;
  margin-bottom: 8%;
  justify-content: center;
  align-items: center;
  background: #ff0000;
  border-radius: 10px;
  height: 30px;
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
