import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Alert, Text, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import SkeletonContent from 'react-native-skeleton-content';

import { Container, ScrollView, HeaderView, HeaderTitle, HeaderImage, WelcomeView, WelcomeTitle, 
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
    number: '111111',
    supplier: 'Alguma Loja Ai',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Pending',
    number: '222222',
    supplier: 'Alguma Loja Ai',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Blocked',
    number: '333333',
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
  
  const [searchFilter, setSearchFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');

  const [isLoadingPOs, setIsLoadingPOs] = useState(false);

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

  useEffect(() => {
    setIsLoadingPOs(true);

    setTimeout(() => {
    setIsLoadingPOs(false);
    }, 0)
  }, [])

  return (
    <Container> 
        <ScrollView>
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
            <SkeletonContent
              containerStyle={{ flex: 1, width: '100%', borderRadius: 8 }}
              isLoading={isLoadingPOs}
              layout={[
                { key: '1', width: '100%', height: 128, marginBottom: 8 },
                { key: '2', width: '100%', height: 128, marginBottom: 8 },
                { key: '3', width: '100%', height: 128, marginBottom: 8 }
              ]}
            >
              <FlatList
              data={POs}
              renderItem={({ item }) => (
                <POCard item={item} />
              )}
              keyExtractor={item => item.id}
              />
              {/* {POs.map((item) => (
                <POCard item={item} />
              ))} */}
            </SkeletonContent>     
            </POsView>
          </BodyView>
        </ScrollView>
    </Container>
  );
};

export default Dashboard;