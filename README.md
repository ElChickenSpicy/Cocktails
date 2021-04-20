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

## Code Example
Store/Root Reducer code
```javascript 
import { createStore, combineReducers } from 'redux';
import { allCocktailsReducer } from '../features/allCocktails/allCocktailsSlice.js';
import { favouriteCocktailsReducer } from '../features/favouriteCocktails/favouriteCocktailsSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';

export const store = createStore(combineReducers({
  allCocktails: allCocktailsReducer,
  favouriteCocktails: favouriteCocktailsReducer,
  searchTerm: searchTermReducer
}));
```

## Features
List of features ready and TODOs for future development
* Add cocktail to favourites
* Remove cocktail from favourites
* Search cocktails using a query string

To-do list:
* Dynamic cocktail data via API (https://www.thecocktaildb.com/)
* Drill down into recipes, etc.

## Status
Project is: _in progress_