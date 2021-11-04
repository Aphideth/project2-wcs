import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

library.add(faSearch);

const SearchBar = ({ items }) => {
  const [filteredData, setfilteredData] = useState([]);
  console.log(items);
  console.log(filteredData);
  const handleFilter = (e) => {
    const searchValue = e.target.value;
    const newFilter = items.filter((value) => {
      return value.title.toLowerCase().includes(searchValue.toLowerCase);
    });
    if (searchValue === '') {
      setfilteredData([]);
    } else {
      setfilteredData(newFilter);
    }
  };
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => setIsActive(!isActive);

  return (
    <div className="searchbar">
      <form role="search">
        <input
          className={isActive ? 'search-menu-show' : 'search-menu'}
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher un titre, un artiste, un réalisateur..."
          onChange={handleFilter}
        />
        <div className="dataResult">
          {/* <Link to={`/:${searchValue}`} /> */}
          {filteredData.filter((value) => {
            return <div className="dataItem">{value.title}</div>;
          })}
        </div>
        <FontAwesomeIcon
          className="search-icon"
          onClick={toggleClass}
          icon="search"
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  items: PropTypes.string,
};

SearchBar.defaultProps = {
  items: '',
};

export default SearchBar;
