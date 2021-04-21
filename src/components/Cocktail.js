import React from "react";

export default function Cocktail({ cocktail, children }) {
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
