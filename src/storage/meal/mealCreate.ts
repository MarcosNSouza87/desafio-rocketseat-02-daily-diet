import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { mealGetAll } from './mealGetAll';
import { IForm } from 'src/@types/form';


export async function mealCreate(newMeal: IForm) {
	try {
    const storedMeal = await mealGetAll();

    const storage = JSON.stringify([...storedMeal, newMeal]);
		await AsyncStorage.setItem(MEAL_COLLECTION,storage);
	} catch (error) {
		throw error; // chama a funcao que chamou a funcao e retorna o erro
	}
}
