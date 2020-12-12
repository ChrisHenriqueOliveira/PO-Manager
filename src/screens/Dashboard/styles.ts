import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  max-width: 450px;
`;