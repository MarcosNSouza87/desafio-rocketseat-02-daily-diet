import { IForm } from "./form";

export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			home: undefined;
			statistic: {
				statusDiet: number;
			};
			mealShow: {edit: IForm};
      mealCreate: undefined;
      mealEdit: {edit:IForm};
			feedback: {
				status: boolean;
			}
		}
	}
}
