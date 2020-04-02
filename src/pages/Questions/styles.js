import styled from 'styled-components';

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
  height: 400px;
  width: 330px;
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
`;

export const SimpleText = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Info = styled.Image``;
