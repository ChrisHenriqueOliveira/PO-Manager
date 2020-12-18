import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused?: boolean;
  isErrored?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  min-height: 120px;
  margin-top: 8px;
  padding: 0 16px;
  background: #1E1C24;
  border-radius: 16px;
  margin-bottom: 8px;
  border-bottom-width: 2px;
  border-color: #36353E;
  flex-direction: column;
  justify-content: center;
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
  `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #77c16c;
  `}
`;

export const InputContainerView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput<ContainerProps>`
  flex: 1;
  color: #eee;
  font-family: 'Montserrat-Medium';
  font-size: 16px;
  /* background-color: #000 !important; */

  ${props =>
    props.isFocused &&
    css`
        outline: 0px solid transparent;
    `}

    height: 88px;
`;

export const LeftIcon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const RightIcon = styled(FeatherIcon)`
  margin-left: 16px;
`;

export const InputErrorView = styled.View`
    margin-bottom: 8px;
`;

export const ErrorText = styled.Text`
    color: #c53030;
    font-family: 'Montserrat-Medium';
    font-size: 14px;
    margin-left: 16px;
`;
