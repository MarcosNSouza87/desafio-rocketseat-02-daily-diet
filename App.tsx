import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import {
	Nunito_400Regular,
	Nunito_700Bold,
	useFonts,
} from '@expo-google-fonts/nunito';

export default function App() {
	const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle="dark-content" translucent />
		</ThemeProvider>
	);
}
