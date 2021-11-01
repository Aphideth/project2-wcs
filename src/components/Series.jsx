import React from 'react';
import Carrousel from './Carrousel';
import Article from './Article';
import Serie from './Serie';
import './Series.css';

const Series = () => {
  return (
    <div className="Series">
      <Serie />
      <Article />
      <Carrousel />
      <Carrousel />
      <Carrousel />
    </div>
  );
};

export default Series;
