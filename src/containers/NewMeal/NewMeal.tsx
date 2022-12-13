import React, {useState} from 'react';
import NewMealForm from "../../components/NewMealForm/NewMealForm";
import {ApiMeal} from "../../types";
import axiosApi from "../../axiosApi";

const NewMeal = () => {
  const [loading, setLoading] = useState(false);

  const createMeal = async (meal: ApiMeal) => {
    try {
      setLoading(true);
      await axiosApi.post('/meals.json', meal);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <NewMealForm onSubmit={createMeal} isLoading={loading}/>
    </div>
  );
};

export default NewMeal;