import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Serie.css';

const apiKey = '5727abed527bf8c8099d66876a9bf967';

const Serie = (serieId) => {
  const [serieDetail, setSerieDetail] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchDetailSerie = async () => {
    const url = `https://api.themoviedb.org/3/tv/${serieId.serieId}?api_key=${apiKey}&language=en-US`;
    const response = await fetch(url);
    const searchSerie = await response.json();
    if (searchSerie) {
      setSerieDetail(searchSerie);
    }
  };

  useEffect(() => {
    fetchDetailSerie(serieId.serieId);
  }, [serieId.serieId]);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const [synopsis, setSynopsis] = React.useState(false);
  const togSynopsis = () => setSynopsis(!synopsis);

  const [saisons, setSaisons] = React.useState(false);
  const togSaisons = () => setSaisons(!saisons);

  const [suggestions, setSuggestions] = React.useState(false);
  const togSuggestions = () => setSuggestions(!suggestions);
  console.log(serieDetail.episode_run_time);
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
            <div
              className={isFavorite ? 'serie-isFavorite' : 'serie-notFavorite'}
            />
          </div>
          <div className="serie-right-middle">
            <div className="serie-release">
              <h4 className="serie-blue-color">Release</h4>
              <h4>{serieDetail.first_air_date}</h4>
            </div>
            <div className="serie-duration">
              <h4 className="serie-blue-color">Duration</h4>
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
                <h4>Overview</h4>
              </li>
              <li onClick={togSaisons}>
                <h4>Seasons</h4>
              </li>
              <li onClick={togSuggestions}>
                <h4>Similars</h4>
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
                  <h4 className="serie-blue-color">All seasons : </h4>
                  <h4> {serieDetail.number_of_seasons}</h4>
                  <h4 className="serie-blue-color">
                    <span>/</span> {''} All episodes :{' '}
                  </h4>
                  <h4> {serieDetail.number_of_episodes}</h4>
                </div>
              </div>
              {serieDetail.seasons?.map((season, index) => (
                <div className="serie-season" key={index}>
                  <div className="serie-saison-number">
                    <h4 className="serie-blue-color">Season n°</h4>
                    <h4> {season.season_number}</h4>
                  </div>
                  <div className="serie-episode-count">
                    <h4 className="serie-blue-color">{`Numbers of episodes : `}</h4>
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

// const [synopsis, setSynopsis] = React.useState(true);
// const togSynopsis = () => setSynopsis(!synopsis);

// const [saisons, setSaisons] = React.useState(false);
// const togSaisons = () => setSaisons(!saisons);

// const [episodes, setEpisodes] = React.useState(false);
// const togEpisodes = () => setEpisodes(!episodes);

// const [suggestions, setSuggestions] = React.useState(false);
// const togSuggestions = () => setSuggestions(!suggestions);
/* <div className="Serie">
<Title titleName="Titre de la série" />
<img src="./assets/img/media.jpg" alt="Je suis une affiche du film" />
<p>Je suis la note de la série</p>
<ul className="navBar2">
  <li onClick={togSynopsis}>Synopsis</li>
  <li onClick={togSaisons}>Saisons</li>
  <li onClick={togEpisodes}>épisodes</li>
  <li onClick={togSuggestions}>Suggestions</li>
  <li>Liens plateformes</li>
</ul>
<div className={synopsis ? 'showSyno' : 'noSyno'}>
  <p>Date de Sortie</p>
  <p>C`est l`histoire de...</p>
</div>
<p className={saisons ? 'showSaisons' : 'noSaisons'}>Saisons</p>
<p className={episodes ? 'showEpisodes' : 'noEpisodes'}>Épisodes</p>
<p className={suggestions ? 'showSug' : 'noSug'}>
  <Carrousel />
</p>
</div> */
