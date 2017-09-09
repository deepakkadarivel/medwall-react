import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({buttonClass, name}) => {
  return (
    <div className='row justifyCenter'>
      <button type='button' className={buttonClass}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  buttonClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
