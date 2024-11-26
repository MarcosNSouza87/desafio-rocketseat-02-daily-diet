import React, { useState } from 'react';
import { SectionList } from 'react-native';
import * as S from './styles';
import LogoIcon from '@assets/logo';
import { CardDiet } from '@components/CardDiet';
import { Button } from '@components/Button';
import { CardMeal } from '@components/CardMeal';
import { useNavigation } from '@react-navigation/native';
import { IForm } from 'src/@types/form';

interface IHome {}

type IData = {
	title: string,
	data: IForm[]
} 

export function Home({}: IHome) {
	const [statusDiet, setStatusDiet] = useState<number>(90.67);
	const [data, setData] = useState<IData[]>([
		{
      title: '12.12.2024',
      data: [
        {
					id: "3",
          hour: '12:12',
          name: 'X-tudo',
          description: 'Hamburguer com batata frita e refrigerante',
          date: '12.12.2024',
          isDiet: false,
        },
        {
					id: "4",
          hour: '19:00',
          name: 'Salada de Frango',
          description: 'Salada com peito de frango grelhado e molho light',
          date: '12.12.2024',
          isDiet: true,
        },
				
      ],
    },
		{
			title: '13.12.2024',
			data: [
				{
					id: '1',
					name: 'Omelete',
					description: 'Omelete com espinafre e queijo branco',
					date: '13.12.2024',
					hour: '07:30',
					isDiet: true,
				},
				{
					id: "2",
					name: 'Pizza de Calabresa',
					description: 'Pizza com molho de tomate, queijo e calabresa',
					date: '13.12.2024',
					hour: '13:00',
					isDiet: false,
				},
			],
		},

	]);
	const { navigate } = useNavigation()

	function ShowItem(item: IForm) {
		navigate('mealShow', {
			edit: item
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
			/>
		</S.Container>
	);
}
