import styled from 'styled-components/native';
import Button from '../../components/Button';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #191720;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SafeAreaView = styled.ScrollView`
  /* display: flex;
  justify-content: center; */
  width: 100%;
`;

export const ScrollView = styled.ScrollView`
  display: flex;
`;

export const UserProfileView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  min-height: 250px;
`;

export const UserInformationHeader = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191720;
  margin-top: -20px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

export const UserProfileImage = styled.Image`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-top: -65px;
  border: 10px solid #191720;
`;

export const UserInformationBody = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  max-width: 350px;
`;

export const UserInformationText = styled.Text`
  font-family: 'Montserrat-Medium';
  color: #eee;
  font-size: 12px;
`;

export const UserInformationItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: #36353E;
`;

export const UserInformationIcon = styled(Feather)`
  color: #eee;
  margin-right: 16px;
`;

export const UserLogoutButton = styled(Button)`
  background-color: #c53030;
  margin-top: 72px;
`;
