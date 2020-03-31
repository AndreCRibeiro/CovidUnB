import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  height: 100px;
  width: 100px;
  background-color: #fff;
  margin: 50px;
  border-width: 1px;
  border-radius: 2px;
  border-color: #333;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.TextInput`
  font-size: 12px;
  font-weight: bold;
`;
