import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Movie.css';

const apiKey = '5727abed527bf8c8099d66876a9bf967';

const Movie = (movieId) => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

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

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="movie-card">
      <div className="main-container">
        <div className="left-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt={movieDetail.original_title}
            className="movie-poster"
          />
        </div>
        <div className="right-container">
          <div className="main-title">
            <h1>{movieDetail.original_title} </h1>
          </div>
          <div className="right-top">
            {movieDetail.genres?.map((genre, index) => (
              <h3 key={index}>{genre.name}</h3>
            ))}
          </div>
          <div className="favorite" onClick={handleClickFavorite}>
            <div className={isFavorite ? 'isFavorite' : 'notFavorite'} />
          </div>
          <div className="right-middle">
            <div className="release">
              <h4 className="blue-color">Release</h4>
              <h4>{moment(movieDetail.release_date).format('DD-MM-YYYY')}</h4>
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
              <div>
                Visit the{' '}
                <a href={movieDetail.homepage} target="_blank" rel="noreferrer">
                  official website
                </a>
              </div>
            </div>
          </div>
          <Link to="/movies">
            <div className="close-card" onClick={Link}></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movieId: PropTypes.number,
};

export default Movie;
