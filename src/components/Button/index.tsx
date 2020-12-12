import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonIcon, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  iconName?: string;
}

const Button: React.FC<ButtonProps> = ({ children, iconName, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
    {iconName && <ButtonIcon name={iconName} size={20}/>}
  </Container>
);

export default Button;
