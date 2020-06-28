import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import normalize from 'react-native-normalize';
import {
  cardHeight,
  cardWidth,
  cardMargin,
  fontHome,
} from '../../styles/responsividade';

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
  height: ${cardHeight};
  width: ${cardWidth};
  background: #fff;
  margin: ${cardMargin}px;
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
  text-align: center;
  margin-bottom: ${(props) => (props.m ? '10px' : 0)};
`;

export const SelectionView = styled.View`
  margin-top: 5%;
`;

export const QuestionText = styled.Text`
  font-size: ${fontHome};
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
  font-size: ${fontHome};
`;

export const TextView = styled.View`
  justify-content: flex-start;
  height: 23px;
`;

export const LogoutView = styled.View`
  align-self: flex-end;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2%;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const LogoutButton = styled(RectButton)`
  height: 50px;
  width: 50px;
  background: #fff;
  margin-right: 10px;
  border-width: 3px;
  border-radius: 35px;
  border-color: #fff;
  justify-content: center;
  align-items: center;
  elevation: 12;
  background: #0039a6;
`;

export const VolunteerButton = styled.TouchableOpacity`
  margin-right: 17%;
  padding-top: 1%;
`;

export const VolunteerButtonText = styled.Text`
  color: #0039a6;
  font-weight: bold;
  font-style: italic;
  font-size: 16.5px;
  text-decoration-line: underline;
`;

export const ModalContainerAnimation = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(123, 123, 123, 0.4);
`;

export const ModalView = styled.View`
  background: #fff;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 37.7%;
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
  justify-content: center;
  align-items: center;
  background: #ff0000;
  border-radius: 10px;
  height: 23px;
  width: 70px;
`;

export const ModalButtonSairVolunteer = styled.TouchableOpacity`
  margin-left: 1%;
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 10px;
  height: 18px;
  width: 50px;
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
  padding: 5px;
`;

export const ModalTextVolunteer = styled.Text`
  font-weight: bold;
  font-size: 14px;
  padding: 11px;
  align-self: flex-end;
`;
