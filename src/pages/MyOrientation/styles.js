import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const SubContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const CardContainer = styled.TouchableOpacity`
  padding: 10px 0px 10px 10px;
  margin: 20px 10px 5px 10px;
  background: #fff;
  flex-direction: column;
  border-top-width: 20px;
  border-width: 2px;
  elevation: 10;
  border-color: #0039a6;
`;

export const HeaderTitle = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 15px;
`;

export const HeaderText = styled.Text`
  text-align: center;
  color: #0039a6;
  font-weight: bold;
  font-size: 18px;
`;

export const TextView = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Text = styled.Text`
  font-weight: ${(props) => (props.b ? 'bold' : 'normal')};
  margin-top: 2px;
`;

export const TextTeste = styled.Text`
  width: 80%;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  height: 45px;
  width: 80%;
  background: #fff;
  border-radius: 11px;
  border: 2px solid #000;
  margin: 25px 0 8px 0;
  elevation: 6;
`;

export const PickerView = styled.View`
  height: 45px;
  width: 80%;
  background: #fff;
  border-radius: 11px;
  padding: 0 15px;
  border: 2px solid #000;
  margin: 25px 0 8px 0;
  elevation: 6;
`;
