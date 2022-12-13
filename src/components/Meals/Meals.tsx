import React from 'react';
import {MealType} from "../../types";
import Meal from "./Meal";

interface Props {
  meals: MealType[];
  deleteMeal: (id: string) => void;
  isLoading: boolean
}

const Meals: React.FC<Props> = ({meals,deleteMeal, isLoading}) => {
  return (
    <div>
      {meals.map(meal => (
        <Meal key={meal.id} meal={meal} onDelete={() =>deleteMeal(meal.id)} isLoading={isLoading}/>
      ))}
    </div>
  );
};

export default Meals;