import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

library.add(faSearch);

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => setIsActive(!isActive);
  return (
    <div className="searchbar">
      <form role="search">
        <input
          className={isActive ? 'search-menu-show' : 'search-menu'}
          type="search"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher un titre, un artiste, un réalisateur..."
        />
        <FontAwesomeIcon
          className="search-icon"
          onClick={toggleClass}
          icon="search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
