import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const TopCards = styled.View`
  flex-direction: row;
`;

export const Card = styled(RectButton)`
  height: 120px;
  width: 120px;
  background: #fff;
  margin: 28px;
  border-width: 3px;
  border-radius: 15px;
  border-color: #000;
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

export const QuestionText = styled.Text`
  font-size: 17px;
  color: #000;
  font-weight: bold;
  text-align: center;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
`;

export const ViewButtonYes = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

export const ViewButtonNo = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

export const RadioText = styled.Text`
  justify-content: center;
  align-self: center;
  font-weight: bold;
`;

export const TextView = styled.View`
  justify-content: flex-start;
  height: 38px;
`;

export const LogoutView = styled.View`
  align-self: flex-end;
`;

export const LogoutButton = styled(RectButton)`
  height: 55px;
  width: 55px;
  background: #fff;
  margin-right: 10px;
  border-width: 3px;
  border-radius: 35px;
  border-color: #000;
  justify-content: center;
  align-items: center;
  elevation: 12;
  background: #0039a6;
`;
