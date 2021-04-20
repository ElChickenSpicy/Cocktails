import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allCocktailsReducer } from '../features/allCocktails/allCocktailsSlice.js';
import { favouriteCocktailsReducer } from '../features/favouriteCocktails/favouriteCocktailsSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';

export const store = createStore(combineReducers({
  allCocktails: allCocktailsReducer,
  favouriteCocktails: favouriteCocktailsReducer,
  searchTerm: searchTermReducer
}), applyMiddleware(thunk));