import { Button } from '@components/Button';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Conteiner = styled(SafeAreaView)`
	flex: 1;
`;

export const Content = styled.View`
	border-radius: ${({ theme }) => theme.BORDERRADIUS * 4}px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_7};
	margin-top: -12px;
	padding: 34px 24px;
	flex: 1;
`;

export const InfoText = styled.Text`
  height: 30px;
`;

export const Row = styled.View`
	flex-direction: row;
  gap: 12px;

  height: 100px;
`;
export const InputContent = styled.View`
	width: 48%;
`;

type Props = {
	active: boolean,
};

export const ButtonChoise = styled(TouchableOpacity)<Props>`
	flex: 1;
	min-height: 56px;
	max-height: 56px;
	background-color: ${({ theme, active }) =>
		active ? theme.COLORS.GREEN.LIGHT : theme.COLORS.GRAY_6};
	border-radius: ${({ theme }) => theme.BORDERRADIUS}px;
	border: 1px solid
		${({ theme, active }) =>
			active ? theme.COLORS.GREEN.DARK : theme.COLORS.GRAY_4};
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

export const ButtonChoiseText = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ theme }) => theme.COLORS.GRAY_2 };
	margin-left: 5px;
`;
