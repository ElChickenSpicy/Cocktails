import React from "react";

export default function RecipeButton({ children, onClickHandler, icon }) {
  return (
    <button className="button" onClick={onClickHandler}>
      <img className="icon" alt="Search Icon" src={icon} />
      {children}
    </button>
  );
}