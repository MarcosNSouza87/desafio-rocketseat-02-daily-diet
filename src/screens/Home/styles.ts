import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAvatar from '@assets/user.png';

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_7};
	padding: 24px;
`;
export const Text = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	color: ${({ theme }) => theme.COLORS.GRAY_1};
	margin: 8px 4px;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 20px 24px 32px;
`;

export const Avatar = styled.Image.attrs({
	source: UserAvatar,
})``;

export const TitleList = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.L}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-top: 24px;
`;
