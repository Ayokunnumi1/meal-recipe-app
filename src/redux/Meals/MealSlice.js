import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://api.spoonacular.com/recipes/complexSearch?apiKey=a873ef0c03ae4bbe8b019be1504c0312&query=chicken soup&minCalories=50&maxCalories=100

export const getDataFromServer = createAsyncThunk('meals/getDataFromServer', async () => {
  const apiKey = '23baefd84da542e9bdc6f366e3c45ee0';
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
  loading: false,
  error: '',
};

const mealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
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
        state.error = action.payload;
      });
  },
});

export default mealSlice.reducer;
