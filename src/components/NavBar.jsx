import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './NavBar.css';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <div>
      <nav>
        <p>Je suis la Navbar</p>
        <p>Logo</p>
        <ul className="navBar-links">
          <li className="navBar-link">
            <Link to="/">Accueil</Link>
          </li>
          <li className="navBar-link">
            <Link to="/Movies">Films</Link>
          </li>
          <li className="navBar-link">
            <Link to="/Series">Séries</Link>
          </li>
          <li className="navBar-link">
            <Link to="/Favorites">Favoris</Link>
          </li>
          <li className="navBar-link">
            <Link to="/OurTeam">Notre Equipe</Link>
          </li>
        </ul>
        <p>
          <SearchBar />
        </p>
      </nav>
    </div>
  );
};

export default NavBar;
