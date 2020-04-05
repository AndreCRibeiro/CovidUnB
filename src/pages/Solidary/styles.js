import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const Form = styled.View`
  flex-direction: column;
  border-color: #fff;
  padding: 10px 20px;
  margin-top: 5px;
`;

export const SimpleText = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const ButtonVolunteer = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 45px;
  margin-top: 20px;
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
  margin-top: 20px;
`;

export const ProfileList = styled.View`
  width: 100%;
  align-self: center;
  margin: 10px 0;
  flex: 1;
`;

export const Profile = styled.View`
  width: 100%;
  margin: 10px 0;
  background-color: #eee;
  border-radius: 8px;
  font-weight: bold;
`;

export const Text = styled.Text`
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;
