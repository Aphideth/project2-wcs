import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Movie from './components/Movie';
import Series from './components/Series';
import Serie from './components/Serie';
import Favorites from './components/Favorites';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import Curtain from './components/Curtain';
import apiKey from './API_KEY';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const fetchPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
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
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=fr-FR`
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
      `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
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
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}&language=fr-FR`
    );
    const recentSeries = await data4.json();
    setRecentSeries(recentSeries.results);
  };
  useEffect(() => {
    fetchRecentSeries();
  }, []);

  const [movieId, setMovieId] = useState(0);
  const [serieId, setSerieID] = useState(0);

  return (
    <Router>
      <div>
        <header>
          <NavBar popularMovies={popularMovies} setMovieId={setMovieId} />
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
                setSerieID={setSerieID}
              />
            </Route>
            <Route exact path="/serie/:id">
              <Serie serieId={serieId} />
            </Route>
            <Route path="/Favorites">
              <Favorites setMovieId={setMovieId} setSerieID={setSerieID} />
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
