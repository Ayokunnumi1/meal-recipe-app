import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import pracImg from './pracImg.png';

export const getDataFromServer = createAsyncThunk('meals/getDataFromServer', async () => {
  const apiKey = '9e1e79b93c7c466688288fad79f2a63e';
  const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  const query = 'chicken soup';
  try {
    const response = await axios.get(`${baseUrl}?apiKey=${apiKey}&query=${query}&minCalories=50&maxCalories=100`);
    const { data } = response;
    return data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  mealsData: [],
  filteredMeals: [],
  loading: false,
  error: '',
};

const mealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    filterMeals: (state, action) => {
      state.filteredMeals = state.mealsData.filter((meals) => meals.title.toLowerCase()
        .startsWith(action.payload));
    },
    forStyling: (state) => {
      state.mealsData = {
        id: '1',
        // image: pracImg,
        title: 'chicken soup',
        amount: 256,
        unit: 'kcal',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromServer.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataFromServer.fulfilled, (state, action) => {
        state.loading = false;
        state.mealsData = action.payload.results.map((meal) => (
          {
            id: meal.id,
            image: meal.image,
            title: meal.title,
            amount: meal.nutrition.nutrients[0].amount,
            unit: meal.nutrition.nutrients[0].unit,
          }
        ));
      })
      .addCase(getDataFromServer.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default mealSlice.reducer;
export const { filterMeals, forStyling } = mealSlice.actions;
