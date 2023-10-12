import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// https://api.spoonacular.com/recipes/716429/information?apiKey=23baefd84da542e9bdc6f366e3c45ee0&includeNutrition=true
export const getMealsDetails = createAsyncThunk('mealsDetail/getMealsDetails', async (id) => {
  const baseUrl = `https://api.spoonacular.com/recipes/${id}/information`;
  const apiKey = '50d5f08272bd47e1961ff4fa410416ac';
  try {
    const response = await axios.get(`${baseUrl}?apiKey=${apiKey}&includeNutrition=true`);
    const data = await response.data;
    return data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  mealsDetail: {},
  loading: false,
  error: '',
};

const MealsDetailsSlice = createSlice({
  name: 'mealsDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMealsDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMealsDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.mealsDetail = action.payload;
        const details = action.payload;
        state.mealsDetail = {
          id: details.id,
          images: details.image,
          title: details.title,
          nutrient: details.nutrition.nutrients,
        };
      })
      .addCase(getMealsDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default MealsDetailsSlice.reducer;
