import React from 'react';
import * as S from './styles';
import { Text } from '@components/BaseText';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
type IInput = TextInputProps & {
	label: string;
};
export function Input({ label, ...rest }: IInput) {
	const theme = useTheme();
	return (
		<S.ContainerInput>
			<Text weight={theme.FONT_FAMILY.BOLD} size={theme.FONT_SIZE.M}>
				{label}
			</Text>
			<S.Input {...rest} />
		</S.ContainerInput>
	);
}
