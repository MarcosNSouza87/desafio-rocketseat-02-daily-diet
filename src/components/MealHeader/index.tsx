import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

interface IMealHeader {
	title: string;
	statusMeal: boolean;
}

export function MealHeader({statusMeal, title}: IMealHeader) {
	const { navigate } = useNavigation();
	return (
		<S.Header status={statusMeal}>
			<S.ButtonIcon onPress={() => navigate('home')}>
				<S.Icon status={statusMeal} />
			</S.ButtonIcon>
			<S.Title>{title}</S.Title>
		</S.Header>
	);
}
