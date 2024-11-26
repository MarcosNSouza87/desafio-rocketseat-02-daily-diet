export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			home: undefined;
			statistic: {
				statusDiet: number;
			};
			mealShow: {
				statusMeal: boolean;
				title: string;
				description: string;
				hour: string;
				date: string;
			};
      mealCreate: undefined;
      mealEdit: undefined;
			feedback: {
				status: boolean;
			}
		}
	}
}
