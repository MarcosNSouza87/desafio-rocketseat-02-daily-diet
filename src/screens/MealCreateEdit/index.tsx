import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { MealHeader } from '@components/MealHeader';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IForm } from 'src/@types/form';
import { mealCreate } from '@storage/meal/mealCreate';
import { mealUpdate } from '@storage/meal/mealUpdate';
interface IMealCreate {}

type RouteParams = {
	edit?: IForm;
};

export function MealCreateEdit({}: IMealCreate) {
	const route = useRoute();
	const { edit } = (route.params as RouteParams) ?? {};
	const [form, setForm] = useState<IForm>({
		id: edit?.id || '',
		name: edit?.name || '',
		description: edit?.description || '',
		date: edit?.date || '',
		hour: edit?.hour || '',
		isDiet: edit?.isDiet ?? true, // Aqui a dieta por padrão é "sim"
	});
	const [dietOk, setDietOk] = useState<string>(edit?.isDiet ? '1' : '2');
	const { navigate } = useNavigation();

	// Função para atualizar os dados do formulário
	const handleInputChange = (field: keyof IForm, value: string | boolean) => {
		setForm((prevState) => ({
			...prevState,
			[field]: value,
		}));
	};

	async function handleButtonOnFinish () {
		//alterar pois tm que fazer algum calculo talvez
		if(edit){
			//pega pelo id na lista e edita e salva no storeage
			await mealUpdate(form);
		}else{
			//salva na storage
			const newMeal: IForm = {
				...form,
				id: Math.random().toString(36).substring(2, 9),
			}
			console.log(newMeal);
			await mealCreate(newMeal);
		}
		navigate('feedback', { status: form.isDiet });
	};

	const formatCurrentDateAndTime = () => {
		// Cria um objeto Date com a data/hora atual
		const now = new Date(Date.now());
	
		// Formatar a data no estilo "dd.mm.yyyy"
		const formattedDate = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
	
		// Formatar a hora no estilo "HHhMMm"
		const formattedTime = `${String(now.getHours()).padStart(2, '0')}h${String(now.getMinutes()).padStart(2, '0')}m`;
	
		handleInputChange('date', formattedDate);
		handleInputChange('hour', formattedTime);

	};

	useEffect(() => {
		if(!edit) {
			formatCurrentDateAndTime();
		}
	},[])

	return (
		<S.Conteiner>
			<MealHeader statusMeal title={edit ? 'Editar refeição' : 'Nova refeição'} />
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
						<S.ButtonChoiseNot
							onPress={() => {
								setDietOk('2');
								handleInputChange('isDiet', false);
							}}
							active={dietOk === '2' ? true : false}
						>
							<S.ButtonChoiseText>Não</S.ButtonChoiseText>
						</S.ButtonChoiseNot>
					</S.InputContent>
				</S.Row>
				<Button
					type="PRIMARY"
					title={edit ? "Atualizar refeição" : "Cadastrar refeição"}
					onPress={handleButtonOnFinish}
				/>
			</S.Content>
		</S.Conteiner>
	);
}
