import React, { useEffect, useState } from 'react';
import { SectionList } from 'react-native';
import * as S from './styles';
import LogoIcon from '@assets/logo';
import { CardDiet } from '@components/CardDiet';
import { Button } from '@components/Button';
import { CardMeal } from '@components/CardMeal';
import { useNavigation } from '@react-navigation/native';
import { IForm } from 'src/@types/form';
import { IStatistic } from '@screens/Statistic';
import { IData } from 'src/@types/data';
import { ListEmpty } from '@components/ListEmpty';
import { mealGetAll } from '@storage/meal/mealGetAll';

interface IHome {}

export function Home({}: IHome) {
	const [statisticDiet, setStatisticDiet] = useState<IStatistic>({
		percent: 0,
		mealNotOk: 0,
		mealOk: 0,
		totalMealRegistred: 0,
	});
	const [data, setData] = useState<IData[]>([]);
	const { navigate } = useNavigation();

	function ShowItem(item: IForm) {
		navigate('mealShow', {
			edit: item,
		});
	}

	async function fetchMeals() {
		const datai = await mealGetAll();
		const data = groupItemsByDate(datai);
		setData(data);
	}
	  // Função para agrupar os itens por data
		const groupItemsByDate = (items: IForm[]): IData[] => {
			// Usamos um objeto para acumular os itens por data
			const grouped: { [key: string]: IForm[] } = {};
	
			// Iterando sobre os itens e agrupando por data
			items.forEach(item => {
				// Se ainda não existe um grupo para essa data, cria um array
				if (!grouped[item.date]) {
					grouped[item.date] = [];
				}
				// Adiciona o item ao grupo correspondente à data
				grouped[item.date].push(item);
			});
	
			// Agora convertemos o objeto em um array de objetos no formato esperado
			return Object.keys(grouped).map(date => ({
				title: date,  // Usamos a data como o título
				data: grouped[date],  // Os itens para essa data
			}));
		};

	// Função para calcular a quantidade de itens isDiet true e o total de itens para cada data
	const calculateDietInfo = () => {
		let percent = 0;
		let totalMealRegistred = 0;
		let mealOk = 0;
		let mealNotOk = 0;
		data.map((item) => {
			mealOk += item.data.filter((food) => food.isDiet === true).length;
			totalMealRegistred += item.data.length;
		});
		percent = Number((mealOk * 100) / totalMealRegistred);
		mealNotOk = totalMealRegistred - mealOk;
		setStatisticDiet({
			percent,
			mealNotOk,
			mealOk,
			totalMealRegistred,
		});
	};

	useEffect(() => {
		calculateDietInfo();
	}, [data]);

	useEffect(() => {
		fetchMeals();
	}, []);

	return (
		<S.Container>
			<S.Header>
				<LogoIcon />
				<S.Avatar />
			</S.Header>
			{statisticDiet.totalMealRegistred !== 0 && (
				<CardDiet
					title={statisticDiet.percent}
					subtitle="das refeicoes dentro da dieta"
					onPress={() => navigate('statistic', { statisticDiet })}
				/>
			)}
			<S.Text>Refeições</S.Text>
			<Button
				title="Nova refeição"
				type="PRIMARY"
				icon="Plus"
				onPress={() => navigate('mealCreate')}
			/>
			<SectionList
				showsVerticalScrollIndicator={false}
				sections={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<CardMeal
						hour={item.hour}
						title={item.name}
						status={item.isDiet}
						onPress={() => ShowItem(item)}
					/>
				)}
				renderSectionHeader={({ section: { title } }) => (
					<S.TitleList>{title}</S.TitleList>
				)}
				ListEmptyComponent={<ListEmpty message="Que tal cadastrar a primeira refeição." />}
			/>
		</S.Container>
	);
}
