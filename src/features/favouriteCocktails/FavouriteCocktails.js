import React from 'react';
import FavouriteButton from "../../components/FavouriteButton";
import RecipeButton from '../../components/RecipeButton';
import Cocktail from "../../components/Cocktail";
import { removeCocktail } from './favouriteCocktailsSlice.js';
import brokenHeart from '../../images/broken.svg';
import search from '../../images/search.svg';

export const FavouriteCocktails = ({ favouriteCocktails, dispatch }) => {
  const onRemoveCocktailHandler = (cocktail) => {
    dispatch(removeCocktail(cocktail));
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
            onClickHandler={() => {
              alert(cocktail.strInstructions);
            }}
            icon={search}
          >
            Ingredients &#38; Recipe
            </RecipeButton>
        </div>
      </Cocktail>
    )
  }

};