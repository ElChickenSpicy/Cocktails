import React from 'react';
import { AllCocktails } from '../features/allCocktails/AllCocktails.js';
import { FavouriteCocktails } from '../features/favouriteCocktails/FavouriteCocktails.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

export function App({ state, dispatch }) {
  return (
    <main>
      <section>
        <SearchTerm
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>Favourite Cocktails</h2>
        <FavouriteCocktails
          favouriteCocktails={state.favouriteCocktails}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Cocktails</h2>
        <AllCocktails
          allCocktails={state.allCocktails}
          dispatch={dispatch}
          query={state.searchTerm}
        />
      </section>
    </main> 
  );
}