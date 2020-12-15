import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Alert, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, ScrollView, SafeAreaView, HeaderView, HeaderTitle, HeaderImage, WelcomeView, WelcomeTitle, 
  WelcomeSubtitle, BodyView, TitleView, TitleText, SubtitleText, SubtitleShowing, FiltersView, SearchBar, FiltersTypeView, 
  FiltersTypeCard, POsView } from './styles';

import Button from '../../components/Button';
import POCard from '../../components/POCard';

import { useAuth } from '../../hooks/auth';

const userImage = { uri: "https://avatars3.githubusercontent.com/u/56655841?s=460&u=acd8f1d1bd91b55e326f4c492478ec9975115902&v=4" };

const typeFilters: string[] = [
  'All','Pending', 'Approved','Blocked', 'Rejected' 
]

const POs = [
  {
    status: 'Approved',
    number: '999999',
    supplier: 'Alguma Loja Ai',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Pending',
    number: '999999',
    supplier: 'Alguma Loja Ai',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Blocked',
    number: '999999',
    supplier: 'Alguma Loja Ai',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Rejected',
    number: '999999',
    supplier: 'Alguma Loja Ai',
    date: '12/12/12',
    price: 'R$1500,00'
  },
]

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  
  const [searchFilter, setSearchFilter] = React.useState('');
  const [typeFilter, setTypeFilter] = React.useState('All');

  const handleSubtitleColor = useCallback(() => {
    let color = '';
    switch (typeFilter) {
      case 'All':
        color = '#eee'
        break;

      case 'Pending':
        color = '#ddd900'
        break;

      case 'Approved':
        color = '#77c16c'
        break;

      case 'Blocked':
        color = '#0400f3'
        break;

      case 'Rejected':
        color = '#c53030'
        break;
    
      default:
        break;
    }

    return color;
  },[typeFilter])

  return (
    <Container> 
      <SafeAreaView>
        <ScrollView
          >
          <HeaderView>
            <HeaderTitle>Dashboard</HeaderTitle>
            <HeaderImage source={userImage} />
          </HeaderView>
          <WelcomeView>
            <WelcomeTitle>Hello, </WelcomeTitle>
            <WelcomeSubtitle>Christian Oliveira</WelcomeSubtitle>
          </WelcomeView>
          <BodyView>
            <TitleView>
              <TitleText>Product Orders</TitleText>
              <SubtitleText>Showing: <SubtitleShowing style={{color: handleSubtitleColor()}}>{typeFilter}</SubtitleShowing></SubtitleText>
            </TitleView>
            <FiltersView>
            <SearchBar
              placeholder="Document ID..."
              platform="ios"
              containerStyle={{
                borderRadius: "8px",
                backgroundColor: "transparent",
                padding: "0px",
                margin: "0px"
              }}
              round
              onChangeText={newVal => setSearchFilter(newVal)}
              value={searchFilter}
              onCancel={() => setSearchFilter('')}
              onClearText={() => setSearchFilter('')}
            />
            <FiltersTypeView>
              {typeFilters.map((item, index) => (
                <FiltersTypeCard selected={typeFilter === item ? true : false} key={index} onPress={() => setTypeFilter(item)}>{item}</FiltersTypeCard>
              ))}
            </FiltersTypeView>
            </FiltersView>
            <POsView>
              {POs.map((item) => (
                <POCard item={item} />
              ))}
            </POsView>
          </BodyView>
        </ScrollView>
    </SafeAreaView>
    </Container>
  );
};

export default Dashboard;