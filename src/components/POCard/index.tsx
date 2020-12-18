import React, { useCallback, useEffect, useState } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { CheckBox } from "react-native-elements";

import { Container, HeaderView, DocumentInfo, StatusFlag, DocumentNumber, OpenPoInfoButton, ItemView, ItemIcon, ItemText } from './styles';

export interface POItemProps  {
  status: string;
  number: string;
  supplier: string;
  date: string;
  price: string;
}

interface POCardProps  {
  item: POItemProps;
  selected: boolean;
  onCardSelect: (number: string) => void;
  onViewClick: (item: string) => void;
}

const POCard: React.FC<POCardProps> = ({ item, selected, onCardSelect, onViewClick }) => {
  
  const [isSelected, setIsSelected] = useState<boolean>(false)

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

  const handleIsSelected = useCallback((number) => {
    console.log(selected)
    return false;
  },[])

  return(
  <Container>
    <HeaderView>
      {item.status === 'Pending' && (
        <CheckBox
          checkedIcon="check-square"
          uncheckedIcon="square"
          containerStyle={{ marginLeft: -3, marginTop: 0, marginBottom: 0, marginRight: 17, padding: 0 }}
          checkedColor="#77c16c"
          uncheckedColor="#191720"
          onPress={() => onCardSelect(item.number)}
          size={30}
          checked={selected}
        />
      )}
      
      <DocumentInfo>
        <StatusFlag color={handleStatusColor(item.status)}/>
        <DocumentNumber color={handleStatusColor(item.status)}>{item.number}</DocumentNumber>
      </DocumentInfo>
      <OpenPoInfoButton iconName="eye" onPress={() => onViewClick(item.number)}>View</OpenPoInfoButton>
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
