import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Series from './components/Series';
import Favorites from './components/Favorites';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import Curtain from './components/Curtain';

const apiKey = '5727abed527bf8c8099d66876a9bf967';
const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const fetchPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );
    const movies = await data.json();
    setPopularMovies(movies.results);
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const [recentMovies, setRecentMovies] = useState([]);
  const fetchRecentMovies = async () => {
    const data2 = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    );
    const recentMovies = await data2.json();
    setRecentMovies(recentMovies.results);
  };
  useEffect(() => {
    fetchRecentMovies();
  }, []);

  const [popularSeries, setPopularSeries] = useState([]);
  const fetchPopularSeries = async () => {
    const data3 = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=5727abed527bf8c8099d66876a9bf967&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
    );
    const popularSeries = await data3.json();
    setPopularSeries(popularSeries.results);
  };
  useEffect(() => {
    fetchPopularSeries();
  }, []);

  const [recentSeries, setRecentSeries] = useState([]);
  const fetchRecentSeries = async () => {
    const data4 = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
    );
    const recentSeries = await data4.json();
    setRecentSeries(recentSeries.results);
  };
  useEffect(() => {
    fetchRecentSeries();
  }, []);

  const [movieId, setMovieId] = useState(0);

  return (
    <Router>
      <div>
        <header>
          <NavBar popularMovies={popularMovies} />
        </header>
        <div>
          <Curtain />
        </div>
        <main>
          <Switch>
            <Route exact path="/">
              <Home popularMovies={popularMovies} recentMovies={recentMovies} />
            </Route>
            <Route path="/Movies">
              <Movies
                popularMovies={popularMovies}
                recentMovies={recentMovies}
                setMovieId={setMovieId}
              />
            </Route>
            <Route path="/Series">
              <Series
                popularSeries={popularSeries}
                recentSeries={recentSeries}
              />
            </Route>
            <Route path="/Favorites">
              <Favorites />
            </Route>
            <Route path="/OurTeam">
              <OurTeam />
            </Route>
            <Route exact path="/movie/:id">
              <Movie movieId={movieId} />
            </Route>
          </Switch>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

App.propTypes = {
  movieId: PropTypes.number,
};

export default App;
