import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type ICardDiet = TouchableOpacityProps & {
	title: string;
	subtitle: string;
}

export function CardDiet({ title, subtitle, ...rest }: ICardDiet) {
	return (
		<S.Container {...rest}>
			<S.Title>{title}</S.Title>
			<S.SubTitle>{subtitle}</S.SubTitle>
			<S.Icon />
		</S.Container>
	);
}
