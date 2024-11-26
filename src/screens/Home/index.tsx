import React, { useState } from 'react';
import { SectionList } from 'react-native';
import * as S from './styles';
import LogoIcon from '@assets/logo';
import { CardDiet } from '@components/CardDiet';
import { Button } from '@components/Button';
import { CardMeal } from '@components/CardMeal';
import { useNavigation } from '@react-navigation/native';

interface IHome {}

export function Home({}: IHome) {
	const [statusDiet, setStatusDiet] = useState<number>(90.67);
	const [data, setData] = useState<any>([
		{
			title: '12.12.2024',
			data: [
				{ hour: '12:12', title: 'X-tudo', status: false },
				{ hour: '12:11', title: 'X-tudo', status: true },
				{ hour: '12:10', title: 'X-tudo', status: false },
			],
		},
		{
			title: '12.12.2024',
			data: [
				{ hour: '12:12', title: 'X-tudo', status: false },
				{ hour: '12:11', title: 'X-tudo', status: true },
				{ hour: '12:10', title: 'X-tudo', status: false },
			],
		},
		{
			title: '10.12.2024',
			data: [{ hour: '12:12', title: 'X-tudo', status: true }],
		},
		{
			title: '13.12.2024',
			data: [{ hour: '12:12', title: 'X-tudo', status: false }],
		},
	]);
	const { navigate } = useNavigation()

	function ShowItem(item: any) {
		navigate('mealShow', {
			title: 'Sanduíche',
			description: 'Sanduíche de pão integral com atum e salada de alface e tomate',
			date: '10/10/2024',
			hour: '12:12',
			statusMeal: true,
		});
	}

	return (
		<S.Container>
			<S.Header>
				<LogoIcon />
				<S.Avatar />
			</S.Header>
			<CardDiet
				title={statusDiet}
				subtitle="das refeicoes dentro da dieta"
				onPress={() => navigate('statistic', { statusDiet })}
			/>
			<S.Text>Refeições</S.Text>
			<Button title="Nova refeição" type="PRIMARY" icon="Plus" onPress={() => navigate('mealCreate')}/>
			<SectionList
				showsVerticalScrollIndicator={false}
				sections={data}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item }) => (
					<CardMeal
						hour={item.hour}
						title={item.title}
						status={item.status}
						onPress={() => ShowItem(item)}
					/>
				)}
				renderSectionHeader={({ section: { title } }) => (
					<S.TitleList>{title}</S.TitleList>
				)}
			/>
		</S.Container>
	);
}
