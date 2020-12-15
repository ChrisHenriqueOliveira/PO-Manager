import React, { useCallback } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, HeaderView, StatusFlag, DocumentNumber, ItemView, ItemIcon, ItemText } from './styles';

interface POItemProps  {
  status: string;
  number: string;
  supplier: string;
  date: string;
  price: string;
}

interface POCardProps  {
  item: POItemProps;
}

const POCard: React.FC<POCardProps> = ({ item }) => {
  
  const handleStatusColor = useCallback((status) => {
    let color = '';
    switch (status) {
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
  },[])

  return(
  <Container>
    <HeaderView>
      <StatusFlag color={handleStatusColor(item.status)}/>
      <DocumentNumber color={handleStatusColor(item.status)}>{item.number}</DocumentNumber>
    </HeaderView>
    <ItemView>
      <ItemIcon name="shopping-cart" size={16}/>
      <ItemText>{item.supplier}</ItemText>
    </ItemView>
    <ItemView>
      <ItemIcon name="calendar" size={16}/>
      <ItemText>{item.date}</ItemText>
    </ItemView>
    <ItemView>
      <ItemIcon name="dollar-sign" size={16}/>
      <ItemText>{item.price}</ItemText>
    </ItemView>
  </Container>
)};

export default POCard;
