import React, { useEffect } from 'react';
import Cocktail from "../../components/Cocktail";
import FavouriteButton from "../../components/FavouriteButton";
import RecipeButton from '../../components/RecipeButton';
import { addCocktail } from '../favouriteCocktails/favouriteCocktailsSlice.js';
import { loadData } from './allCocktailsSlice';
import heart from '../../images/heart.svg';
import search from '../../images/search.svg';

export const AllCocktails = ({ allCocktails, dispatch, query }) => {
  const onRender = () => {
    dispatch(loadData(query));
  }
  useEffect(onRender, [query]);

  const onAddCocktailHandler = (cocktail) => {
    dispatch(addCocktail(cocktail));
  };

  return (
    <div className="cocktail-container">
      {allCocktails.map((cocktail) => (
        <Cocktail cocktail={cocktail} key={cocktail.idDrink}>
          <div className="button-container">
            <FavouriteButton
              onClickHandler={() => onAddCocktailHandler(cocktail)}
              icon={heart}
            >
              Add to Favourites
            </FavouriteButton>
            <RecipeButton
              onClickHandler={() => {

              }}
              icon={search}
            >
              Ingredients &#38; Recipe
            </RecipeButton>
          </div>
        </Cocktail>
      ))}
    </div>
  );
};


