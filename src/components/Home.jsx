import React, { useState, useEffect } from 'react';
// import beer from '../assets/img/beer.png';
import swords from '../assets/img/swords.png';
import heart from '../assets/img/heart.png';
import couch from '../assets/img/couch.png';
import pizza from '../assets/img/pizza.png';
import popcorn from '../assets/img/popcorn.png';
import soda from '../assets/img/soda.png';
import './Home.css';

const apiKey = '5727abed527bf8c8099d66876a9bf967';

const Home = () => {
  // const [beerChecked, setBeerChecked] = useState(false);
  const [swordChecked, setSwordChecked] = useState(false);
  const [heartChecked, setHeartChecked] = useState(false);
  const [couchChecked, setCouchChecked] = useState(false);
  const [pizzaChecked, setPizzaChecked] = useState(false);
  const [popcornChecked, setPopcornChecked] = useState(false);
  const [sodaChecked, setSodaChecked] = useState(false);
  let firstApi = 0;
  let secondApi = 0;
  let randomUrl = '';

  // const handleChangeBeer = () => {
  //   setBeerChecked(!beerChecked);
  // };
  // if (beerChecked === true) {
  //   result++;
  // }
  const handleChangeSword = () => {
    setSwordChecked(!swordChecked);
  };
  if (swordChecked === true) {
    firstApi++;
  }
  const handleChangeHeart = () => {
    setHeartChecked(!heartChecked);
  };
  if (heartChecked === true) {
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

  console.log('firstApi', firstApi);
  console.log('secondApi', secondApi);

  if (firstApi > secondApi) {
    randomUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  } else if (firstApi < secondApi) {
    randomUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
  } else {
    randomUrl = '';
  }

  const [result, setResult] = useState([]);
  const fetchResult = async (randomUrl) => {
    const datas = await fetch(randomUrl);
    const questionnaire = await datas.json();
    setResult(questionnaire.results);
  };
  console.log('randomUrl', randomUrl);
  useEffect(() => {
    fetchResult();
  }, [randomUrl]);

  const [showApiResult, setShowApiResult] = useState(false);
  const handleShowApiResult = () => {
    setShowApiResult(!showApiResult);
  };

  console.log('showApiResult', showApiResult);
  // if (beerChecked === true) {
  //   result++;
  // }
  // if (swordChecked === true) {
  //   result++;
  // }
  // if (heartChecked === true) {
  //   result++;
  // }
  // if (couchChecked === true) {
  //   result++;
  // }
  // if (pizzaChecked === true) {
  //   result++;
  // }
  // if (popcornChecked === true) {
  //   result++;
  // }
  // if (sodaChecked === true) {
  //   result++;
  // }

  // switch (result) {
  //   case (result = 1):

  //     randomUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&page=1&genres=Action`;
  //     break;
  //   case (result = 3):
  //   case (result = 4):
  //     randomUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&page=1&genres=Comedy`;
  //     break;
  //   case (result = 5):
  //   case (result = 6):
  //   case (result = 7):
  //     randomUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&page=1&genres=Animation`;
  //     break;
  //   default:
  //     console.log(`Please select image`);
  // }
  // console.log(randomUrl);

  return (
    <div>
      {/* first label */}
      {/* <div>
        <label>
          <div>
            <img className="img" src={beer} alt="beer" style={{ width: 100 }} />
          </div>
          <div>
            <input
              type="checkbox"
              beerChecked={beerChecked}
              onChange={handleChangeBeer}
            />
            My Value
          </div>
        </label>
        <p>Is `&#34;`My Value`&#34;` checked? {beerChecked.toString()}</p>
      </div> */}
      {/* 2eme label */}
      <div className="questionnaire">
        <div className="colonne1">
          <div>
            <label>
              <div>
                <img
                  src={swords}
                  alt="swords"
                  style={{ width: 100 }}
                  type="checkbox"
                  swordChecked={swordChecked}
                  onClick={handleChangeSword}
                />
              </div>
            </label>
          </div>
          {/* <p>Is "My Value" checked? {swordChecked.toString()}</p> */}
          {/* 3eme label */}
          <div>
            <label>
              <div>
                <img
                  src={heart}
                  alt="love"
                  type="checkbox"
                  style={{ width: 100 }}
                  heartChecked={heartChecked}
                  onClick={handleChangeHeart}
                />
              </div>
            </label>
          </div>
          {/*<p>Is "My Value" checked? {heartChecked.toString()}</p> */}
          {/* 4eme label */}
          <div>
            <label>
              <div>
                <img
                  src={couch}
                  alt="couch"
                  type="checkbox"
                  style={{ width: 100 }}
                  couchChecked={couchChecked}
                  onClick={handleChangeCouch}
                />
              </div>
              {/* <p>Is "My Value" checked? {couchChecked.toString()}</p> */}
            </label>
          </div>
        </div>
        {/* 5eme label */}
        <div className="colonne2">
          <div>
            <label>
              <div>
                <img
                  src={pizza}
                  alt="pizza"
                  type="checkbox"
                  style={{ width: 100 }}
                  couchChecked={pizzaChecked}
                  onClick={handleChangePizza}
                />
              </div>
              {/* <p>Is "My Value" checked? {pizzaChecked.toString()}</p> */}
            </label>
          </div>
          {/* 6eme label */}
          <div>
            <label>
              <div>
                <img
                  src={popcorn}
                  alt="popcorn"
                  type="checkbox"
                  style={{ width: 100 }}
                  couchChecked={popcornChecked}
                  onClick={handleChangePopcorn}
                />
              </div>
              {/* <p>Is "My Value" checked? {popcornChecked.toString()}</p> */}
            </label>
          </div>
          {/* 7eme label */}
          <div>
            <label>
              <div>
                <img
                  src={soda}
                  alt="soda"
                  type="checkbox"
                  style={{ width: 100 }}
                  couchChecked={sodaChecked}
                  onClick={handleChangeSoda}
                />
              </div>
              {/* <p>Is "My Value" checked? {sodaChecked.toString()}</p> */}
            </label>
          </div>
        </div>
      </div>
      <button onClick={handleShowApiResult}>Proposition</button>
      <div className="apiResult">
        {result?.map((movie, index) => (
          <div key={index}>
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
