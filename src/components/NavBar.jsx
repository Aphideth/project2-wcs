import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFilm,
  faTv,
  faHeart,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import WIA_2222 from '../assets/img/WIA_2222.png';
import SearchBar from './SearchBar';

library.add(faHome, faFilm, faTv, faHeart, faUsers);
const NavBar = ({ items }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => setIsActive(!isActive);
  return (
    <div>
      <nav
        className={isActive ? 'navBar dark-mode show-nav' : 'navBar dark-mode'}
      >
        <div className="navBar-logo">
          <img src={WIA_2222} alt="logo du site" />
        </div>
        <ul className="navBar-links">
          <li className="navBar-link">
            <Link to="/">
              <FontAwesomeIcon className="icon-menu" icon="home" />
              <span className="string-menu string-menu-accueil">Accueil</span>
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
          <SearchBar items={items} />
        </div>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  items: PropTypes.instanceOf(Array),
};

NavBar.defaultProps = {
  items: [],
};

export default NavBar;
