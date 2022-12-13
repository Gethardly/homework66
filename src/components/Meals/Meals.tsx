import React from 'react';
import {MealType} from "../../types";
import Meal from "./Meal";

interface Props {
  meals: MealType[];
  deleteMeal: (id: string) => void;
}

const Meals: React.FC<Props> = ({meals,deleteMeal}) => {
  return (
    <div>
      {meals.map(meal => (
        <Meal key={meal.id} meal={meal} onDelete={() =>deleteMeal(meal.id)}/>
      ))}
    </div>
  );
};

export default Meals;