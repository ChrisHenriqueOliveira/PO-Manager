import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, LoginButton } from './styles';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {

  return (
    <>
      <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
        <Container> 
          <LoginButton> Login </LoginButton>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default Dashboard;