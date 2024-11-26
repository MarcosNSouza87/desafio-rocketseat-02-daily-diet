import React, { useState } from 'react';
import * as S from './styles';
import { MealHeader } from '@components/MealHeader';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
interface IMealCreate {}

interface IForm {
	name: string;
	description: string;
	date: string;
	hour: string;
	isDiet: boolean;
}

type RouteParams = {
	edit?: IForm;
};

export function MealCreateEdit({}: IMealCreate) {
	const route = useRoute();
	const { edit } = route.params as RouteParams ?? {};
	const [form, setForm] = useState<IForm>({
    name: edit?.name || '',
		description: edit?.description || '',
		date: edit?.date || '',
		hour: edit?.hour || '',
		isDiet: edit?.isDiet ?? true, // Aqui a dieta por padrão é "sim"
	});
  const [dietOk, setDietOk] = useState<string>(edit?.isDiet ? "1" : "2");
	const { navigate } = useNavigation();

	// Função para atualizar os dados do formulário
	const handleInputChange = (field: keyof IForm, value: string | boolean) => {
		setForm((prevState) => ({
			...prevState,
			[field]: value,
		}));
	};

	const handleButtonOnFinish = () => {
		console.log('formualrio ', form);
		//alterar pois tm que fazer algum calculo talvez
		navigate('feedback', { status: form.isDiet });
	};

	return (
		<S.Conteiner>
			<MealHeader statusMeal title="Nova refeição" />
			<S.Content>
				{/* Passando handleInputChange para atualizar o 'name' */}
				<Input
					label="Nome"
					value={form.name}
					onChangeText={(text) => handleInputChange('name', text)} // Atualiza 'name'
				/>
				{/* Passando handleInputChange para atualizar 'description' */}
				<Input
					label="Descrição"
					value={form.description}
					numberOfLines={5}
					onChangeText={(text) => handleInputChange('description', text)} // Atualiza 'description'
				/>
				<S.Row>
					<S.InputContent>
						{/* Passando handleInputChange para atualizar 'date' */}
						<Input
							label="Data"
							value={form.date}
							onChangeText={(text) => handleInputChange('date', text)} // Atualiza 'date'
						/>
					</S.InputContent>
					<S.InputContent>
						{/* Passando handleInputChange para atualizar 'hour' */}
						<Input
							label="Hora"
							value={form.hour}
							onChangeText={(text) => handleInputChange('hour', text)} // Atualiza 'hour'
						/>
					</S.InputContent>
				</S.Row>
				<S.InfoText>Esta dentro da dieta?</S.InfoText>
				<S.Row>
					<S.InputContent>
						<S.ButtonChoise
							onPress={() => {
								setDietOk('1');
								handleInputChange('isDiet', true); // Atualiza 'isDiet' para true (sim)
							}}
							active={dietOk === '1'}
						>
							<S.ButtonChoiseText>Sim</S.ButtonChoiseText>
						</S.ButtonChoise>
					</S.InputContent>
					<S.InputContent>
						<S.ButtonChoise
							onPress={() => {
								setDietOk('2');
								handleInputChange('isDiet', false);
							}}
							active={dietOk === '2' ? true : false}
						>
							<S.ButtonChoiseText>Não</S.ButtonChoiseText>
						</S.ButtonChoise>
					</S.InputContent>
				</S.Row>
				<Button
					type="PRIMARY"
					title="Cadastrar refeição"
					onPress={handleButtonOnFinish}
				/>
			</S.Content>
		</S.Conteiner>
	);
}
