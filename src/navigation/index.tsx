import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import LoginScreen from '../screens/Login';
import NotFoundScreen from '../screens/NotFound';

import { RootStackParamList } from './navigationTypes';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { useAuth } from '../hooks/auth';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootStack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { user } = useAuth();

  return (
    <RootStack.Navigator screenOptions=
    {
      { 
        headerShown: false,
        gestureEnabled: true, 
        gestureDirection: "horizontal",
        cardStyle: { backgroundColor: '#312e38' },
      }
    }>
      {user !== undefined ? (
        <RootStack.Screen name="Root" component={BottomTabNavigator} />
      ) : (
        <RootStack.Screen name="Login" component={LoginScreen} />
      )}
    </RootStack.Navigator>
  );
}
