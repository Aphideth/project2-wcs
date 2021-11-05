import React from 'react';
import './Favorites.css';
import Title from './Title';
import Movie from './Movie';

const Favorites = () => {
  return (
    <div className="Favorites">
      <Title titleName="Mes Favoris"/>
      <div className="fav">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
};

export default Favorites;
