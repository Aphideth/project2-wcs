import React from 'react';
import Carrousel from './Carrousel';
import Article from './Article';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <p>Je suis la Home page</p>
      <Carrousel titleName="Carousel des nouveautés"/>
      <Carrousel titleName="Carousel des films"/>
      <Carrousel titleName="Carousel des séries"/>
      <Article titleName="Titre de l'article" text="blablabla le texte" />
    </div>
  );
};

export default Home;
