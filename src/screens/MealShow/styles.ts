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
	height: 100px;
	background-color: ${({ theme, status }) =>
		status ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT};
	flex-direction: row;
	align-items: center;
	border-radius: ${({ theme }) => theme.BORDERRADIUS}px;

`;

export const Title = styled.Text`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ theme }) => theme.COLORS.GRAY_1};
	flex: 1;
	margin-right: 56px;
`;

export const ButtonIcon = styled(TouchableOpacity)`
	width: 56px;
	height: 56px;
	align-items: center;
	justify-content: center;
`;
export const Content = styled.View`
	border-radius: ${({ theme }) => theme.BORDERRADIUS * 4}px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_7};
	margin-top: -12px;
	padding: 34px 12px;
	flex: 1;
`;

export const ContentTitle = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.L}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const ContentInfoTitle = styled(ContentTitle)`
	font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	padding: 8px 0 14px;
`;

export const ContentSubTitle = styled(ContentTitle)`
	font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
`;

export const ContentInfo = styled.View`
	height: 80%;
`;

export const Icon = styled(ArrowLeft).attrs<IContainer>(({ theme, status }) => ({
	size: 28,
	color: status ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
}))``;
