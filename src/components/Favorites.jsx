import React from 'react';
import Title from './Title';
import Movie from './Movie';
import './Favorites.css';

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
