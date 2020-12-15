import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Dashboard from '../screens/Dashboard';
import UserProfile from '../screens/UserProfile';

import { BottomTabParamList, MainParamList, UserProfileParamList } from './navigationTypes';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        inactiveBackgroundColor: "#36353E", 
        activeBackgroundColor: "#36353E", 
        activeTintColor: "#77c16c",
        labelStyle: {
          fontSize: 10,
          fontFamily: 'Montserrat-Medium',
        },
        style: styles.container
      }}>
      <BottomTab.Screen
        name="Dashboard"
        component={MainNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="inbox" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Feather size={30} style={{ marginBottom: -3 }} {...props} />;
}

const MainStack = createStackNavigator<MainParamList>();

function MainNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={
          { 
            headerShown: false,
          }
        }
      />
    </MainStack.Navigator>
  );
}

const UserProfileStack = createStackNavigator<UserProfileParamList>();

function UserProfileNavigator() {
  return (
    <UserProfileStack.Navigator>
      <UserProfileStack.Screen
        name="UserProfile"
        component={UserProfile}
        options={
          { 
            headerShown: false,
          }
        }
      />
    </UserProfileStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
      borderTopWidth: 0
  }
});