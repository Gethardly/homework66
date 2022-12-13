import React, {useState} from 'react';
import {MealType} from "../../types";
import Spinner from "../../components/Spinner/Spinner";
import Meals from "../../components/Meals/Meals";
import {Link} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  meals: MealType[];
  mealIsLoading: boolean;
  getMeals: () => void;
}

const Home: React.FC<Props> = ({meals, mealIsLoading,getMeals}) => {
  const [loading, setLoading] = useState(false);

  const total = meals.reduce((sum,meal) => {
    return sum + meal.calories;
  }, 0);

  const removeMeal = async (id: string) => {
    if (window.confirm('Do you want to delete meal?')) {
      try {
        setLoading(true);
        await axiosApi.delete('/meals/' + id + '.json');
        await getMeals();
      } finally {
        setLoading(false)
      }

    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between m-3">
        <h5>Total calories: {total}</h5>
        <Link to="/new-meal" className="btn btn-primary">Add new meal</Link>
      </div>
      {mealIsLoading ? <Spinner/> :
        <Meals meals={meals} deleteMeal={removeMeal} isLoading={loading}/>
      }
    </div>
  );
};

export default Home;