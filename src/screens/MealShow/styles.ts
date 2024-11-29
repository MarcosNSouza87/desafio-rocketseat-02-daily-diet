import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { ArrowLeft } from 'phosphor-react-native';
import { Modal, TouchableOpacity } from 'react-native';

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

export const ContainerModal = styled.View`
	background-color: ${({ theme }) => theme.COLORS.GRAY_1}55;
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 24px;
`;
export const ContentModal = styled.View`
	height: 200px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_4};
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_7};
	padding: 12px 24px;
`;

export const ContentIsDiet = styled.View`
	background-color: ${({ theme }) => theme.COLORS.GRAY_6};
	border-radius: 19px;
	width: 150px;
	padding: 8px;
	align-items: center;
	flex-direction: row;
`;
export const ContentStatusIsDiet = styled.View<IContainer>`
	width: 10px;
	height: 10px;
	border-radius: 10px;
	background-color: ${({ theme, status }) =>
		status ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK};
	margin-right: 12px;
	margin-left: 8px;
`;

export const TitleIsDiet = styled(ContentSubTitle)`
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ModalText = styled(ContentTitle)`
	text-align: center;
	padding: 16px 24px;
`;
export const GroupModalButtons = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`;

export const Icon = styled(ArrowLeft).attrs<IContainer>(({ theme, status }) => ({
	size: 28,
	color: status ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
}))``;
