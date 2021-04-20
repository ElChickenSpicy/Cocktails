import cocktailObjects from '../../data.js'

export const loadData = () => {
  return {
    type: 'allCocktails/loadData',
    payload: cocktailObjects
  }
}

const initialState = [];
export const allCocktailsReducer = (allCocktails = initialState, action) => {
  switch (action.type) {
    case 'allCocktails/loadData':
      return action.payload;
    case 'favouriteCocktails/addCocktail':
      return allCocktails.filter(cocktail => cocktail.id !== action.payload.id);
    case 'favouriteCocktails/removeCocktail':
      return [...allCocktails, action.payload]
    default:
      return allCocktails;
  }
}