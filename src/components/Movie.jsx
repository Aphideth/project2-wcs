import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import apiKey from '../API_KEY';
import './Movie.css';

const Movie = (movieId) => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [wishList, setWishList] = useState([]);

  const fetchDetailMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const searchMovie = await response.json();

    if (searchMovie) {
      setMovieDetail(searchMovie);
    }
  };
  useEffect(() => {
    fetchDetailMovie(movieId.movieId);
  }, [movieId.movieId]);

  const handleClickIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  //On teste les favoris ci-dessous

  const getFavorites = () => {
    const favoriteList = localStorage.getItem('wishlist');
    favoriteList
      ? setWishList(JSON.parse(favoriteList))
      : localStorage.setItem('wishlist', JSON.stringify([]));
  };

  const addToWishList = (movieId) => {
    const favoriteList = localStorage.getItem('wishlist');
    const newFavoriteList = favoriteList ? JSON.parse(favoriteList) : [];
    if (!newFavoriteList.includes(movieId)) {
      newFavoriteList.push(movieId);
    }
    localStorage.setItem('wishlist', JSON.stringify(newFavoriteList));
    getFavorites();
  };

  const deleteFromWishList = (movieId) => {
    const favoriteList = localStorage.getItem('wishlist');
    const newFavoriteList = favoriteList ? JSON.parse(favoriteList) : [];
    const newList = newFavoriteList.filter((id) => id !== movieId);
    localStorage.setItem('wishlist', JSON.stringify(newList));
    getFavorites();
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="movie-card">
      <div className="main-container">
        <div className="left-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className="movie-poster"
          />
        </div>
        <div className="right-container">
          <div className="main-title">
            <h1>{movieDetail.title} </h1>
          </div>
          <div className="right-top">
            {movieDetail.genres?.map((genre, index) => (
              <h3 key={index}>{genre.name}</h3>
            ))}
          </div>
          <div className="favorite" onClick={handleClickIsFavorite}>
            {wishList.includes(movieId.movieId) ? (
              <div
                className="isFavorite"
                onClick={() => deleteFromWishList(movieId.movieId)}
              />
            ) : (
              <div
                className="notFavorite"
                onClick={() => addToWishList(movieId.movieId)}
              />
            )}
          </div>
          <div className="right-middle">
            <div className="release">
              <h4 className="blue-color">Sortie</h4>
              <h4>{moment(movieDetail.release_date).format('DD-MM-YYYY')}</h4>
            </div>
            <div className="duration">
              <h4 className="blue-color">Durée</h4>
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
                Visitez le{' '}
                <a href={movieDetail.homepage} target="_blank" rel="noreferrer">
                  site officiel
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
