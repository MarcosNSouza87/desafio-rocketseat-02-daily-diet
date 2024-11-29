import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { mealGetAll } from './mealGetAll';
import { IForm } from 'src/@types/form';
import { mealCreate } from './mealCreate';

export async function mealUpdate(updateMeal: IForm) {
	try {
		const storage = await mealGetAll();
		const filtered = storage.filter(meal => meal.id !== updateMeal.id);
		const updateMealsFiltered = JSON.stringify(filtered);
		await AsyncStorage.setItem(`${MEAL_COLLECTION}`, updateMealsFiltered);
		const storageAddUpdate = JSON.stringify([...filtered, updateMeal]);
		await AsyncStorage.setItem(MEAL_COLLECTION,storageAddUpdate);
	} catch (error) {
    throw error;
  }
}
