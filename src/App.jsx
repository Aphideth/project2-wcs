import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Series from './components/Series';
import Favorites from './components/Favorites';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';

const apiKey = '5727abed527bf8c8099d66876a9bf967';
const App = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&region=FR&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );
    const movies = await data.json();
    setItems(movies.results);
    // console.log(movies.results);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Router>
      <div>
        <header>
          <NavBar items={items} />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home items={items} />
            </Route>
            <Route path="/Movies">
              <Movies />
            </Route>
            <Route path="/Series">
              <Series />
            </Route>
            <Route path="/Favorites">
              <Favorites />
            </Route>
            <Route path="/OurTeam">
              <OurTeam />
            </Route>
          </Switch>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
