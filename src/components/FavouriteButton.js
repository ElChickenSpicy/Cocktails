import React from "react";

export default function FavouriteButton({ children, onClickHandler, icon }) {
  return (
    <button className="favourite-button" onClick={onClickHandler}>
      <img className="heart-icon" alt="Heart Icon" src={icon} />
      {children}
    </button>
  );
}