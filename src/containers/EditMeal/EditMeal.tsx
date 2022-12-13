import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {ApiMeal} from "../../types";
import NewMealForm from "../../components/NewMealForm/NewMealForm";

const EditMeal = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState<ApiMeal | null>(null);
  const [updating, setUpdating] = useState(false);

  const getOneMeal = useCallback(async () => {
    const mealResponse = await axiosApi.get<ApiMeal>('/meals/' + id + '.json');
    setMeal(mealResponse.data);
  }, [id]);

  useEffect(() => {
    void getOneMeal();
  }, [getOneMeal]);

  const updateMeal = async (meal: ApiMeal) => {
    try {
      setUpdating(true);
      await axiosApi.put('/meals/' + id + '.json', meal);
      navigate('/');
    } finally {
      setUpdating(false);
    }
  };

  const existingMeal = meal && {
    ...meal,
    calories: meal.calories.toString(),
  }
  return (
    <div>
      {existingMeal && (<NewMealForm
        onSubmit={updateMeal}
        existingMeal={existingMeal}
        isLoading={updating}
        isEdit
      />
      )}
    </div>
  );
};

export default EditMeal;