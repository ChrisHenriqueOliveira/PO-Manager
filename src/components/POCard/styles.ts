import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Button from '../Button';

interface StatusProps {
  color: string;
}

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 128px;
    padding: 12px;
    background-color: #36353E;
    border-radius: 6px;
    margin-bottom: 8px;
    justify-content: space-between;
`;

export const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 24px;
`;

export const DocumentInfo = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const StatusFlag = styled.View<StatusProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 16px;
  background-color: white;

  ${props =>
    props.color &&
    css`
      background-color: ${props.color};
      color: ${props.color};
  `}
`;

export const DocumentNumber = styled.Text<StatusProps>`
  font-family: 'Montserrat-Medium';
  font-weight: bold;
  font-size: 24px;
  color: #eee;

  ${props =>
    props.color &&
    css`
      color: ${props.color};
  `}
`;

export const OpenPoInfoButton = styled(Button)`
  height: 25px;
  width: auto;
  padding: 8px;
  border-radius: 3px;
  margin: 0;
`;

export const ItemView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemIcon = styled(Feather)`
  color: #eee;
  margin-right: 8px;
`;

export const ItemText = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 16px;
  color: #eee;
`;
