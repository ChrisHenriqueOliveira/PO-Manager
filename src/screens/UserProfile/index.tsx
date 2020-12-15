import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Alert, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, SafeAreaView, UserProfileView, HeaderImage, UserInformationBody, UserImage, UserInfo, UserLogoutButton, UserInformationItem, UserInformationIcon, UserInformationText } from './styles';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const backgroundImage = { uri: "https://images.unsplash.com/photo-1601991115814-b8360bc728d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" };
const userImage = { uri: "https://avatars3.githubusercontent.com/u/56655841?s=460&u=acd8f1d1bd91b55e326f4c492478ec9975115902&v=4" };

const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();
  
  return (
    <Container> 
      <SafeAreaView>
        <UserProfileView>
          <HeaderImage source={backgroundImage}></HeaderImage>
          <UserInformationBody>
            <UserImage source={userImage}></UserImage>
            <UserInfo>
              <UserInformationItem>
                <UserInformationIcon name="user" size={20}/>
                <UserInformationText>Christian Oliveira</UserInformationText>
              </UserInformationItem>
              <UserInformationItem>
                <UserInformationIcon name="home" size={20}/>
                <UserInformationText>T.I</UserInformationText>
              </UserInformationItem>
              <UserInformationItem>
                <UserInformationIcon name="briefcase" size={20}/>
                <UserInformationText>TRABALHADOR</UserInformationText>
              </UserInformationItem>
              <UserInformationItem>
                <UserInformationIcon name="mail" size={20}/>
                <UserInformationText>CHRISTIAN@123.COM</UserInformationText>
              </UserInformationItem>
              <UserLogoutButton iconName="log-out" onPress={signOut}>Logout</UserLogoutButton>
            </UserInfo>
          </UserInformationBody>   
        </UserProfileView>
      </SafeAreaView>
      </Container>
  );
};

export default UserProfile;