import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type IContainer = {
	status: boolean;
};

export const Header = styled.View<IContainer>`
	width: 100%;
	height: 100px;
	background-color: ${({ theme, status }) =>
		status ? theme.COLORS.GREEN.LIGHT : theme.COLORS.RED.LIGHT};
	flex-direction: row;
	align-items: center;
	border-radius: ${({ theme }) => theme.BORDERRADIUS}px;

`;

export const ButtonIcon = styled(TouchableOpacity)`
	width: 56px;
	height: 56px;
	align-items: center;
	justify-content: center;
`;


export const Title = styled.Text`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ theme }) => theme.COLORS.GRAY_1};
	flex: 1;
	margin-right: 56px;
`;


export const Icon = styled(ArrowLeft).attrs<IContainer>(({ theme, status }) => ({
	size: 28,
	color: status ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
}))``;
