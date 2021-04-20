import React from "react";

export default function Cocktail({ cocktail, children }) {
  return (
    <div key={cocktail.id} className="cocktail" tabIndex={0}>
      <span className="cocktail-container">
        <h3 className="cocktail-name">{cocktail.name}</h3>
        <div className="image-container">
          <img src={cocktail.img} alt={cocktail.name} className="cocktail-image" />
        </div>
      </span>
      {children}
    </div>
  );
}
