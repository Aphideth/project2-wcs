import React from 'react';
import Carrousel3 from './Carrousel3';
import Carrousel4 from './Carrousel4';
import './Series.css';

const Series = ({ popularSeries, recentSeries, setSerieID }) => {
  return (
    <div className="Series">
      <Carrousel4 recentSeries={recentSeries} setSerieID={setSerieID} />
      <Carrousel3 popularSeries={popularSeries} setSerieID={setSerieID} />
    </div>
  );
};

export default Series;
