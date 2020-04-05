import styled from 'styled-components';

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
  font-size: 34px;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px;
`;

export const Card = styled.View`
  height: 450px;
  width: 340px;
  background-color: #fff;
  margin-left: 18px;
  border-width: 2px;
  border-radius: 8px;
  border-color: #333;
  justify-content: center;
  align-items: center;
`;

export const EndView = styled.View`
  align-self: flex-start;
  margin-right: 10px;
  margin: 20px 20px;
`;

export const SimpleText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Source = styled.Text`
  font-weight: bold;
  color: #0039a6;
  font-size: 14px;
  margin-top: 10px;
`;

export const Info = styled.Image`
  width: 330px;
  height: 415px;
  align-self: center;
  border-radius: 30px;
`;
