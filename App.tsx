import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import {
	Nunito_400Regular,
	Nunito_700Bold,
	useFonts,
} from '@expo-google-fonts/nunito';
import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';

export default function App() {
	const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle="default" />
      {fontsLoaded ? <Routes /> : <Loading />}
		</ThemeProvider>
	);
}
