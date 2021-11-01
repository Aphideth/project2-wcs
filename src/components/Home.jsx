import React from 'react';
import Carrousel from './Carrousel';
import Article from './Article';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Carrousel titleName="Les dernières nouveautés"/>
      <Carrousel titleName="Films du moment"/>
      <Carrousel titleName="Séries du moment"/>
      <Article 
        articleName="Ajoutez vos films et séries préférées dans vos favoris!" 
        text="bla bla bla le texte" 
      />
    </div>
  );
};

export default Home;
