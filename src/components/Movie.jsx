import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import './Movie.css';

const apiKey = '5727abed527bf8c8099d66876a9bf967';

const Movie = (movieId) => {
  const [movieDetail, setMovieDetail] = useState([]);

  const fetchDetailMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=${apiKey}&language=en-US`;
    const response = await fetch(url);
    const searchMovie = await response.json();

    if (searchMovie) {
      setMovieDetail(searchMovie);
    }
  };
  useEffect(() => {
    fetchDetailMovie(movieId.movieId);
  }, [movieId.movieId]);

  return (
    <div className="movie-card">
      <div className="main-container">
        <div className="left-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt={movieDetail.original_title}
            className="poster"
          />
        </div>
        <div className="right-container">
          <Title titleName={movieDetail.original_title} />
          <div className="right-top">
            {movieDetail.genres?.map((genre, index) => (
              <h3 key={index}>{genre.name}</h3>
            ))}
          </div>
          <div className="favorite">
            <button>Add to favorite</button>
          </div>
          <div className="right-middle">
            <div className="release">
              <h4 className="blue-color">Release</h4>
              <h4>{movieDetail.release_date}</h4>
            </div>
            <div className="duration">
              <h4 className="blue-color">Duration</h4>
              <h4>{movieDetail.runtime} min</h4>
            </div>
            <div className="note">
              <h4 className="blue-color">TMdb Note</h4>
              <h4>{movieDetail.vote_average}</h4>
            </div>
          </div>
          <div className="right-bottom">
            <div className="tagline">
              <h4>{movieDetail.tagline}</h4>
            </div>
            <div className="overview">
              <p>{movieDetail.overview}</p>
            </div>
            <div className="links">
              <button>
                <a href={movieDetail.homepage} target="_blank" rel="noreferrer">
                  More infos
                </a>
              </button>
            </div>
          </div>
          <div className="close-card">
            <button className="close">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movieId: PropTypes.number,
};

export default Movie;
