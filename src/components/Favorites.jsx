import React from 'react';
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
