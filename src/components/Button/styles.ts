import { GenericIcon } from '@components/Icon';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtontypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
	type: ButtontypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
	flex: 1;
	min-height: 56px;
	max-height: 56px;
	background-color: ${({ theme, type }) =>
		type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
	border-radius: ${({ theme }) => theme.BORDERRADIUS}px;
	border: 1px solid
		${({ theme, type }) =>
			type === 'SECONDARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

export const Title = styled.Text<Props>`
	font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ theme, type }) =>
			type === 'SECONDARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
	margin-left: 5px;
`;
