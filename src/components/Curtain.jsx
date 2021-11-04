import React from 'react';
import './Curtain.css';
import curtain from "../assets/img/PNGIX.com_theatre-png_6519821.png"

const Curtain = () => {
  return (
    <div>
      <img src={curtain} className="curtain"/>
    </div>
  );
};

export default Curtain 