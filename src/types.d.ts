export interface MealType {
  id: string;
  meal_time: string;
  description: string;
  calories: number;
}

export type ApiMeal = Omit<MealType, 'id'>;

export interface MealFormType {
  meal_time: string;
  description: string;
  calories: string;
}

export interface MealApi {
  [id: string]: MealType;
}