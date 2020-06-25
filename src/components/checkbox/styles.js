import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },

  textOptionStyle: {
    fontWeight: 'bold',
    fontSize: 15.5,
    color: '#000',
    marginLeft: 1,
  },
});

export default styles;

export const Text = styled.Text`
  color: #666666;
  font-weight: bold;
  font-size: 13px;
  margin-left: 5px;
`;
