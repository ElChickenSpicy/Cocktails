import React from 'react';

export const Ingredients = ({ ingredients }) => {

    let list = [];
    const keys = Object.keys(ingredients).filter(key => key.startsWith('strIngredient'));
    keys.forEach(key => {
        if (ingredients[key] !== null) {
            list.push(ingredients[key]);
        }
    });
    console.log(ingredients);
    return (
        ingredients.length !== 0 ?
        <div className="ingredients">
            <h2>Make It Yourself: <span className="regular">The {ingredients.strDrink}</span></h2>
            <p><span className="bold">Ingredients:</span> {list.join(', ')}</p>
            <p><span className="bold">Instructions:</span> {ingredients.strInstructions}</p>
            <hr />
        </div>
        :
        ''
    );
};