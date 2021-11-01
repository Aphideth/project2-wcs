import React from 'react';
import './Movie.css';
import Title from './Title';

const Movie = () => {
  return (
    <div className="movie">
      <Title titleName="Titre du film" />
      <p>Je suis une image du film</p>
      <p>Je suis la description du film</p>
      <p>Je suis la date de sortie du film</p>
      <p>Je suis la note du film</p>
    </div>
  );
};

export default Movie;
