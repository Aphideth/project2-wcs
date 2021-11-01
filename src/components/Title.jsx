import React from 'react';
import './Title.css';
//import PropTypes from 'prop-types';

const Title = (props/* { titleName } */) => {
  return (
    <div className="title">
      <h2>{props.titleName}</h2>
    </div>
  );
};
/*Title.propTypes = {
  titleName: PropTypes.string.isRequired,
};
Ce qui est commenté est la façon de faire des props validation*/

export default Title;
