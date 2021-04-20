export const loadData = () => {
  return async dispatch => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      if (response.ok) {
        const { drinks } = await response.json();
        dispatch({
          type: 'allCocktails/loadData',
          payload: drinks
        })
      }
    } catch(err) {
      alert(err);
    }
  }
}

const initialState = [];
export const allCocktailsReducer = (allCocktails = initialState, action) => {
  switch (action.type) {
    case 'allCocktails/loadData':
      return action.payload;
    case 'favouriteCocktails/addCocktail':
      return allCocktails.filter(cocktail => cocktail.idDrink !== action.payload.idDrink);
    case 'favouriteCocktails/removeCocktail':
      return [...allCocktails, action.payload]
    default:
      return allCocktails;
  }
}