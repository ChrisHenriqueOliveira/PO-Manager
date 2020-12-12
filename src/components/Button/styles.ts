import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled(RectButton)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: #77c16c;
    border-radius: 16px;
    margin-top: 8px;
`;

export const ButtonIcon = styled(Feather)`
  margin-left: 8px;
  color: #191720;
`;

export const ButtonText = styled.Text`
  font-family: 'Montserrat-Bold';
  color: #191720;
  font-size: 16px;
`;