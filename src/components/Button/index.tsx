import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
import * as IconComponent from 'phosphor-react-native';
import { GenericIcon } from '@components/Icon';

type IButton = TouchableOpacityProps & {
	title: string;
	type?: S.ButtontypeStyleProps;
	icon?: "ArrowLeft" | "ArrowUpRight" | "Plus" | "Trash" | "PencilSimpleLine", 
};
export function Button({ title, type = 'PRIMARY', icon, ...rest }: IButton) {
	return (
		<S.Container type={type} {...rest}>
			{icon && <GenericIcon name={icon} size={24} type={type} />}
			<S.Title type={type}>{title}</S.Title>
		</S.Container>
	);
}
