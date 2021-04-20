import React from "react";

export default function Cocktail({ cocktail, children }) {
  // let ingredients = [];
  // const keys = Object.keys(cocktail).filter(key => key.startsWith('strIngredient'));
  // keys.forEach(key => {
  //   if (cocktail[key] !== null) {
  //     ingredients.push(cocktail[key]);
  //   }
  // });
  return (
    <div key={cocktail.idDrink} id={cocktail.idDrink} className="cocktail" tabIndex={0}>
      <span className="cocktail-container">
        <h3 className="cocktail-name">{cocktail.strDrink}</h3>
        <div className="image-container">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-image" />
        </div>
      </span>
      {children}
    </div>
  );
}
