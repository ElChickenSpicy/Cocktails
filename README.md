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
* @reduxjs/toolkit

## Code Example
createAsyncThunk & partial createSlice example
```javascript 
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
    cocktails: []
  },
  reducers: {},
  extraReducers: {
    [loadData.fulfilled]: (state, action) => {
      state.cocktails = action.payload;
    }
  },
  //...
});
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