import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { IForm } from 'src/@types/form';

export async function mealGetAll() {
	try {
		const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
		const meals: IForm[] = storage ? JSON.parse(storage) : [];
		return meals;
	} catch (error) {
		throw error;
	}
}
