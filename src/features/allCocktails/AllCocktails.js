import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cocktail from "../../components/Cocktail";
import FavouriteButton from "../../components/FavouriteButton";
import RecipeButton from '../../components/RecipeButton';
import { addCocktail } from '../favouriteCocktails/favouriteCocktailsSlice.js';
import { loadData, selectAllCocktails } from './allCocktailsSlice';
import { showIngredients } from '../ingredients/ingredientsSlice';
import { selectSearchTerm } from '../searchTerm/searchTermSlice';
import heart from '../../images/heart.svg';
import search from '../../images/search.svg';

export const AllCocktails = () => {
  const allCocktails = useSelector(selectAllCocktails);
  const query = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onRender = () => {
    dispatch(loadData(query));
  }
  useEffect(onRender, [query]);

  const onAddCocktailHandler = (cocktail) => {
    dispatch(addCocktail(cocktail));
  };

  const onIngredientsHandler = (cocktail) => {
    dispatch(showIngredients(cocktail));
  };

  return (
    <div className="cocktail-container">

      {allCocktails !== null ? 
      allCocktails.map((cocktail) => (
        <Cocktail cocktail={cocktail} key={cocktail.idDrink}>
          <div className="button-container">
            <FavouriteButton
              onClickHandler={() => onAddCocktailHandler(cocktail)}
              icon={heart}
            >
              Add to Favourites
            </FavouriteButton>
            <RecipeButton
              onClickHandler={() => onIngredientsHandler(cocktail)}
              icon={search}
            >
              Ingredients &#38; Recipe
            </RecipeButton>
          </div>
        </Cocktail>
      )) : ''}

    </div>
  );
}; 


