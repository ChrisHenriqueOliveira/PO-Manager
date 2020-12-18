import styled, { css } from 'styled-components/native';

interface CellProps {
  first?: boolean;
  last?: boolean;
  cellWidth?: string;
}

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #eee;
  background-color: #36353E;
`;

export const TableHeader = styled.View`
  display: flex; 
  flex-direction: row;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 40px;
  width: 100%;
`;

export const HeaderCell = styled.View<CellProps>`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 160PX;
  height: 40px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  background-color: #1E1C24;

  ${props =>
    props.first &&
    css`
      border-top-left-radius: 8px;
  `}

  ${props =>
    props.last &&
    css`
      border-top-right-radius: 8px;
  `}

  ${props =>
    props.cellWidth &&
    css`
      width: ${props.cellWidth};
  `}
`;

export const HeaderText = styled.Text`
  font-family: 'Montserrat-Bold';
  color: #eee;
  font-size: 16px;
  margin-left: 8px;
`;

export const TableBody = styled.View`
  display: flex; 
  flex-direction: column;
  margin-top: 2px;
  height: 40px;
  width: 100%;
`;

export const TableLine = styled.View`
  display: flex; 
  flex-direction: row;
  height: 40px;
`;

export const TableCell = styled.View<CellProps>`
  display: flex;
  justify-content: center;
  width: 160PX;
  min-height: 40px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  /* border-right-color: #eee;
  border-right-width: 1px; */
  background-color: #1E1C24;

  ${props =>
    props.first &&
    css`
      border-bottom-left-radius: 8px;
  `}

  ${props =>
    props.last &&
    css`
      border-bottom-right-radius: 8px;
  `}

  ${props =>
    props.cellWidth &&
    css`
      width: ${props.cellWidth};
  `}
`;

export const BodyText = styled.Text`
  font-family: 'Montserrat-Bold';
  color: #eee;
  font-size: 10;
  margin-left: 10px;
`;