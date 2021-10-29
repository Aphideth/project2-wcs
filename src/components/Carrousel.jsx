import React from 'react';
import './Carrousel.css';
import Title from './Title';

const Carrousel = (props) => {
  return (
    <div className="carrousel">
      <h1>
        <Title titleName={props.titleName}/>
      </h1>
      <p>Ceci est le carousel</p>
    </div>
  );
};

export default Carrousel;
