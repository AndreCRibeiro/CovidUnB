import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background: #fff;
`;

export const Form = styled.View`
  flex-direction: column;
  border-color: #000;
  padding: 10px 20px;
`;

export const ButtonVolunteer = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 20px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 45px;
  margin-top: 15px;
`;

export const VolunteerButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const PickerView = styled.View`
  margin-top: 5px;
`;

export const SimpleText = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 5px;
  text-align: center;
`;

export const ProfileList = styled.View`
  margin-top: 8px;
  margin-bottom: 150px;
`;

export const Profile = styled.View`
  width: 100%;
  margin: 30px 0;
  background-color: #eee;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Text = styled.Text`
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const CardView = styled.View`
  flex-direction: row;
`;

export const ViewTeste = styled.View`
  background: #123456;
  flex: 7;
`;

export const IconView = styled.View`
  background: #321321;
  border-radius: 5px;
  flex: 1;
`;
export const TopView = styled.View``;
export const BottomView = styled.View``;
export const LeftText = styled.View``;
export const RightText = styled.View``;
