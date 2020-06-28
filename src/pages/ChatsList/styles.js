import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';

export const ChatButton = styled(RectButton)`
  height: 35px;
  width: 35px;
  background: #fff;
  border-width: 3px;
  border-radius: 35px;
  border-color: #fff;
  justify-content: center;
  align-items: center;
  elevation: 3;
  background: #0039a6;
  position: absolute;
  left: ${normalize(333)}px;
  top: ${normalize(665)}px;
`;
