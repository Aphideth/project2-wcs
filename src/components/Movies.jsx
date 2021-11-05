import React from 'react';
import './Movies.css';
import Movie from './Movie';
import Carrousel from './Carrousel';
import Article from './Article';

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
