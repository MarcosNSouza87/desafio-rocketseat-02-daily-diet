import React, { useState } from 'react';
import { SectionList } from 'react-native';
import * as S from './styles';
import LogoIcon from '@assets/logo';
import { CardDiet } from '@components/CardDiet';
import { Button } from '@components/Button';
import { CardMeal } from '@components/CardMeal';

interface IHome {}

export function Home({}: IHome) {
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
			title: '10.12.2024',
			data: [{ hour: '12:12', title: 'X-tudo', status: true }],
		},
		{
			title: '13.12.2024',
			data: [{ hour: '12:12', title: 'X-tudo', status: false }],
		},
	]);

	return (
		<S.Container>
			<S.Header>
				<LogoIcon />
				<S.Avatar />
			</S.Header>
			<CardDiet title="90,02%" subtitle="das refeicoes dentro da dieta" />
			<S.Text>Refeições</S.Text>
			<Button title="Nova refeição" type="PRIMARY" icon="Plus" />
			<SectionList
				sections={data}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item }) => (
					<CardMeal hour={item.hour} title={item.title} status={item.status} />
				)}
				renderSectionHeader={({ section: { title } }) => (
					<S.TitleList>{title}</S.TitleList>
				)}
			/>
		</S.Container>
	);
}
