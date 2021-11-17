import React, { useEffect, useState } from 'react';
import apiKey from '../API_KEY';
import './Favorites.css';

const Favorites = () => {
  const [favMovie, setFavMovie] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = () => {
    const favoriteList = localStorage.getItem('wishlist');
    favoriteList && favoriteList.length > 0
      ? getMovies(JSON.parse(favoriteList))
      : setFavMovie([]);
  };

  const getMovies = (movieId) => {
    const fav = [];
    movieId.map((id) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`
      )
        .then((res) => res.json())
        .then((result) => {
          fav.push(result);
          setFavMovie([...fav]);
        });
    });
  };

  const deleteFromWishList = (movieId) => {
    const favoriteList = localStorage.getItem('wishlist');
    const newFavoriteList = favoriteList ? JSON.parse(favoriteList) : [];
    const newList = newFavoriteList.filter((id) => id !== movieId);
    localStorage.setItem('wishlist', JSON.stringify(newList));
    setFavMovie(favMovie.filter((movie) => movie.id !== movieId));
  };

  return (
    <div className="Favorites">
      {favMovie && favMovie.length > 0 ? (
        favMovie?.map((movie, index) => (
          <div className="favoriteCard" key={index}>
            <h4>{movie.title}</h4>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <button onClick={() => deleteFromWishList(movie.id)}>
              Supprimer le favoris
            </button>
          </div>
        ))
      ) : (
        <p>no wishlist available</p>
      )}
    </div>
  );
};

export default Favorites;
