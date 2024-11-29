import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { mealGetAll } from './mealGetAll';

export async function mealRemove(id: string) {
	try {
		const storage = await mealGetAll();
		const filtered = storage.filter(meal => meal.id !== id);
		const updateMeals = JSON.stringify(filtered);

		await AsyncStorage.setItem(`${MEAL_COLLECTION}`, updateMeals);
	} catch (error) {
    throw error;
  }
}
