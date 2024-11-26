import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const ContainerInput = styled.View`
  width: 100%;
  margin: 12px 0;
`;

export const Input = styled(TextInput)`
	border-radius: 6px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
	width: 100%;
	height: 56px;
	padding-left: 16px;
`;

