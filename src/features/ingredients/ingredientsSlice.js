const initialState = [];
export const ingredientsReducer = (ingredients = initialState, action) => {
  switch (action.type) {
    case 'ingredients/showIngredients':
      return action.payload;
    default:
      return ingredients;
  }
}

export function showIngredients(cocktail) {
  return {
    type: 'ingredients/showIngredients',
    payload: cocktail
  }
}