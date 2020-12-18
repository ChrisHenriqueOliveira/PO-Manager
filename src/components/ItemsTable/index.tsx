import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';

import { Container, TableHeader, HeaderCell, HeaderText, 
  TableBody, TableLine, TableCell, BodyText } from './styles';

const ItemsTable: React.FC = ({ }) => {

  const [tableHeight, setTableHeight] = useState(0);

  useEffect(() => {
    const numberOfLines = 3;
    setTableHeight(40*3 + 75);
  }, [tableHeight])

  return(
    <ScrollView style={{flex: 1}} contentContainerStyle={{height: tableHeight}}>
      <ScrollView horizontal={true}>
        <Container>
            <TableHeader>
              <HeaderCell first cellWidth="40">
                <HeaderText>
                  ID
                </HeaderText>
              </HeaderCell>
              <HeaderCell>
                <HeaderText>
                  PROD.
                </HeaderText>
              </HeaderCell>
              <HeaderCell>
                <HeaderText>
                  DESC.
                </HeaderText>
              </HeaderCell>
              <HeaderCell cellWidth="90">
                <HeaderText>
                  UNIT.
                </HeaderText>
              </HeaderCell>
              <HeaderCell cellWidth="90">
                <HeaderText>
                  QTT.
                </HeaderText>
              </HeaderCell>
              <HeaderCell cellWidth="90">
                <HeaderText>
                  UNI. PRICE
                </HeaderText>
              </HeaderCell>
              <HeaderCell cellWidth="90">
                <HeaderText>
                  MOEDA
                </HeaderText>
              </HeaderCell>
              <HeaderCell last cellWidth="90">
                <HeaderText>
                  TOTAL
                </HeaderText>
              </HeaderCell>
            </TableHeader>
            <TableBody>
              <TableLine>
                <TableCell cellWidth="40">
                  <BodyText>
                    # 1
                  </BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>
                    Batata enlatadaenlatadaenlatadaenlatadaenlatada
                  </BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>
                    Batatas enlatadasenlatadasenlatadasenlatadasenlatadas e tal
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    LATA
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    297
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    2,90
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    REAL
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    4352,30
                  </BodyText>
                </TableCell>
              </TableLine>
              <TableLine>
                <TableCell cellWidth="40">
                  <BodyText>
                    # 1
                  </BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>
                    Batata enlatada
                  </BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>
                    Batatas enlatadas e tal
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    LATA
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    297
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    2,90
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    REAL
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    4352,30
                  </BodyText>
                </TableCell>
              </TableLine>
              <TableLine>
                <TableCell first cellWidth="40">
                  <BodyText>
                    # 1
                  </BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>
                    Batata enlatada
                  </BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>
                    Batatas enlatadas e tal
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    LATA
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    297
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    2,90
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="90">
                  <BodyText>
                    REAL
                  </BodyText>
                </TableCell>
                <TableCell last cellWidth="90">
                  <BodyText>
                    4352,30
                  </BodyText>
                </TableCell>
              </TableLine>
            </TableBody>
        </Container>
      </ScrollView>
    </ScrollView>
)};

export default ItemsTable;
