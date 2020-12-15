import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Alert, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, ScrollView, SafeAreaView, HeaderView, HeaderTitle, HeaderImage, WelcomeView, WelcomeTitle, WelcomeSubtitle, LoginButton } from './styles';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

const userImage = { uri: "https://avatars3.githubusercontent.com/u/56655841?s=460&u=acd8f1d1bd91b55e326f4c492478ec9975115902&v=4" };

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  
  return (
    <Container> 
      <SafeAreaView>
        <HeaderView>
          <HeaderTitle>Dashboard</HeaderTitle>
          <HeaderImage source={userImage}>
          </HeaderImage>
        </HeaderView>
        <WelcomeView>
          <WelcomeTitle>Hello, </WelcomeTitle>
          <WelcomeSubtitle>Christian Oliveira</WelcomeSubtitle>
        </WelcomeView>
    </SafeAreaView>
      </Container>
  );
};

export default Dashboard;