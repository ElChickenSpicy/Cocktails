import React from 'react';
import FavouriteButton from "../../components/FavouriteButton";
import Cocktail from "../../components/Cocktail";
import { removeCocktail } from './favouriteCocktailsSlice.js';
import brokenHeart from '../../images/broken.svg';

export const FavouriteCocktails = ({ favouriteCocktails, dispatch }) =>{  
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
      <Cocktail cocktail={cocktail} key={cocktail.id}>
        <FavouriteButton
          onClickHandler={() => onRemoveCocktailHandler(cocktail)}
          icon={brokenHeart}
        >
          Remove Favourite
        </FavouriteButton>
      </Cocktail>
    )
  }
  
};