import React, { useEffect } from 'react';
import Cocktail from "../../components/Cocktail";
import FavouriteButton from "../../components/FavouriteButton";
import { addCocktail } from '../favouriteCocktails/favouriteCocktailsSlice.js';
import { loadData } from './allCocktailsSlice';
import heart from '../../images/heart.svg';

export const AllCocktails = ({ allCocktails, dispatch }) => {
  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])
  
  const onAddCocktailHandler = (cocktail) => {
    dispatch(addCocktail(cocktail));
  };

  return (
    <div className="cocktail-container">
      {allCocktails.map((cocktail) => (
        <Cocktail cocktail={cocktail} key={cocktail.id}>
          <FavouriteButton
            onClickHandler={() => onAddCocktailHandler(cocktail)}
            icon={heart}
          >
            Add to Favourites
          </FavouriteButton>
        </Cocktail>
      ))}
    </div>
  );
};


