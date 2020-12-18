import React, { useCallback, useEffect } from 'react';

import { StackActions, useNavigation, useRoute  } from '@react-navigation/native';

import { Container, ScrollView, HeaderView, HeaderTitle, HeaderAvatarButton, 
  HeaderImage, BodyView, PoInformation, ItemView, ItemIcon, 
  ItemText, ButtonsView, RejectButton, ApproveButton, POItemsTable, ApprovalsFlowTable } from './styles';

import { useAuth } from '../../hooks/auth';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

interface RouteParams {
  documentNumber: string;
}

const userImage = { uri: "https://avatars3.githubusercontent.com/u/56655841?s=460&u=acd8f1d1bd91b55e326f4c492478ec9975115902&v=4" };

const POInfo: React.FC = ({}) => {
  const { user, signOut } = useAuth();
  const { goBack, navigate, reset } = useNavigation();  
  const { params } = useRoute();

  const { documentNumber } = params as RouteParams;

  const userAvatarClick = useCallback(() => {
    navigate('UserProfile');
  },[])

  useEffect(() => {
    !documentNumber && navigate('Dashboard');
  },[])

  return (
    <Container> 
        <ScrollView>
          <HeaderView>
            <HeaderTitle>PO Information</HeaderTitle>
            <HeaderAvatarButton onPress={userAvatarClick}>
              <HeaderImage source={userImage} />
            </HeaderAvatarButton>
          </HeaderView>
          <BodyView>
            <PoInformation>
              <ItemView style={{marginBottom: 16}}>
                <ItemIcon name="hash" size={32}/>
                <ItemText style={{fontSize: 32}}>{documentNumber}</ItemText>
              </ItemView>
              <ItemView>
                <ItemIcon name="shopping-cart" size={24}/>
                <ItemText>ALGUMA LOJA AI</ItemText>
              </ItemView>
              <ItemView>
                <ItemIcon name="calendar" size={24}/>
                <ItemText>12/12/12</ItemText>
              </ItemView>
              <ItemView>
                <ItemIcon name="dollar-sign" size={24}/>
                <ItemText>R$ 252,00</ItemText>
              </ItemView>
              <ItemView>
                <ItemIcon name="dollar-sign" size={24}/>
                <ItemText>REAL</ItemText>
              </ItemView>
              <TextArea placeholder="Observations" name="observations" onChange={() => console.log('fad')}></TextArea>
              <ButtonsView>
                <RejectButton iconName="x">Reject</RejectButton>
                <ApproveButton iconName="check">Approve</ApproveButton>
              </ButtonsView>
              <ItemView>
                <ItemIcon name="package" size={24}/>
                <ItemText>ITEMS</ItemText>
              </ItemView>
              <POItemsTable/>
              <ItemView>
                <ItemIcon name="trello" size={24}/>
                <ItemText>APPROVAL FLOW</ItemText>
              </ItemView>
              <ApprovalsFlowTable/>
            </PoInformation>  
          </BodyView>
        </ScrollView>
    </Container>
  );
};

export default POInfo;