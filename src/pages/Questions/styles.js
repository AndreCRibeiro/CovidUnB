import styled from 'styled-components';
import normalize from 'react-native-normalize';
import {
  titleMargin,
  questionWidth,
  questionHeight,
  infoWidth,
  infoHeight,
} from '../../styles/responsividade';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;

export const CardList = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    marginTop: 40,
  },
}))``;

export const Title = styled.Text`
  font-size: ${normalize(26)}px;
  font-weight: bold;
  margin-top: ${titleMargin};
  padding: 5px;
`;

export const Card = styled.View`
  height: ${questionHeight};
  width: ${questionWidth};
  background-color: #fff;
  margin-left: ${normalize(40)};
  margin-right: ${(props) => (props.last ? `${normalize(40)}` : 0)};
  border-width: 1px;
  border-radius: 25px;
  border-color: #333;
  justify-content: center;
  align-items: center;
`;

export const EndView = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 20px;
  flex: 12;
`;

export const SimpleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const Source = styled.Text`
  font-weight: bold;
  color: #0039a6;
  font-size: 14px;
  margin-top: 3px;
`;

export const Info = styled.Image`
  width: 100%;
  height: 100%;
  align-self: center;
`;
