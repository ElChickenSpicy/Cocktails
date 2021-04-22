import { createSlice } from '@reduxjs/toolkit';

export const favouriteCocktailsSlice = createSlice({
  name: "favouriteCocktails",
  initialState: [],
  reducers: {
    addCocktail: (state, action) => {
      state.push(action.payload);
    },
    removeCocktail: (state, action) => {
      return state.filter(cocktail => cocktail.idDrink !== action.payload.idDrink);
    }
  }
});

export const selectfavouriteCocktails = state => state.favouriteCocktails;
export const { addCocktail, removeCocktail } = favouriteCocktailsSlice.actions;
export default favouriteCocktailsSlice.reducer;