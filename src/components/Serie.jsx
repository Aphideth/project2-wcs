import React from 'react';
import './Serie.css';
import Title from './Title';

const Serie = () => {
  return (
    <div className="Serie">
      <Title titleName="Titre de la série"/>
      <p>Je suis une image de la série</p>
      <p>Je suis la description de la série</p>
      <p>Je suis la date de sortie de la série</p>
      <p>Je suis la note de la série</p>
    </div>
  );
};

export default Serie;
