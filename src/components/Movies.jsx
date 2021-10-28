import React from 'react';
import Carrousel from './Carrousel';
import Article from './Article';
import Movie from './Movie';
import './Movies.css';

const Movies = () => {
  return (
    <div className="movies">
      <p>Je suis la Movies page</p>
      <Movie />
      <Article />
      <Carrousel />
      <Carrousel />
      <Carrousel />
    </div>
  );
};

export default Movies;
