import styled from 'styled-components';
import normalize from 'react-native-normalize';


export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const CenterView = styled.View`
  align-items: center;
`;

export const LogoUnB = styled.Image`
  width: ${normalize(180)};
  height: ${normalize(180, 'height')};
  background: #fff;
  align-self: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const SimpleText = styled.Text`
  font-weight: bold;
`;

export const LogoLatitude = styled.Image`
  width: ${normalize(300)};
  height: ${normalize(160)};
  background: #fff;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 25px;
`;
