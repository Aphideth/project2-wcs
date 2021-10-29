import React from 'react';
import './Article.css';
import Input from './Input';
import Title from './Title';

const Article = (props) => {
  return (
    <div className="article">
      Article ici
      <h1>
        <Title titleName={props.titleName} />
      </h1>
      <div className="art">
        <p>{props.text}</p>
        <Input />
      </div>
    </div>
  );
};

export default Article;
