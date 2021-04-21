# Project Name
> Redux Cocktails!

## Table of contents
* [General info](#general-info)
* [Screenshot](#screenshot)
* [Libraries](#libraries)
* [Code Exmaple](#code-example)
* [Features](#features)
* [Status](#status)

## General info
Quick project to test and develop my understanding of Redux. Project adapted from a similar Redux learning project I completed as part of the Full-stack developer course on Codecademy.com.
<br><br>
Live version hosted on Netlify @ https://redux-cocktails.netlify.app/


## Screenshot
![Desktop View](https://github.com/ElChickenSpicy/Cocktails/blob/master/src/images/screenshot.PNG)

## Libraries
* React
* Redux
* redux-thunk

## Code Example
Store/Root Reducer code
```javascript 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allCocktailsReducer } from '../features/allCocktails/allCocktailsSlice.js';
import { favouriteCocktailsReducer } from '../features/favouriteCocktails/favouriteCocktailsSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';
import { ingredientsReducer } from '../features/ingredients/ingredientsSlice.js';

export const store = createStore(combineReducers({
  allCocktails: allCocktailsReducer,
  favouriteCocktails: favouriteCocktailsReducer,
  searchTerm: searchTermReducer,
  ingredients: ingredientsReducer
}), applyMiddleware(thunk));
```

## Features
List of completed features
* Add cocktail to favourites
* Remove cocktail from favourites
* Search cocktails using a query string
* Dynamic cocktail data via API (https://www.thecocktaildb.com/)
* Display ingredients & instructions

## Status
Project is: _Completed_