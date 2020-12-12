import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Dashboard from '../screens/Dashboard';

import { BottomTabParamList, MainParamList } from './navigationTypes';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Dashboard"
        component={MainNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="inbox" color={color} />,
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