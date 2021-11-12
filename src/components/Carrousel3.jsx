import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Title from './Title';
import './Carrousel3.css';

library.add(faChevronRight, faChevronLeft);
const Carrousel3 = ({ popularSeries }) => {
  const [current, setCurrent] = useState(0);
  const [firstPrevCurrent, setFirstPrevCurrent] = useState(18);
  const [prevCurrent, setPrevCurrent] = useState(19);
  const [nextCurrent, setNextCurrent] = useState(1);
  const [lastNextCurrent, setLastNextCurrent] = useState(2);

  const nextSlide = () => {
    setCurrent(current === popularSeries.length - 1 ? 0 : current + 1);
    setFirstPrevCurrent(
      firstPrevCurrent === popularSeries.length - 1 ? 0 : firstPrevCurrent + 1
    );
    setPrevCurrent(
      prevCurrent === popularSeries.length - 1 ? 0 : prevCurrent + 1
    );
    setNextCurrent(
      nextCurrent === popularSeries.length - 1 ? 0 : nextCurrent + 1
    );
    setLastNextCurrent(
      lastNextCurrent === popularSeries.length - 1 ? 0 : lastNextCurrent + 1
    );
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? popularSeries.length - 1 : current - 1);
    setFirstPrevCurrent(
      firstPrevCurrent === 0 ? popularSeries.length - 1 : firstPrevCurrent - 1
    );
    setPrevCurrent(
      prevCurrent === 0 ? popularSeries.length - 1 : prevCurrent - 1
    );
    setNextCurrent(
      nextCurrent === 0 ? popularSeries.length - 1 : nextCurrent - 1
    );
    setLastNextCurrent(
      lastNextCurrent === 0 ? popularSeries.length - 1 : lastNextCurrent - 1
    );
  };

  return (
    <div className="carrousel-2">
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
      <Title titleName="Series : the best successes" />
      <div className="slider-container-2">
        {popularSeries.map((serie, index) => (
          <div
            className={index === firstPrevCurrent ? 'slide active' : 'slide'}
            key={index}
          >
            {index === firstPrevCurrent && (
              <div className="slider-2">
                <div className="slider-front-2 first-prev">
                  <Link to="/series/:id">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.name}
                      className="slider-2-img first-img"
                    />
                  </Link>
                  <h1>{serie.name}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
        {popularSeries.map((serie, index) => (
          <div
            className={index === prevCurrent ? 'slide active' : 'slide'}
            key={index}
          >
            {index === prevCurrent && (
              <div className="slider-2">
                <div className="slider-front-2">
                  <Link to="/series/:id">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.name}
                      className="slider-2-img"
                    />
                  </Link>
                  <h1>{serie.name}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
        {popularSeries.map((serie, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className="slider-2">
                <div className="slider-front-2">
                  <Link to="/series/:id">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.name}
                      className="slider-2-img"
                    />
                  </Link>
                  <h1>{serie.name}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
        {popularSeries.map((serie, index) => (
          <div
            className={index === nextCurrent ? 'slide active' : 'slide'}
            key={index}
          >
            {index === nextCurrent && (
              <div className="slider-2">
                <div className="slider-front-2">
                  <Link to="/series/:id">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.name}
                      className="slider-2-img"
                    />
                  </Link>
                  <h1>{serie.name}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
        {popularSeries.map((serie, index) => (
          <div
            className={index === lastNextCurrent ? 'slide active' : 'slide'}
            key={index}
          >
            {index === lastNextCurrent && (
              <div className="slider-2">
                <div className="slider-front-2 last-prev">
                  <Link to="/series/:id">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                      alt={serie.name}
                      className="slider-2-img last-img"
                    />
                  </Link>
                  <h1>{serie.name}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel3;
