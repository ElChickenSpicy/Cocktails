import React from "react";

export default function FavouriteButton({ children, onClickHandler, icon }) {
  return (
    <button className="button" onClick={onClickHandler}>
      <img className="icon" alt="Heart Icon" src={icon} />
      {children}
    </button>
  );
}