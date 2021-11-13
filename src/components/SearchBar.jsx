import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

library.add(faSearch, faTimes);

const SearchBar = ({ popularMovies }) => {
  const [filteredData, setfilteredData] = useState([]);
  const [wordEntered, setwordEntered] = useState('');

  const handleFilter = (e) => {
    const searchValue = e.target.value;
    setwordEntered(searchValue);

    if (searchValue === '') {
      setfilteredData([]);
    } else {
      setfilteredData(
        popularMovies.filter((value) =>
          value.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => setIsActive(!isActive);
  const clearInput = () => {
    setfilteredData([]);
    setwordEntered('');
  };

  return (
    <div className="searchbar">
      <form role="search">
        <input
          className={isActive ? 'search-menu-show' : 'search-menu'}
          type="text"
          name="searchBar"
          value={wordEntered}
          id="searchBar"
          placeholder="Rechercher un titre, un artiste, un réalisateur..."
          onChange={handleFilter}
        />
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {/* <Link to={`/:${searchValue}`} /> */}
            {filteredData.slice(0, 15).map((value) => {
              return (
                <div className="dataItem" key={value.id}>
                  <p>{value.title}</p>
                </div>
              );
            })}
          </div>
        )}
        {filteredData.length !== 0 ? (
          <FontAwesomeIcon
            className="times-icon"
            onClick={clearInput}
            icon="times"
          />
        ) : (
          <FontAwesomeIcon
            className="search-icon"
            onClick={toggleClass}
            icon="search"
          />
        )}
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  items: PropTypes.instanceOf(Array),
};

SearchBar.defaultProps = {
  items: [],
};

export default SearchBar;
