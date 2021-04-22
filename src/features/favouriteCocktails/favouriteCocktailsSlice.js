export function addCocktail(cocktail) {
  return {
    type: 'favouriteCocktails/addCocktail',
    payload: cocktail
  }
}

export function removeCocktail(cocktail) {
  return {
    type: 'favouriteCocktails/removeCocktail',
    payload: cocktail
  }
}

const initialState = [];
export const favouriteCocktailsReducer = (favouriteCocktails = initialState, action) => {
  switch (action.type) {
    case 'favouriteCocktails/addCocktail':
      if (favouriteCocktails.filter(cocktail => cocktail.idDrink === action.payload.idDrink).length > 0) return favouriteCocktails;
      return [...favouriteCocktails, action.payload]
    case 'favouriteCocktails/removeCocktail':
      return favouriteCocktails.filter(cocktail => cocktail.idDrink !== action.payload.idDrink)
    default:
      return favouriteCocktails;
  }
}

export const selectfavouriteCocktails = state => state.favouriteCocktails;