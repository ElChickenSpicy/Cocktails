const initialState = [];
export const favouriteCocktailsReducer = (favouriteCocktails = initialState, action) => {
  switch (action.type) {
    case 'favouriteCocktails/addCocktail':
      return [...favouriteCocktails, action.payload]
    case 'favouriteCocktails/removeCocktail':
      return favouriteCocktails.filter(cocktail => cocktail.id !== action.payload.id)
    default:
      return favouriteCocktails;
  }
}

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