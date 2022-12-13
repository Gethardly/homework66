import React from 'react';
import {MealType} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  meal: MealType;
  onDelete: React.MouseEventHandler;
}

const Meal: React.FC<Props> = ({meal, onDelete}) => {
  return (
    <div className="card p-2 m-4 d-flex flex-row align-items-center">
      <div className="col-10">
        <div className="card-title">{meal.meal_time}</div>
        <div className="card-body">
          <p>{meal.description}</p>
        </div>
      </div>
      <div className="col-2 text-end">
        <Link to={`/edit-meal/${meal.id}`} className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </Link>
        <button className="ms-2 btn btn-danger" onClick={onDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
               viewBox="0 0 16 16">
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
        <p className="mt-3">Calories: {meal.calories}</p>
      </div>
    </div>
  );
};

export default Meal;