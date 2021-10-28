import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFilm,
  faTv,
  faHeart,
  faUsers,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import SearchBar from './SearchBar';

library.add(faHome, faFilm, faTv, faHeart, faUsers, faSearch);

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => setIsActive(!isActive);
  return (
    <div>
      <nav
        className={isActive ? 'navBar dark-mode show-nav' : 'navBar dark-mode'}
      >
        <div className="navBar-logo">
          <p>Logo</p>
        </div>
        <ul className="navBar-links">
          <li className="navBar-link">
            <Link to="/">
              <FontAwesomeIcon className="icon-menu" icon="home" />
              <span className="string-menu">Accueil</span>
            </Link>
          </li>
          <li className="navBar-link">
            <Link to="/Movies">
              <FontAwesomeIcon className="icon-menu" icon="film" />
              <span className="string-menu">Films</span>
            </Link>
          </li>
          <li className="navBar-link">
            <Link to="/Series">
              <FontAwesomeIcon className="icon-menu" icon="tv" />
              <span className="string-menu">Séries</span>
            </Link>
          </li>
          <li className="navBar-link">
            <Link to="/Favorites">
              <FontAwesomeIcon className="icon-menu" icon="heart" />
              <span className="string-menu">Favoris</span>
            </Link>
          </li>
          <li className="navBar-link">
            <Link to="/OurTeam">
              <FontAwesomeIcon className="icon-menu" icon="users" />
              <span className="string-menu">Notre Equipe</span>
            </Link>
          </li>
        </ul>
        <button type="button" className="menuBurger" onClick={toggleClass}>
          <span className="bar" />
        </button>
        <div className="navSearchBar">
          <SearchBar />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
