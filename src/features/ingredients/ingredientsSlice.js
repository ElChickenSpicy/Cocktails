import { createSlice } from '@reduxjs/toolkit';

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: [],
  reducers: {
    showIngredients: (state, action) => (state = action.payload)
  }
});

export const { showIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;