import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.TouchableOpacity`
  padding: 10px 0px 10px 10px;
  margin: 20px 10px 5px 10px;
  background: #fff;
  flex-direction: column;
  border-top-width: 30px;
  border-width: 2px;
  elevation: 10;
  border-color: #0039a6;
`;

export const TextView = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Text = styled.Text`
  font-weight: ${(props) => (props.b ? 'bold' : 'normal')};
`;

export const TextTeste = styled.Text`
  width: 80%;
`;
