import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Button from '../../components/Button';
import ItemsTable from '../../components/ItemsTable';
import ApprovalFlowTable from '../../components/ApprovalFlowTable';

export const Container = styled.View`
  flex: 1;
  background-color: #191720;
  padding: 0 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

// export const ScrollView = styled.ScrollView`
//   width: 100%;
// `;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: { },
  horizontal: false,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
`;

export const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-top: 24px;
`;

export const HeaderTitle = styled.Text`
  color: #eee;
  font-family: 'Montserrat-Bold';
  font-size: 20px;
`;

export const HeaderAvatarButton = styled(RectButton)``;

export const HeaderImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const WelcomeView = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  `;

export const WelcomeTitle = styled.Text`
  color: #eee;
  font-family: 'Montserrat-Medium';
  font-weight: bold;
  font-size: 32px;
`;

export const WelcomeSubtitle = styled.Text`
  font-family: 'Montserrat-Medium';
  font-weight: bold;
  font-size: 32px;
  color: #77c16c;
`;

export const BodyView = styled.View`
  /* flex: 1; */
  width: 100%;
`;

export const PoInformation = styled.View`
  display: flex;
  margin-top: 32px;
`;

export const ItemView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const ItemIcon = styled(Feather)`
  color: #eee;
  margin-right: 8px;
`;

export const ItemText = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 24px;
  color: #eee;
`;

export const ButtonsView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 0;
margin-bottom: 16px;
`;

export const RejectButton = styled(Button)`
  margin-top: 0;
  margin-right: 8px;
  width: 50%;
  background-color: #c53030;
`;

export const ApproveButton = styled(Button)`
  margin-top: 0;
  flex: 1;
`;

export const POItemsTable = styled(ItemsTable)`
  margin-top: 0;
`;

export const ApprovalsFlowTable = styled(ApprovalFlowTable)`
  margin-top: 0;
`;
