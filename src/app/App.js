import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchTerm } from '../features/searchTerm/searchTermSlice.js';
import { Ingredients } from '../features/ingredients/Ingredients.js';
import { AllCocktails } from '../features/allCocktails/AllCocktails.js';
import { FavouriteCocktails } from '../features/favouriteCocktails/FavouriteCocktails.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

export function App() {
  const { isError } = useSelector(state => state.allCocktails);
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
      {isError ? (
        <div id="error-wrapper">
          <h1>Oh no! There was an error fetching the cocktails from the API :( Please refresh the page!</h1>
        </div>
      ) : (
        <section>
          <h2>Cocktails: {query}</h2>
          <AllCocktails />
        </section>
      )}

    </main>
  );
}