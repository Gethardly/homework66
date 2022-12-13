import React, {useState} from 'react';
import {ApiMeal, MealFormType} from '../../types';
import {MEALTIME} from '../../constants';
import ButtonSpinner from "../Spinners/BtnSpinner";

type ChangedElemets = HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement;

interface Props {
  onSubmit: (meal: ApiMeal) => void;
  existingMeal?: MealFormType;
  isLoading: boolean;
  isEdit?: boolean;
}

const initialState: MealFormType = {
  meal_time: '',
  description: '',
  calories: '',
}

const NewMealForm: React.FC<Props> = ({onSubmit,
                                        isLoading,
                                      existingMeal = initialState,
                                      isEdit = false,}) => {
  const [meal, setQuote] = useState<MealFormType>(existingMeal);

  const onFieldChange = (event: React.ChangeEvent<ChangedElemets>) => {
    const {name, value} = event.target;
    setQuote(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      ...meal,
      calories: parseInt(meal.calories)});
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? 'Edit meal' : 'Add new meal'}</h4>
      <div className="form-group mb-2">
        <label htmlFor="meal_time">Meal time</label>
        <select
          name="meal_time" id="meal_time"
          className="form-select"
          required
          value={meal.meal_time}
          onChange={onFieldChange}
        >
          <option value="" disabled>Please select a meal time</option>
          {MEALTIME.map(meal => (
            <option key={meal.id} value={meal.title}>
              {meal.title}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="description">Description</label>
        <textarea
          required
          id="description" name="description"
          className="form-control"
          value={meal.description}
          onChange={onFieldChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="text">Calories</label>
        <input
          required
          id="calories" name="calories"
          type="number"
          className="form-control"
          value={meal.calories}
          onChange={onFieldChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {isLoading && <ButtonSpinner/>}
        {isEdit ? 'Update' : 'Save'}
      </button>
    </form>
  );
};

export default NewMealForm;