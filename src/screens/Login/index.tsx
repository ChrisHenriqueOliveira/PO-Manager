import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Image, ActivityIndicator } from 'react-native';
import { Button } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

import { Container, TitleView, TitleImage, TitleText, LoginView, UserInput, PasswordInput, BottomView, ForgotPasswordText ,LoginButton } from './styles';

import LoginSvg from '../../assets/svgs/LoginSvg';
import { useAuth } from '../../hooks/auth';

interface UserLoginProps {
  name: string;
  password: string;
}

interface ErrorsProps {
  nameError: boolean;
  passwordError: boolean;
}


const Login: React.FC = () => {
  const { signIn, loading } = useAuth();

  const [userInfo, setUserInfo] = useState<UserLoginProps>({
    name: '',
    password: '',
  });

  const [errors, setErrors] = useState<ErrorsProps>({
    nameError: false,
    passwordError: false,
  });

  const handleChange = (prop: keyof UserLoginProps) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(userInfo)
    setUserInfo({ ...userInfo, [prop]: event.target.value });
  };

  const handleSubmit = (): void => {
    let nameWithError = false;
    let passwordWithError = false;

    if (
      userInfo.name === null ||
      userInfo.name === '' ||
      parseInt(userInfo.name, 10) < 0
    ) {
      nameWithError = true;
    }
    if (userInfo.password === null || userInfo.password === '') {
      passwordWithError = true;
    }

    if (!nameWithError && !passwordWithError) {
      const user = {
        login: 'Christian',
        password: '123',
      }

      signIn(user);
    } else {
     
    }

    setErrors({ nameError: nameWithError, passwordError: passwordWithError });
  };


  return (
    <>
      <KeyboardAvoidingView
          style={{ flex: 1 }}
          // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          behavior='padding'
          enabled
        >
        <Container> 
          {loading ? (
            <ActivityIndicator size="large" color="#77c16c" />
            ) : (
            <>
              <TitleView>
                <LoginSvg/>
                <TitleText>Acesse sua Conta</TitleText>
              </TitleView>
              <LoginView>
                <UserInput placeholder="User" name="user" leftIcon="user" error={errors.nameError ? "Preencha o usuario corretamente!" : ''} onChange={handleChange('name')}></UserInput>
                <PasswordInput autoCompleteType="off" secureTextEntry={true} placeholder="Password" name="password" leftIcon="lock" error={errors.passwordError ? "Preencha a senha corretamente!" : ''} onChange={handleChange('password')}></PasswordInput>
              </LoginView>
              <BottomView>
                <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
                <LoginButton iconName="send" onPress={handleSubmit}> Login </LoginButton>
              </BottomView>
            </>
            )
           }
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;