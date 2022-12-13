import React, {useCallback, useEffect, useState} from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./containers/Home/Home";
import axiosApi from "./axiosApi";
import {MealApi, MealType} from "./types";
import NewMeal from "./containers/NewMeal/NewMeal";
import EditMeal from "./containers/EditMeal/EditMeal";

function App() {
  const location = useLocation();
  const [meals, setMeals] = useState<MealType[]>([]);
  const [loading, setLoading] = useState(false);

  const getMeals = useCallback(async () => {
    try {
      setLoading(true);
      const mealsResponse = await axiosApi.get<MealApi | null>('meals.json');
      const meals = mealsResponse.data;

      let newMeals: MealType[] = [];

      if (meals) {
        newMeals = Object.keys(meals).map(id => {
          const meal = meals[id];
          return {
            ...meal,
            id
          }
        });

      }
      setMeals(newMeals);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void getMeals();
  }, [location, getMeals]);

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home meals={meals} mealIsLoading={loading} getMeals={getMeals}/>}/>
          <Route path="/new-meal" element={<NewMeal/>}/>
          <Route path="/edit-meal/:id" element={<EditMeal/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
