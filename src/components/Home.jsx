import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import beer from '../assets/img/beer.png';
import armChair from '../assets/img/armChair.png';
import couch from '../assets/img/couch.png';
import pizza from '../assets/img/pizza.png';
import popcorn from '../assets/img/popcorn.png';
import soda from '../assets/img/soda.png';
import './Home.css';

const Home = ({ crimeMovies, fantastiqueMovies, setMovieId }) => {
  const [armChairChecked, setArmChairChecked] = useState(false);
  const [couchChecked, setCouchChecked] = useState(false);
  const [pizzaChecked, setPizzaChecked] = useState(false);
  const [popcornChecked, setPopcornChecked] = useState(false);
  const [beerChecked, setBeerChecked] = useState(false);
  const [sodaChecked, setSodaChecked] = useState(false);
  let firstApi = 0;
  let secondApi = 0;

  const handleChangeCouch = () => {
    setCouchChecked(!couchChecked);
    setArmChairChecked(false);
  };
  if (couchChecked === true) {
    firstApi++;
  }
  const handleChangeArmChair = () => {
    setArmChairChecked(!armChairChecked);
    setCouchChecked(false);
  };
  if (armChairChecked === true) {
    secondApi++;
  }
  const handleChangePizza = () => {
    setPizzaChecked(!pizzaChecked);
    setPopcornChecked(false);
  };
  if (pizzaChecked === true) {
    firstApi++;
  }
  const handleChangePopcorn = () => {
    setPopcornChecked(!popcornChecked);
    setPizzaChecked(false);
  };
  if (popcornChecked === true) {
    secondApi++;
  }
  const handleChangeBeer = () => {
    setBeerChecked(!beerChecked);
    setSodaChecked(false);
  };
  if (beerChecked === true) {
    firstApi++;
  }
  const handleChangeSoda = () => {
    setSodaChecked(!sodaChecked);
    setBeerChecked(false);
  };
  if (sodaChecked === true) {
    secondApi++;
  }

  const [showApiResult, setShowApiResult] = useState(false);

  let disabled;
  if (firstApi + secondApi < 3) {
    disabled = true;
  }
  const handleShowApiResult = () => {
    setShowApiResult(!showApiResult);
  };
  const handleShowApiReset = () => {
    setShowApiResult(!showApiResult);
    setCouchChecked(false);
    setArmChairChecked(false);
    setPizzaChecked(false);
    setPopcornChecked(false);
    setBeerChecked(false);
    setSodaChecked(false);
  };
  return (
    <div className="Home">
      <div
        className={showApiResult ? 'questionnaire-hide' : 'questionnaire-show'}
      >
        <div className="home-title">
          <h2>Veuillez faire votre choix :</h2>
          <h3>{`Sélectionnez une image par ligne`}</h3>
          <h3>
            Cliquez sur le bouton pour afficher votre recommandation
            personnalisé de films
          </h3>
        </div>
        <div className="questionnaire-container">
          <div className="colonne1">
            <div>
              <label>
                <div className={couchChecked ? 'isChecked' : 'notChecked'}>
                  <img
                    src={couch}
                    alt="couch"
                    type="checkbox"
                    couchChecked={couchChecked}
                    onClick={handleChangeCouch}
                  />
                </div>
              </label>
            </div>
            <div>
              <label>
                <div className={pizzaChecked ? 'isChecked' : 'notChecked'}>
                  <img
                    src={pizza}
                    alt="pizza"
                    type="checkbox"
                    pizzaChecked={pizzaChecked}
                    onClick={handleChangePizza}
                  />
                </div>
              </label>
            </div>
            <div>
              <label>
                <div className={beerChecked ? 'isChecked' : 'notChecked'}>
                  <img
                    src={beer}
                    alt="beer"
                    type="checkbox"
                    beerChecked={beerChecked}
                    onClick={handleChangeBeer}
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="colonne2">
            <div>
              <label>
                <div className={armChairChecked ? 'isChecked' : 'notChecked'}>
                  <img
                    src={armChair}
                    alt="armChair"
                    type="checkbox"
                    armChairChecked={armChairChecked}
                    onClick={handleChangeArmChair}
                  />
                </div>
              </label>
            </div>
            <div>
              <label>
                <div className={popcornChecked ? 'isChecked' : 'notChecked'}>
                  <img
                    src={popcorn}
                    alt="popcorn"
                    type="checkbox"
                    popcornChecked={popcornChecked}
                    onClick={handleChangePopcorn}
                  />
                </div>
              </label>
            </div>
            <div>
              <label>
                <div className={sodaChecked ? 'isChecked' : 'notChecked'}>
                  <img
                    src={soda}
                    alt="soda"
                    type="checkbox"
                    sodaChecked={sodaChecked}
                    onClick={handleChangeSoda}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="clic-to-show">
        <button
          className={showApiResult ? 'hide-button' : 'show-button'}
          onClick={handleShowApiResult}
          disabled={disabled}
        >
          <p>RESULTAT</p>
        </button>
        <button
          className={showApiResult ? 'show-button' : 'hide-button'}
          onClick={handleShowApiReset}
        >
          <p>RECOMMENCER</p>
        </button>
      </div>
      <div className={showApiResult ? 'show-results' : 'hide-api'}>
        <div className={showApiResult ? 'api-result' : 'hide-api'}>
          {firstApi > secondApi
            ? crimeMovies?.map((movie, index) => (
                <div className="movie-dispatch" key={index}>
                  <Link to={`/movie/${movie.id}`} key={index}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.original_title}
                      className="movie-img-api"
                      onClick={() => setMovieId(movie.id)}
                    />
                  </Link>
                </div>
              ))
            : fantastiqueMovies?.map((movie, index) => (
                <div className="movie-dispatch" key={index}>
                  <Link to={`/movie/${movie.id}`} key={index}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.original_title}
                      className="movie-img-api"
                      onClick={() => setMovieId(movie.id)}
                    />
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
