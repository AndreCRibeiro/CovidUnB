import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 15px 15px 0 15px;
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
  padding: 5px 12px;
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

export const ActivitiesTitle = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  color: #0039a6;
`;

export const ActivitiesText = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;

export const ProfileList = styled.View`
  margin-top: 8px;
  margin-bottom: 150px;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    width: '100%',
  },
})`
  flex: 1;
`;

export const CardContainer = styled.TouchableOpacity`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 5px;
  background: #fff;
  flex-direction: column;
  border-top-width: 30px;
  margin-bottom: 20px;
  border-width: 2px;
  elevation: 10;
  border-color: #0039a6;
  width: 100%;
`;

export const CardContentTop = styled.View`
  flex-direction: row;
  margin-left: 5px;
`;

export const CardContentBottom = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Avatar = styled.Image`
  width: 45px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #000;
  margin-top: -14px;
  background: #fff;
`;

export const Name = styled.Text`
  margin-left: 5px;
  margin-bottom: 15px;
  margin-top: 5px;
  font-size: 17px;
  font-weight: bold;
  flex: 1;
`;

export const Number = styled.Text`
  margin-left: 1px;
  margin-bottom: 15px;
  margin-top: 8px;
  font-weight: bold;
  color: #333;
  font-size: 14.5px;
  flex: 1;
`;

export const RA = styled.Text`
  align-self: flex-end;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: -8px;
  color: #aaa000;
`;

export const StartText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  padding-left: 3px;
  margin-bottom: 3px;
`;

export const StarView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
  margin-top: -35px;
  margin-right: 5px;
`;
