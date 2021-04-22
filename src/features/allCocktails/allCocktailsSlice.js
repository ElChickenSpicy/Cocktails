import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Thunk/Middleware logic
export const loadData = createAsyncThunk(
  'allCocktails/loadData',
  async query => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    const { drinks } = await response.json();
    return drinks;
  }
);

//Create slice including extra reducer
export const allCocktailsSlice = createSlice({
  name: "allCocktails",
  initialState: {
    cocktails: [],
    isLoading: false,
    isError: false
  },
  reducers: {},
  extraReducers: {
    [loadData.pending]: state => {
      state.isLoading = true;
      state.isError = false;
    },
    [loadData.fulfilled]: (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.cocktails = action.payload;
    },
    [loadData.rejected]: state => {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

export const selectAllCocktails = state => state.allCocktails.cocktails;
export default allCocktailsSlice.reducer;