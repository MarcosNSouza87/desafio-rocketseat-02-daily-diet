import React from 'react';
import * as S from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '@components/Button';
type RouteParams = {
	statusMeal: boolean;
	title: string;
	description: string;
	hour: string;
	date: string;
};

export function MealShow() {
	const route = useRoute();
	const navigation = useNavigation();
	const { statusMeal, title, description, hour, date } = route.params as RouteParams;

	return (
		<S.Container>
			<S.Header status={statusMeal}>
				<S.ButtonIcon onPress={() => navigation.navigate('home')}>
					<S.Icon status={statusMeal} />
				</S.ButtonIcon>
				<S.Title>Refeição</S.Title>
			</S.Header>
			<S.Content>
				<S.ContentInfo>
					<S.ContentTitle>{title}</S.ContentTitle>
					<S.ContentInfoTitle>{description}</S.ContentInfoTitle>
					<S.ContentSubTitle>Data e hora</S.ContentSubTitle>
					<S.ContentInfoTitle>{`${date} às ${hour}`}</S.ContentInfoTitle>
				</S.ContentInfo>
				<Button icon="PencilSimpleLine" type="PRIMARY" title="Editar refeição" />
				<Button
					icon="Trash"
					type="SECONDARY"
					title="Excluir refeição"
					style={{
						marginTop: 12,
					}}
				/>
			</S.Content>
		</S.Container>
	);
}
