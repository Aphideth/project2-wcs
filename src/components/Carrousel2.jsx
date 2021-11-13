import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Title from './Title';
import './Carrousel2.css';

library.add(faChevronRight, faChevronLeft);
const Carrousel2 = ({ popularMovies, setMovieId }) => {
  const [current, setCurrent] = useState(0);
  const [firstPrevCurrent, setFirstPrevCurrent] = useState(18);
  const [prevCurrent, setPrevCurrent] = useState(19);
  const [nextCurrent, setNextCurrent] = useState(1);
  const [lastNextCurrent, setLastNextCurrent] = useState(2);

  const nextSlide = () => {
    setCurrent(current === popularMovies.length - 1 ? 0 : current + 1);
    setFirstPrevCurrent(
      firstPrevCurrent === popularMovies.length - 1 ? 0 : firstPrevCurrent + 1
    );
    setPrevCurrent(
      prevCurrent === popularMovies.length - 1 ? 0 : prevCurrent + 1
    );
    setNextCurrent(
      nextCurrent === popularMovies.length - 1 ? 0 : nextCurrent + 1
    );
    setLastNextCurrent(
      lastNextCurrent === popularMovies.length - 1 ? 0 : lastNextCurrent + 1
    );
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? popularMovies.length - 1 : current - 1);
    setFirstPrevCurrent(
      firstPrevCurrent === 0 ? popularMovies.length - 1 : firstPrevCurrent - 1
    );
    setPrevCurrent(
      prevCurrent === 0 ? popularMovies.length - 1 : prevCurrent - 1
    );
    setNextCurrent(
      nextCurrent === 0 ? popularMovies.length - 1 : nextCurrent - 1
    );
    setLastNextCurrent(
      lastNextCurrent === 0 ? popularMovies.length - 1 : lastNextCurrent - 1
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
      <Title titleName="Movies : the best successes" />
      <div className="slider-container-2">
        {popularMovies.map((movie, index) => (
          <div
            className={index === firstPrevCurrent ? 'slide active' : 'slide'}
            key={index}
          >
            {index === firstPrevCurrent && (
              <div className="slider-2">
                <div className="slider-front-2 first-prev">
                  <Link to={`/movie/${movie.id}`} key={index}>
                    <div
                      className="poster"
                      onClick={() => setMovieId(movie.id)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.original_title}
                        className="slider-2-img first-img"
                      />
                    </div>
                  </Link>
                  <h1>{movie.original_title}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
        {popularMovies.map((movie, index) => (
          <div
            className={index === prevCurrent ? 'slide active' : 'slide'}
            key={index}
          >
            {index === prevCurrent && (
              <div className="slider-2">
                <div className="slider-front-2">
                  <Link to={`/movie/${movie.id}`} key={index}>
                    <div
                      className="poster"
                      onClick={() => setMovieId(movie.id)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.original_title}
                        className="slider-2-img"
                      />
                    </div>
                  </Link>
                  <h1>{movie.original_title}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
        {popularMovies.map((movie, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className="slider-2">
                <div className="slider-front-2">
                  <Link to={`/movie/${movie.id}`} key={index}>
                    <div
                      className="poster"
                      onClick={() => setMovieId(movie.id)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.original_title}
                        className="slider-2-img"
                      />
                    </div>
                  </Link>
                  <h1>{movie.original_title}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
        {popularMovies.map((movie, index) => (
          <div
            className={index === nextCurrent ? 'slide active' : 'slide'}
            key={index}
          >
            {index === nextCurrent && (
              <div className="slider-2">
                <div className="slider-front-2">
                  <Link to={`/movie/${movie.id}`} key={index}>
                    <div
                      className="poster"
                      onClick={() => setMovieId(movie.id)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.original_title}
                        className="slider-2-img"
                      />
                    </div>
                  </Link>
                  <h1>{movie.original_title}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
        {popularMovies.map((movie, index) => (
          <div
            className={index === lastNextCurrent ? 'slide active' : 'slide'}
            key={index}
          >
            {index === lastNextCurrent && (
              <div className="slider-2">
                <div className="slider-front-2 last-prev">
                  <Link to={`/movie/${movie.id}`} key={index}>
                    <div
                      className="poster"
                      onClick={() => setMovieId(movie.id)}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.original_title}
                        className="slider-2-img last-img"
                      />
                    </div>
                  </Link>
                  <h1>{movie.original_title}</h1>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel2;
