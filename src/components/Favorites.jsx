import React, { useEffect, useState } from 'react';
import apiKey from '../API_KEY';
import { NavLink as Link } from 'react-router-dom';
import './Favorites.css';

const Favorites = ({ setSerieID, setMovieId }) => {
  const [favMovie, setFavMovie] = useState([]);
  const [favSerie, setFavSerie] = useState([]);

  useEffect(() => {
    getFavorites();
    getFavSeries();
  }, []);

  //favMovie

  const getFavorites = () => {
    const favoriteList = localStorage.getItem('wishlist');
    favoriteList && favoriteList.length > 0
      ? getMovies(JSON.parse(favoriteList))
      : setFavMovie([]);
  };

  const getMovies = (movieId) => {
    const fav = [];
    movieId?.map((id) => {
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

  //favSerie

  const getFavSeries = () => {
    const favoriteSerieList = localStorage.getItem('serielist');
    favoriteSerieList && favoriteSerieList.length > 0
      ? getSeries(JSON.parse(favoriteSerieList))
      : setFavMovie([]);
  };

  const getSeries = (serieId) => {
    const fav2 = [];
    serieId?.map((id2) => {
      fetch(
        `https://api.themoviedb.org/3/tv/${id2}?api_key=${apiKey}&language=fr-FR`
      )
        .then((response) => response.json())
        .then((results) => {
          fav2.push(results);
          setFavSerie([...fav2]);
          console.log(fav2);
        });
    });
  };

  const deleteFromSerieList = (serieId) => {
    const favoriteSerieList = localStorage.getItem('serielist');
    const newfavoriteSerieList = favoriteSerieList
      ? JSON.parse(favoriteSerieList)
      : [];
    const newSerieList = newfavoriteSerieList.filter((id) => id !== serieId);
    localStorage.setItem('serielist', JSON.stringify(newSerieList));
    setFavSerie(favSerie.filter((serie) => serie.id !== serieId));
    console.log(favSerie);
  };

  return (
    <div className="favorites">
      <div className="fav-movies">
        <h2>Vos films favoris</h2>
        {favMovie && favMovie.length > 0 ? (
          favMovie?.map((movie, index) => (
            <div className="favorite-movie-card" key={index}>
              <h4>{movie.title}</h4>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="fav-movie-poster"
                  onClick={() => setMovieId(movie.id)}
                />
              </Link>
              <button
                className="overlay"
                onClick={() => deleteFromWishList(movie.id)}
              >
                Supprimer le favoris
              </button>
            </div>
          ))
        ) : (
          <p>{`Vous n'avez pas de film favoris`}</p>
        )}
      </div>
      <div className="fav-series">
        <h2>Vos séries favorites</h2>
        {favSerie && favSerie.length > 0 ? (
          favSerie?.map((serie, index) => (
            <div className="favorite-serie-card" key={index}>
              <h4>{serie.name}</h4>
              <Link to={`/serie/${serie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                  alt={serie.name}
                  className="fav-serie-poster"
                  onClick={() => setSerieID(serie.id)}
                />
              </Link>
              <button
                className="overlay"
                onClick={() => deleteFromSerieList(serie.id)}
              >
                Supprimer le favoris
              </button>
            </div>
          ))
        ) : (
          <p>{`Vous n'avez pas de série favorite`}</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
