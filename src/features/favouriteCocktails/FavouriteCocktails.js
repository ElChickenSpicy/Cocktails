import React from 'react';
import FavouriteButton from "../../components/FavouriteButton";
import RecipeButton from '../../components/RecipeButton';
import Cocktail from "../../components/Cocktail";
import { removeCocktail } from './favouriteCocktailsSlice.js';
import { showIngredients } from '../ingredients/ingredientsSlice';
import brokenHeart from '../../images/broken.svg';
import search from '../../images/search.svg';

export const FavouriteCocktails = ({ favouriteCocktails, dispatch }) => {
  const onRemoveCocktailHandler = (cocktail) => {
    dispatch(removeCocktail(cocktail));
  };

  const onIngredientsHandler = (cocktail) => {
    dispatch(showIngredients(cocktail));
  };

  return (
    <div className="cocktail-container">
      {favouriteCocktails.map(createCocktailComponent)}
    </div>
  );

  function createCocktailComponent(cocktail) {
    return (
      <Cocktail cocktail={cocktail} key={cocktail.idDrink}>
        <div className="button-container">
          <FavouriteButton
            onClickHandler={() => onRemoveCocktailHandler(cocktail)}
            icon={brokenHeart}
          >
            Remove Favourite
          </FavouriteButton>
          <RecipeButton
            onClickHandler={() => onIngredientsHandler(cocktail)}
            icon={search}
          >
            Ingredients &#38; Recipe
          </RecipeButton>
        </div>
      </Cocktail>
    )
  }

};