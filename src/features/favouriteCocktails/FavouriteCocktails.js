import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavouriteButton from "../../components/FavouriteButton.js";
import RecipeButton from '../../components/RecipeButton.js';
import Cocktail from "../../components/Cocktail.js";
import { removeCocktail, selectfavouriteCocktails } from './favouriteCocktailsSlice.js';
import { showIngredients } from '../ingredients/ingredientsSlice.js';
import brokenHeart from '../../images/broken.svg';
import search from '../../images/search.svg';

export const FavouriteCocktails = () => {
  const favouriteCocktails = useSelector(selectfavouriteCocktails);
  const dispatch = useDispatch();

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