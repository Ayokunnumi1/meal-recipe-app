import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mealsDetail: {},
  loading: false,
  error: '',
};

const MealsDetailsSlice = createSlice({
  name: 'mealsDetail',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default MealsDetailsSlice.reducer;
