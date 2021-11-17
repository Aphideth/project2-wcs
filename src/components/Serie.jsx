import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import apiKey from '../API_KEY';
import './Serie.css';

const Serie = (serieId) => {
  const [serieDetail, setSerieDetail] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [serieList, setSerieList] = useState([]);

  const fetchDetailSerie = async () => {
    const url = `https://api.themoviedb.org/3/tv/${serieId.serieId}?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const searchSerie = await response.json();
    if (searchSerie) {
      setSerieDetail(searchSerie);
    }
  };
  useEffect(() => {
    fetchDetailSerie(serieId.serieId);
  }, [serieId.serieId]);

  const [similarSerie, setSimilarSerie] = useState([]);

  const fetchSimilarSerie = async () => {
    const datas = `https://api.themoviedb.org/3/tv/${serieId.serieId}/similar?api_key=${apiKey}&language=en-US&page=1`;
    const responseSimilar = await fetch(datas);
    const similarResult = await responseSimilar.json();
    if (similarResult.results) {
      setSimilarSerie(similarResult.results);
    }
  };

  useEffect(() => {
    fetchSimilarSerie();
  }, []);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [synopsis, setSynopsis] = React.useState(false);
  const togSynopsis = () => setSynopsis(!synopsis);

  const [saisons, setSaisons] = React.useState(false);
  const togSaisons = () => setSaisons(!saisons);

  const [suggestions, setSuggestions] = React.useState(false);
  const togSuggestions = () => setSuggestions(!suggestions);

  //On teste les favoris ci-dessous

  const getFavSeries = () => {
    const favoriteSerieList = localStorage.getItem('serielist');
    favoriteSerieList
      ? setSerieList(JSON.parse(favoriteSerieList))
      : localStorage.setItem('serielist', JSON.stringify([]));
  };

  const addToSerieList = (serieId) => {
    const favoriteSerieList = localStorage.getItem('serielist');
    const newfavoriteSerieList = favoriteSerieList
      ? JSON.parse(favoriteSerieList)
      : [];
    if (!newfavoriteSerieList.includes(serieId)) {
      newfavoriteSerieList.push(serieId);
    }
    localStorage.setItem('serielist', JSON.stringify(newfavoriteSerieList));
    getFavSeries();
  };

  const deleteFromSerieList = (serieId) => {
    const favoriteSerieList = localStorage.getItem('serielist');
    const newfavoriteSerieList = favoriteSerieList
      ? JSON.parse(favoriteSerieList)
      : [];
    const newSerieList = newfavoriteSerieList.filter((id) => id !== serieId);
    localStorage.setItem('serielist', JSON.stringify(newSerieList));
    getFavSeries();
  };

  useEffect(() => {
    getFavSeries();
  }, []);

  return (
    <div className="serie-card">
      <div className="serie-main-container">
        <div className="serie-left-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${serieDetail.poster_path}`}
            alt={serieDetail.name}
            className="serie-poster"
          />
        </div>
        <div className="serie-right-container">
          <div className="serie-main-title">
            <h1>{serieDetail.name} </h1>
          </div>
          <div className="serie-right-top">
            {serieDetail.genres?.map((genre, index) => (
              <h3 key={index}>{genre.name}</h3>
            ))}
          </div>
          <div className="serie-favorite" onClick={handleClickFavorite}>
            {serieList.includes(serieId.serieId) ? (
              <div
                className="serie-isFavorite"
                onClick={() => deleteFromSerieList(serieId.serieId)}
              />
            ) : (
              <div
                className="serie-notFavorite"
                onClick={() => addToSerieList(serieId.serieId)}
              />
            )}
          </div>
          <div className="serie-right-middle">
            <div className="serie-release">
              <h4 className="serie-blue-color">Sortie</h4>
              <h4>{moment(serieDetail.first_air_date).format('DD-MM-YYYY')}</h4>
            </div>
            <div className="serie-duration">
              <h4 className="serie-blue-color">Durée</h4>
              <h4>
                {serieDetail.episode_run_time?.find((time) => time < 60)} min
              </h4>
            </div>
            <div className="serie-note">
              <h4 className="serie-blue-color">TMdb Note</h4>
              <h4>{serieDetail.vote_average}</h4>
            </div>
          </div>
          <div className="serie-right-bottom">
            <ul className="serie-navbar">
              <div className="serie-links">
                {serieDetail.networks?.map((network, index) => (
                  <>
                    <li className="serie-links-networks">
                      <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/original/${network.logo_path}`}
                        alt={serieDetail.name}
                      />
                    </li>
                  </>
                ))}
              </div>
              <li onClick={togSynopsis}>
                <h4>Résumé</h4>
              </li>
              <li onClick={togSaisons}>
                <h4>Saisons</h4>
              </li>
              <li onClick={togSuggestions}>
                <h4>Similaires</h4>
              </li>
            </ul>
            <div className={synopsis ? 'showSyno' : 'noSyno'}>
              <div className="serie-tagline">
                <h4>{serieDetail.tagline}</h4>
              </div>
              <div className="serie-overview">
                <p>{serieDetail.overview}</p>
              </div>
            </div>
            <div className={saisons ? 'showSaisons' : 'noSaisons'}>
              <div className="serie-total-saison-container">
                <div className="serie-total-saison">
                  <h4 className="serie-blue-color">Toutes les saisons : </h4>
                  <h4> {serieDetail.number_of_seasons}</h4>
                  <h4 className="serie-blue-color">
                    <span>/</span> {''} Tous les épisodes :{' '}
                  </h4>
                  <h4> {serieDetail.number_of_episodes}</h4>
                </div>
              </div>
              {serieDetail.seasons?.map((season, index) => (
                <div className="serie-season" key={index}>
                  <div className="serie-saison-number">
                    <h4 className="serie-blue-color">Saison n°</h4>
                    <h4> {season.season_number}</h4>
                  </div>
                  <div className="serie-episode-count">
                    <h4 className="serie-blue-color">{`Nombre d'épisodes : `}</h4>
                    <h4> {season.episode_count}</h4>
                  </div>
                  <img
                    key={index}
                    src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                    alt={serieDetail.name}
                    className="serie-saison-poster"
                  />
                </div>
              ))}
            </div>
            <div className={suggestions ? 'showSimilar' : 'noSimilar'}>
              {similarSerie?.map((similar, index) => (
                <div key={index}>
                  <Link to={`/serie/${similar.id}`} key={index}>
                    <div onClick={() => serieId}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${similar.poster_path}`}
                        alt={similar.name}
                        className="similar-serie-img"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Link to="/series">
            <div className="serie-close-container">
              <div className="serie-close-card" onClick={Link}></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

Serie.propTypes = {
  serieId: PropTypes.number,
};

export default Serie;
