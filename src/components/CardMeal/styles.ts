import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
	flex-direction: row;
	padding: 14px;
	border-radius: ${({ theme }) => theme.BORDERRADIUS}px;
  margin: 4px 0;
  align-items: center;
`;

interface IStatus {
	status: boolean;
}

export const Status = styled.View<IStatus>`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: ${({ theme, status }) => status ? theme.COLORS.GREEN.MID : theme.COLORS.RED.MID};
`;

export const HourText = styled.Text`
	width: 50px;
	font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  padding-right: 10px;
`;

export const Title = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	border-left-width: 1px;
	border-left-color: ${({ theme }) => theme.COLORS.GRAY_5};
	padding-left: 10px;
  flex: 1;
`;
