import React, { useState } from 'react';
import beer from '../assets/img/beer.png';
import fauteuil from '../assets/img/fauteuil.png';
import couch from '../assets/img/couch.png';
import pizza from '../assets/img/pizza.png';
import popcorn from '../assets/img/popcorn.png';
import soda from '../assets/img/soda.png';
import './Home.css';

const Home = ({ popularMovies, recentMovies }) => {
  const [beerChecked, setBeerChecked] = useState(false);
  const [fauteuilChecked, setFauteuilChecked] = useState(false);
  const [couchChecked, setCouchChecked] = useState(false);
  const [pizzaChecked, setPizzaChecked] = useState(false);
  const [popcornChecked, setPopcornChecked] = useState(false);
  const [sodaChecked, setSodaChecked] = useState(false);
  let firstApi = 0;
  let secondApi = 0;

  const handleChangeBeer = () => {
    setBeerChecked(!beerChecked);
  };
  if (beerChecked === true) {
    firstApi++;
  }
  const handleChangeFauteuil = () => {
    setFauteuilChecked(!fauteuilChecked);
  };
  if (fauteuilChecked === true) {
    firstApi++;
  }
  const handleChangeCouch = () => {
    setCouchChecked(!couchChecked);
  };
  if (couchChecked === true) {
    firstApi++;
  }
  const handleChangePizza = () => {
    setPizzaChecked(!pizzaChecked);
  };
  if (pizzaChecked === true) {
    secondApi++;
  }
  const handleChangePopcorn = () => {
    setPopcornChecked(!popcornChecked);
  };
  if (popcornChecked === true) {
    secondApi++;
  }
  const handleChangeSoda = () => {
    setSodaChecked(!sodaChecked);
  };
  if (sodaChecked === true) {
    secondApi++;
  }

  const [showApiResult, setShowApiResult] = useState(false);
  const handleShowApiResult = () => {
    setShowApiResult(!showApiResult);
  };

  return (
    <div>
      <div className="questionnaire">
        <div className={showApiResult ? 'hide-api' : 'api-result'}>
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
                <div className={fauteuilChecked ? 'isChecked' : 'notChecked'}>
                  <img
                    src={fauteuil}
                    alt="fauteuil"
                    type="checkbox"
                    couchChecked={fauteuilChecked}
                    onClick={handleChangeFauteuil}
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
                    couchChecked={popcornChecked}
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
                    couchChecked={sodaChecked}
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
          className={showApiResult ? 'hide-result' : 'show-result'}
          onClick={handleShowApiResult}
        >
          <p>Show your result</p>
        </button>
        <button
          className={showApiResult ? 'show-retry' : 'hide-retry'}
          onClick={handleShowApiResult}
        >
          <p> Retry</p>
        </button>
      </div>
      <div className={showApiResult ? 'api-result' : 'hide-api'}>
        {firstApi > secondApi
          ? popularMovies?.map((movie, index) => (
              <div className="movie-dispatch" key={index}>
                <h1 className="test-title-api">{movie.original_title}</h1>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                  className="test-img-api"
                />
              </div>
            ))
          : recentMovies?.map((movie, index) => (
              <div className="movie-dispatch" key={index}>
                <h1 className="test-title-api">{movie.original_title}</h1>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                  className="test-img-api"
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Home;
