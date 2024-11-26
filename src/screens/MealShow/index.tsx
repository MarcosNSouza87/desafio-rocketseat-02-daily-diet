import React from 'react';
import * as S from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '@components/Button';
import { IForm } from 'src/@types/form';
type RouteParams = {
	edit: IForm;
};

export function MealShow() {
	const route = useRoute();
	const { edit } = route.params as RouteParams;
	const { isDiet, name, description, hour, date } = edit;
	const { navigate } = useNavigation();

	const handleEdit = () => {
		navigate("mealEdit", {edit})
	}

	return (
		<S.Container>
			<S.Header status={isDiet}>
				<S.ButtonIcon onPress={() => navigate('home')}>
					<S.Icon status={isDiet} />
				</S.ButtonIcon>
				<S.Title>Refeição</S.Title>
			</S.Header>
			<S.Content>
				<S.ContentInfo>
					<S.ContentTitle>{name}</S.ContentTitle>
					<S.ContentInfoTitle>{description}</S.ContentInfoTitle>
					<S.ContentSubTitle>Data e hora</S.ContentSubTitle>
					<S.ContentInfoTitle>{`${date} às ${hour}`}</S.ContentInfoTitle>
				</S.ContentInfo>
				<Button
				 icon="PencilSimpleLine"
				  type="PRIMARY" 
					title="Editar refeição"
					onPress={handleEdit}
					 />
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
