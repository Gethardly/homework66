import React, {useState} from 'react';
import NewMealForm from "../../components/NewMealForm/NewMealForm";
import {ApiMeal} from "../../types";
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";

const NewMeal = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createMeal = async (meal: ApiMeal) => {
    try {
      setLoading(true);
      await axiosApi.post('/meals.json', meal);
      navigate('/');
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