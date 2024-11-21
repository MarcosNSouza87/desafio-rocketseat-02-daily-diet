import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  padding: 24px;
`;
export const Text = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GREEN.DARK};
`;
