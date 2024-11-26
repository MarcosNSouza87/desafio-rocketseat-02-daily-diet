import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@components/BaseText';

const isAndroid = Platform.OS === 'android';

export const Container = styled(SafeAreaView)`
	padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.COLORS.white};
`;

export const Content = styled.View`
	justify-content: center;
	align-items: center;
	padding: 24px;
`;

type PropsText = {
  status: boolean
}