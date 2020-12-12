import styled from 'styled-components/native';
import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled.View`
  flex: 1;
  background-color: #191720;
  padding: 0 32px 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const TitleView = styled.View`
  width: 100%;
  max-width: 350px;
`;

export const TitleImage = styled.Image`
  height: 128px;
  width: 128px;
`;

export const TitleText = styled.Text`
  color: #eee;
  font-family: 'Montserrat-Bold';
  font-size: 32px;
  margin-top: 40px;
`;

export const LoginView = styled.View`
  width: 100%;
  max-width: 350px;
`;

export const UserInput = styled(Input)`
  width: 100%;
`;

export const PasswordInput = styled(Input)`
  width: 100%;
`;


export const BottomView = styled.View`
  width: 100%;
  max-width: 350px;
`;

export const ForgotPasswordText = styled.Text`
  color: #eee;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  text-align: center;
  margin-bottom: 8px;
  cursor: pointer;
  
`;

export const LoginButton = styled(Button)`
  width: 100%;
  max-width: 350px;
`;
