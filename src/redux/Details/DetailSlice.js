import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// https://api.spoonacular.com/recipes/716429/information?apiKey=8c25d703bc9444b183e1cf68926709db&includeNutrition=true
export const getMealsDetails = createAsyncThunk('mealsDetail/getMealsDetails', async (id) => {
  const baseUrl = `https://api.spoonacular.com/recipes/${id}/information`;
  const apiKey = '8c25d703bc9444b183e1cf68926709db';
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
