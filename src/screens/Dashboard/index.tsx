import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Alert, Text, FlatList } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import SkeletonContent from 'react-native-skeleton-content';

import { Container, ScrollView, HeaderView, HeaderTitle, HeaderAvatarButton, HeaderImage, WelcomeView, WelcomeTitle, 
  WelcomeSubtitle, BodyView, TitleView, TitleText, SubtitleText, SubtitleShowing, FiltersView, SearchBar, FiltersTypeView, 
  FiltersTypeCard,POsView, ApproveAllButton } from './styles';

import Button from '../../components/Button';
import POCard from '../../components/POCard';

import { useAuth } from '../../hooks/auth';

const userImage = { uri: "https://avatars3.githubusercontent.com/u/56655841?s=460&u=acd8f1d1bd91b55e326f4c492478ec9975115902&v=4" };

const typeFilters: string[] = [
  'All','Pending', 'Approved','Blocked', 'Rejected' 
]

const POs = [
  {
    status: 'Pending',
    number: '123124',
    supplier: 'ALGUMA LOJA AI',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Pending',
    number: '235324',
    supplier: 'ALGUMA LOJA AI',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Pending',
    number: '23425',
    supplier: 'ALGUMA LOJA AI',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Pending',
    number: '52362',
    supplier: 'ALGUMA LOJA AI',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Approved',
    number: '111111',
    supplier: 'ALGUMA LOJA AI',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Blocked',
    number: '333333',
    supplier: 'ALGUMA LOJA AI',
    date: '12/12/12',
    price: 'R$1500,00'
  },{
    status: 'Rejected',
    number: '999999',
    supplier: 'ALGUMA LOJA AI',
    date: '12/12/12',
    price: 'R$1500,00'
  },
]

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const route = useRoute();
  const { goBack, navigate } = useNavigation();

  const [searchFilter, setSearchFilter] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<string>('All');

  const [isLoadingPOs, setIsLoadingPOs] = useState<boolean>(false);

  const [selectedPOs, setSelectedPOs] = useState<string[]>([])

  const[refresh, setRefresh] = useState<boolean>(false);

  const userAvatarClick = useCallback(() => {
    navigate('UserProfile');
  },[])

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

  const handleSelectPO = useCallback((number: string) => {
    let allSelectedPOs = selectedPOs;

    if(!allSelectedPOs.includes(number)){
      allSelectedPOs.push(number);
    }else{
      const index = allSelectedPOs.indexOf(number);
      console.log(index);
      allSelectedPOs.splice(index, 1)
    }
    
    setSelectedPOs(allSelectedPOs);
    setRefresh(!refresh);
  
    // navigate('POInfo', { itemId: '1' });

  },[selectedPOs, refresh]);

  const handleViewPO = useCallback((number: string) => {
    navigate('POInfo', { documentNumber: number });
  },[])

  useEffect(() => {
    setIsLoadingPOs(true);

    setTimeout(() => {
    setIsLoadingPOs(false);
    }, 0)
  }, [])

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
            <HeaderAvatarButton onPress={userAvatarClick}>
              <HeaderImage source={userImage} />
            </HeaderAvatarButton>
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
              {selectedPOs.length > 0 && (
                <>
                <ApproveAllButton iconName="check-square" >Approve All</ApproveAllButton>
                {/* <ApproveAllButton iconName="check-square" >Approve All</ApproveAllButton> */}
                </>
              )}     
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
                extraData={refresh}
                renderItem={({ item }) => (
                  <POCard selected={selectedPOs.includes(item.number)} item={item} onCardSelect={handleSelectPO} onViewClick={handleViewPO} />
                )}
                keyExtractor={item => item.number}
                />
              </SkeletonContent>     
            </POsView>
          </BodyView>
        </ScrollView>
    </Container>
  );
};

export default Dashboard;