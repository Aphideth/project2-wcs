import React from 'react';
import './Movies.css';

const Movies = () => {
  return (
    <div className="movies">
      <Movie />
      <Article />
      <Carrousel />
      <Carrousel />
      <Carrousel />
    </div>
  );
};

export default Movies;
