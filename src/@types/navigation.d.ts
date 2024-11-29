import { IStatistic } from "@screens/Statistic";
import { IForm } from "./form";

export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			home: undefined;
			statistic: {
				statisticDiet: IStatistic;
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
