import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Series from './components/Series';
import Favorites from './components/Favorites';
import OurTeam from './components/OurTeam';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
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
    </Router>
  );
};

export default App;
