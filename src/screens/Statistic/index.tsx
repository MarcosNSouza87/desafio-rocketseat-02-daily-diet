import React from 'react';
import * as S from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
interface IStatistic {}

type RouteParams = {
	statusDiet: number;
};
export function Statistic({}: IStatistic) {
	const route = useRoute();
	const { statusDiet } = route.params as RouteParams;
  const { navigate } = useNavigation()
	const status = statusDiet > 70 ? true : false;
	return (
		<S.Container>
			<S.Header status={status}>
				<S.Title>{`${statusDiet.toFixed(2).replace('.', ',')}%`}</S.Title>
				<S.SubTitle>{`das refeições ${
					statusDiet ? 'dentro' : 'fora'
				} da dieta`}</S.SubTitle>
				<S.ButtonIcon onPress={() => navigate('home')}>
					<S.Icon status={status} />
				</S.ButtonIcon>
			</S.Header>
			<S.Content>
				<S.ContentTitle>Estatísticas gerais</S.ContentTitle>
				<S.ContentCard type="normal">
					<S.CardTitle>22</S.CardTitle>
					<S.CardSubtitle>melhor sequencia de pratos dentro da dieta</S.CardSubtitle>
				</S.ContentCard>
				<S.ContentCard type="normal">
					<S.CardTitle>122</S.CardTitle>
					<S.CardSubtitle>refeições registradas</S.CardSubtitle>
				</S.ContentCard>
				<S.Row>
					<S.ContentCardRow type="green">
						<S.CardTitle>99</S.CardTitle>
						<S.CardSubtitle>
            refeições dentro da dieta
						</S.CardSubtitle>
					</S.ContentCardRow>
					<S.ContentCardRow type="red">
						<S.CardTitle>10</S.CardTitle>
						<S.CardSubtitle>
            refeições fora da dieta
						</S.CardSubtitle>
					</S.ContentCardRow>
				</S.Row>
			</S.Content>
		</S.Container>
	);
}
