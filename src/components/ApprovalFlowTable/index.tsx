import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';

import { Container, TableHeader, HeaderCell, HeaderText, 
  TableBody, TableLine, TableCell, BodyText } from './styles';

const ApprovalFlowTable: React.FC = ({ }) => {

  const [tableHeight, setTableHeight] = useState(0);

  useEffect(() => {
    const numberOfLines = 3;
    setTableHeight(40*2 + 75);
  }, [tableHeight])

  return(
    <ScrollView style={{flex: 1}} contentContainerStyle={{height: tableHeight}}>
      <ScrollView horizontal={true}>
        <Container>
            <TableHeader>
              <HeaderCell first cellWidth="70">
                <HeaderText>
                  LEVEL
                </HeaderText>
              </HeaderCell>
              <HeaderCell>
                <HeaderText>
                  RESP. APPROVER
                </HeaderText>
              </HeaderCell>
              <HeaderCell>
                <HeaderText>
                  ACT. SITUATION
                </HeaderText>
              </HeaderCell>
              <HeaderCell cellWidth="115">
                <HeaderText>
                  REL. DATE
                </HeaderText>
              </HeaderCell>
              <HeaderCell last cellWidth="115">
                <HeaderText>
                  APPR. TIME
                </HeaderText>
              </HeaderCell>
            </TableHeader>
            <TableBody>
              <TableLine>
                <TableCell cellWidth="70">
                  <BodyText>
                    # 1
                  </BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>
                    CHRISTIAN_OLIVEIRA
                  </BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>
                    APROVADO
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="115">
                  <BodyText>
                    16/01/2020
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="115">
                  <BodyText>
                    11:25:03
                  </BodyText>
                </TableCell>
              </TableLine>
              <TableLine>
                <TableCell first cellWidth="70">
                  <BodyText>
                    # 1
                  </BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>
                    CHRISTIAN_OLIVEIRA
                  </BodyText>
                </TableCell>
                <TableCell>
                  <BodyText>
                    APROVADO
                  </BodyText>
                </TableCell>
                <TableCell cellWidth="115">
                  <BodyText>
                    16/01/2020
                  </BodyText>
                </TableCell>
                <TableCell last cellWidth="115">
                  <BodyText>
                    11:25:03
                  </BodyText>
                </TableCell>
              </TableLine>         
            </TableBody>
        </Container>
      </ScrollView>
    </ScrollView>
)};

export default ApprovalFlowTable;
