import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background: #fff;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-direction: column;
  border-color: #fff;
  flex: 1;
  padding: 10px 20px;
  margin-top: 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  height: 50px;
  background: #fff;
  border-radius: 11px;
  padding: 0 15px;
  border: 2px solid #000;
  margin: 0px 0;
  margin-bottom: 15px;
  elevation: 7;
`;

export const PickerView = styled.View`
  margin-bottom: 15px;
`;

export const Slash = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const CenterView = styled.View``;

export const SimpleText = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`;

export const LineLeft = styled.View`
  background: #000;
  height: 1px;
  width: 135px;
  margin-right: 5px;
`;

export const LineRight = styled.View`
  background: #000;
  height: 1px;
  width: 135px;
  margin-left: 5px;
`;

export const ButtonVolunteer = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #0039a6;
  border-radius: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  height: 45px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const VolunteerButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
