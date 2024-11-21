import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

type ICardDiet = TouchableOpacityProps & {
	title: number;
	subtitle: string;
}

export function CardDiet({ title, subtitle, ...rest }: ICardDiet) {
	const statusDiet = title > 70 ? true : false;

	return (
		<S.Container status={statusDiet}{...rest}>
			<S.Title>{`${title.toFixed(2).replace('.',',')}%`}</S.Title>
			<S.SubTitle>{`das refeições ${statusDiet ? 'dentro' : 'fora'} da dieta`}</S.SubTitle>
			<S.Icon status={statusDiet}/>
		</S.Container>
	);
}
