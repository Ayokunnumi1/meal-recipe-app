import { configureStore } from '@reduxjs/toolkit';
import mealReducer from './Meals/MealSlice';

const store = configureStore({
  reducer: {
    meals: mealReducer,
  },
});

export default store;
