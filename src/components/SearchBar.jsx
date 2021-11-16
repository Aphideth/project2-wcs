import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

library.add(faSearch, faTimes);
const apiKey = '5727abed527bf8c8099d66876a9bf967';

const SearchBar = ({ setMovieId }) => {
  const [wordEntered, setWordEntered] = useState('');
  const [getMovieRequest, setGetMovieRequest] = useState([]);

  const fetchMovieRequest = async (wordEntered) => {
    const url = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${wordEntered}`
    );
    const datas = await url.json();
    setGetMovieRequest(datas.results);
  };

  const handleFilter = (e) => {
    const searchValue = e.target.value;
    setWordEntered(searchValue);

    if (searchValue !== '') {
      fetchMovieRequest(e.target.value);
    }
  };
  console.log(getMovieRequest);
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => setIsActive(!isActive);
  const clearInput = () => {
    setGetMovieRequest([]);
    setWordEntered('');
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
        {getMovieRequest.length !== 0 && (
          <div className="dataResult">
            {getMovieRequest.slice(0, 15)?.map((value) => {
              return (
                <>
                  <Link to={`/movie/${value.id}`}>
                    <div
                      className="dataItem"
                      key={value.id}
                      onClick={() => setMovieId(value.id)}
                    >
                      <p>{value.title}</p>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        )}
        {getMovieRequest.length !== 0 ? (
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
  value: PropTypes.string,
};

SearchBar.defaultProps = {
  items: [],
};

export default SearchBar;
