import styled, { css } from 'styled-components/native';
import Button from '../../components/Button';
import { SearchBar as SearchBarField } from 'react-native-elements';

import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
const windowHeight = Dimensions.get('window').height;

interface TypeCardProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #191720;
  padding: 0 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

// export const ScrollView = styled.ScrollView`
//   width: 100%;
// `;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: { },
  horizontal: false,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
`;

export const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-top: 24px;
`;

export const HeaderTitle = styled.Text`
  color: #eee;
  font-family: 'Montserrat-Bold';
  font-size: 20px;
`;

export const HeaderAvatarButton = styled(RectButton)``;

export const HeaderImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const WelcomeView = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  `;

export const WelcomeTitle = styled.Text`
  color: #eee;
  font-family: 'Montserrat-Medium';
  font-weight: bold;
  font-size: 32px;
`;

export const WelcomeSubtitle = styled.Text`
  font-family: 'Montserrat-Medium';
  font-weight: bold;
  font-size: 32px;
  color: #77c16c;
`;

export const BodyView = styled.View`
  /* flex: 1; */
  width: 100%;
`;

export const TitleView = styled.View`
  display: flex;
  width: 100%;
  margin-top: 16px;
`;

export const TitleText = styled.Text`
  font-family: 'Montserrat-Medium';
  font-weight: bold;
  font-size: 24px;
  color: #eee;
`;

export const SubtitleText = styled.Text`
  font-family: 'Montserrat-Medium';
  font-weight: bold;
  font-size: 16px;
  color: #eee;
  margin-top: 8px;
`;

export const SubtitleShowing = styled.Text`
  font-family: 'Montserrat-Medium';
  font-weight: bold;
  font-size: 16px;
  color: #77c16c;
  margin-top: 8px;
  margin-left: 8px;
`;

export const FiltersView = styled.View`
  margin-top: 8px;
`;

export const SearchBar = styled(SearchBarField)`
`;

export const FiltersTypeViews = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 8px;
`;

export const FiltersTypeView = styled.ScrollView.attrs({
  contentContainerStyle: { paddingLeft: 8 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 98%;
`;

export const FiltersTypeCard = styled.Text<TypeCardProps>`
  padding: 8px;
  background-color: #36353E;
  border-radius: 8px;
  margin-left: 4px;
  margin-right: 4px;
  font-family: 'Montserrat-Medium';
  font-size: 14px;
  color: #eee;
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      background-color: #77c16c;;
  `}
`;

export const ApproveAllButton = styled(Button)`
  margin: 0 0 11px 0;
  border-radius: 8px;
`;

export const POsView = styled.View`
  /* flex: 1; */
  width: 100%;
  margin-top: 11px;
  padding: 0 8px 0 8px;
`;