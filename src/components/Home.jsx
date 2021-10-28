import React from 'react';
import Carrousel from './Carrousel';
import Article from './Article';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <p>Je suis la Home page</p>
      <Carrousel />
      <Carrousel />
      <Carrousel />
      <Article />
    </div>
  );
};

export default Home;
