import { configureStore } from "@reduxjs/toolkit";
import allCocktailsReducer from '../features/allCocktails/allCocktailsSlice.js';
import favouriteCocktailsReducer from '../features/favouriteCocktails/favouriteCocktailsSlice.js';
import searchTermReducer from '../features/searchTerm/searchTermSlice.js';
import ingredientsReducer from '../features/ingredients/ingredientsSlice.js';

export default configureStore({
  reducer: {
    allCocktails: allCocktailsReducer,
    favouriteCocktails: favouriteCocktailsReducer,
    searchTerm: searchTermReducer,
    ingredients: ingredientsReducer
  },
});