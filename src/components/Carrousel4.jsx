import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import './Carrousel.css';

library.add(faChevronRight, faChevronLeft);
const Carrousel = ({ recentSeries }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === recentSeries.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? recentSeries.length - 1 : current - 1);
  };

  return (
    <div className="carrousel">
      <FontAwesomeIcon
        className="left-arrow"
        icon="chevron-left"
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        className="right-arrow"
        icon="chevron-right"
        onClick={nextSlide}
      />
      {recentSeries.map((serie, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <div className="slider-container">
              <div className="slider">
                <div className="slider-front">
                  <h1>{serie.name}</h1>
                  <Link to="/series/:id">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.name}
                      className="slider-img"
                    />
                  </Link>
                </div>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`}
                alt={serie.name}
                className="slider-img-background"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
