import React from 'react';
import './Article.css';
import Input from './Input';
import Title from './Title';

const Article = () => {
  return (
    <div className="article">
      Article ici
      <h1>
        <Title />
      </h1>
      <div className="art">
        <p>Ici le texte</p>
        <Input />
      </div>
    </div>
  );
};

export default Article;
