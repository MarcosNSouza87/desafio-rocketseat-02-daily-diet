import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

type IContainer = {
	status: boolean;
};

export const Container = styled(SafeAreaView)`
	flex: 1;
`;

export const Header = styled.View<IContainer>`
	width: 100%;
	height: 168px;
	background-color: ${({ theme, status }) =>
		status ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT};
	justify-content: center;
	border-radius: ${({ theme }) => theme.BORDERRADIUS}px;
	margin-bottom: 20px;
`;

export const Title = styled.Text`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const SubTitle = styled.Text`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const ButtonIcon = styled(TouchableOpacity)`
	position: absolute;
	top: 24px;
	left: 12px;
`;
export const Content = styled.View`
	flex: 1;
	border-radius: ${({ theme }) => theme.BORDERRADIUS * 4}px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_7};
	margin-top: -44px;
	padding: 34px 12px;
`;

export const ContentTitle = styled.Text`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

interface IContentCard {
	type: 'normal' | 'green' | 'red';
}

export const ContentCard = styled.View<IContentCard>`
	margin: 8px 0;
	padding: 12px;
	border-radius: ${({ theme }) => theme.BORDERRADIUS}px;
	background-color: ${({ theme, type }) =>
		type === 'normal'
			? theme.COLORS.GRAY_6
			: type === 'green'
			? theme.COLORS.GREEN.LIGHT
			: theme.COLORS.RED.LIGHT};
`;

export const CardTitle = styled.Text`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const CardSubtitle = styled.Text`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	color: ${({ theme }) => theme.COLORS.GRAY_1};
  padding-top: 4px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentCardRow = styled(ContentCard)`
  width: 48%;
  height: 107px;
  justify-content: center;
  padding: 0 24px;
`;

export const Icon = styled(ArrowLeft).attrs<IContainer>(({ theme, status }) => ({
	size: 28,
	color: status ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
}))``;
