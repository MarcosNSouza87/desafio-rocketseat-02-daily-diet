import React, { useState } from 'react';
import * as S from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '@components/Button';
import { IForm } from 'src/@types/form';
import { mealRemove } from '@storage/meal/mealRemove';
import { Modal } from 'react-native';
import { Text } from '@components/BaseText';
type RouteParams = {
	edit: IForm;
};

export function MealShow() {
	const route = useRoute();
	const { edit } = route.params as RouteParams;
	const { isDiet, name, description, hour, date, id } = edit;
	const { navigate } = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);

	const handleEdit = () => {
		navigate('mealEdit', { edit });
	};

	async function handleRemove() {
		await mealRemove(id);
		navigate('home');
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
					<S.ContentIsDiet >
						<S.ContentStatusIsDiet status={isDiet}></S.ContentStatusIsDiet>
						<S.TitleIsDiet>
							{`${isDiet ? 'dentro' : 'fora'} da dieta`}
						</S.TitleIsDiet>
					</S.ContentIsDiet>
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
					onPress={() => setModalVisible(!modalVisible)}
				/>
			</S.Content>
			{modalVisible && (
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => setModalVisible(!modalVisible)}
				>
					<S.ContainerModal>
						<S.ContentModal>
							<S.ModalText>
								Deseja realmente excluir o registro de refeição?
							</S.ModalText>

							<S.GroupModalButtons>
								<Button
									type="SECONDARY"
									title="Cancelar"
									style={{
										marginTop: 12,
										marginRight: 6,
									}}
									onPress={() => setModalVisible(!modalVisible)}
								/>
								<Button
									type="PRIMARY"
									style={{
										marginTop: 12,
										marginLeft: 6,
									}}
									title="Sim, excluir"
									onPress={handleRemove}
								/>
							</S.GroupModalButtons>
						</S.ContentModal>
					</S.ContainerModal>
				</Modal>
			)}
		</S.Container>
	);
}
