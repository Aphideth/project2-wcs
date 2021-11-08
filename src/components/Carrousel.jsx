import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import './Carrousel.css';
// import Title from './Title';

library.add(faChevronRight, faChevronLeft);
const Carrousel = ( {items} ) => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? items.length - 1 : current - 1);
  }

  return (
    <div className="carrousel">
      <FontAwesomeIcon className="left-arrow" icon="chevron-left" onClick={prevSlide} />
      <FontAwesomeIcon className="right-arrow" icon="chevron-right" onClick={nextSlide} />
      {items.map((movie, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
            <div className="slider-container">
              <div className="slider">
                <div className="slider-front">
                  <h1>{movie.title}</h1>
                  <Link to="/Movies">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      className="slider-img"
                    />
                  </Link>
                </div>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                className="slider-img-background"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Carrousel.propTypes = {
  items: PropTypes.instanceOf(Array),
};

Carrousel.defaultProps = {
  items: [],
};

export default Carrousel;
