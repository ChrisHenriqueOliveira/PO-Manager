import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: #191720;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const SafeAreaView = styled.ScrollView`
  width: 100%;
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
`;

export const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const HeaderTitle = styled.Text`
  color: #eee;
  font-family: 'Montserrat-Bold';
  font-size: 20px;
`;

export const HeaderImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const WelcomeView = styled.View`
  display: flex;
  flex-direction: column;
  height: 60px;
  margin-top: 24px;
  `;

export const WelcomeTitle = styled.Text`
  color: #eee;
  font-family: 'Montserrat-Medium';
  font-weight: bold;
  font-size: 32px;
`;

export const WelcomeSubtitle = styled.Text`
  color: #eee;
  font-family: 'Montserrat-Medium';
  font-weight: bold;
  font-size: 32px;
  color: #77c16c;
`;


export const LoginButton = styled(Button)`
  width: 100%;
  max-width: 450px;
`;