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
  font-size: 25px;
  font-weight: bold;
  margin-top: 5px;
  padding: 5px;
`;

export const Card = styled.View`
  height: 445px;
  width: 340px;
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
  border-width: 2px;
  border-radius: 8px;
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
  width: 330px;
  height: 415px;
  align-self: center;
  border-radius: 30px;
`;
