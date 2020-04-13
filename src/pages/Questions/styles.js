import styled from 'styled-components';
import normalize from 'react-native-normalize';


export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;

export const CardList = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  flex-grow: 1;
`;

export const Card = styled.View`
  height: ${normalize(420)};
  width: ${normalize(320)};
  background-color: #fff;
  margin-left: 18px;
  border-width: 3px;
  border-radius: 30px;
  border-color: #333;
  justify-content: center;
  align-items: center;
  elevation: 10;
`;

export const EndView = styled.View`
  align-self: flex-end;
  margin-right: 10px;
`;

export const SimpleText = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Source = styled.Text`
  font-weight: bold;
  color: #0039a6;
  font-size: 14px;
`;

export const Info = styled.Image`
  width: ${normalize(300)};
  height: ${normalize(380)};
  align-self: center;
  border-radius: 30px;
`;
