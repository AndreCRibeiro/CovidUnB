import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-bottom: 20px;
`;

export const TopCards = styled.View`
  flex-direction: row;
`;

export const Card = styled(RectButton)`
  height: 120px;
  width: 120px;
  background: #fff;
  margin: 30px;
  border-width: 1px;
  border-radius: 2px;
  border-color: #333;
  justify-content: center;
  align-items: center;
  elevation: 10;
`;

export const Image = styled.Image`
  width: 65px;
  height: 65px;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 8px;
`;

export const MediumImage = styled.Image`
  width: 65px;
  height: 65px;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 8px;
`;

export const LargeImage = styled.Image`
  width: 60px;
  height: 60px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const MiddleCards = styled.View`
  flex-direction: row;
`;

export const BottomCards = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const SelectionView = styled.View``;

export const CheckboxView = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const QuestionText = styled.Text`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;
