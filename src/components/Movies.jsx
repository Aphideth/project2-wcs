import React from 'react';
import './Movies.css';
import Movie from './Movie';
import Article from './Article';
import Carrousel from './Carrousel';

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
