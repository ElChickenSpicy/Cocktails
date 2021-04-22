import React from 'react';
import { useSelector } from 'react-redux';
import { Ingredients } from '../features/ingredients/Ingredients.js';
import { AllCocktails } from '../features/allCocktails/AllCocktails.js';
import { FavouriteCocktails } from '../features/favouriteCocktails/FavouriteCocktails.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { selectSearchTerm } from '../features/searchTerm/searchTermSlice.js';

export function App() {
  const query = useSelector(selectSearchTerm);
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <Ingredients />
      </section>
      <section>
        <h2>Favourite Cocktails</h2>
        <FavouriteCocktails />
      </section>
      <hr />
      <section>
        <h2>Cocktails: {query}</h2>
        <AllCocktails />
      </section>
    </main>
  );
}