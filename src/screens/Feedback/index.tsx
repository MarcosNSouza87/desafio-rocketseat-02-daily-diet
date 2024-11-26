import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Image } from 'react-native';

import badStatus from '@assets/bad_status.png';
import goodStatus from '@assets/good_status.png';

import * as S from './styles';
import { Text } from '@components/BaseText';
import { Button } from '@components/Button';

interface RouteParams {
	status: boolean;
}

export function Feedback() {
	const theme = useTheme();

	const route = useRoute();
	const { status } = route.params as RouteParams;

	const { navigate } = useNavigation();

	return (
		<S.Container>
			<S.Content>
				<Text
					color={status ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK}
					size={theme.FONT_SIZE['XL']}
					weight={theme.FONT_FAMILY.BOLD}
          style={{marginBottom: 16}}
				>
					{status ? 'Continue assim!' : 'Que pena!'}
				</Text>

				{status ? (
					<Text size={theme.FONT_SIZE.L} style={{textAlign:'center'}}>
						Você continua{' '}
						<Text weight={theme.FONT_FAMILY.BOLD}>dentro da dieta.</Text> Muito bem!
					</Text>
				) : (
					<Text size={theme.FONT_SIZE.L} style={{textAlign:'center'}}>
						Você <Text weight={theme.FONT_FAMILY.BOLD}>saiu da dieta</Text> dessa
						vez, mas continue se esforçando e não desista!
					</Text>
				)}

				<Image source={status ? goodStatus : badStatus} style={{ marginVertical: 40 }} />

				<Button
					onPress={() => {
						navigate('home');
					}}
					title="Ir para a página inicial"
					style={{ paddingHorizontal: 25 }}
				/>
			</S.Content>
		</S.Container>
	);
}
