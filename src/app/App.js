import React from 'react';
import { AllCocktails } from '../features/allCocktails/AllCocktails.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { FavouriteCocktails } from '../features/favouriteCocktails/FavouriteCocktails.js';

export function App({ state, dispatch }) {
  const visibleAllCocktails = getFilteredCocktails(state.allCocktails, state.searchTerm);
  const visibleFavouriteCocktails = getFilteredCocktails(state.favouriteCocktails, state.searchTerm);

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
          favouriteCocktails={visibleFavouriteCocktails}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Cocktails</h2>
        <AllCocktails
          allCocktails={visibleAllCocktails}
          dispatch={dispatch}
        />
      </section>
    </main>
  )
}

function getFilteredCocktails(cocktails, searchTerm) {
  return cocktails.filter(drink => drink.name.toLowerCase().includes(searchTerm.toLowerCase()));
}