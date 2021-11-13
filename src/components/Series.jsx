import React from 'react';
import Carrousel3 from './Carrousel3';
import Carrousel4 from './Carrousel4';
import './Series.css';

const Series = ({ popularSeries, recentSeries }) => {
  return (
    <div className="Series">
      <Carrousel4 recentSeries={recentSeries} />
      <Carrousel3 popularSeries={popularSeries} />
    </div>
  );
};

export default Series;
