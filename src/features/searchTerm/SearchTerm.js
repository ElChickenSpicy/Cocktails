import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from './searchTermSlice.js';
import logo from '../../images/logo.webp';
import search from '../../images/search.svg';
import clear from '../../images/clear.svg';

export const SearchTerm = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = ({ target }) => {
    dispatch(setSearchTerm(target.value));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <img id="logo" alt="Redux Cocktails Logo" src={logo} />
      <img id="search-icon" alt="Search Icon" src={search} />
      <input
        id="search"
        type="text"
        autoComplete="off"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Search TheCocktailDB.com..."
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear"
        >
          <img src={clear} alt="Clear Search Icon" />
        </button>
      )}
    </div>
  );
};