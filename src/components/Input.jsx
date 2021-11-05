import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <div >
      <input type="button" id="button" value={props.text_button} />
    </div>
  );
};

export default Input;
