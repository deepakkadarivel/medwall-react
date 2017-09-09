import React from 'react';
import PropTypes from 'prop-types';

import './inputGroup.scss';

const InputGroup = ({icon, placeholder, type}) => {
  return (
    <div className='row justifyCenter'>
      <div className='pt-input-group pt-large loginInputGroup'>
        <span className={icon}/>
        <input type={type} className='pt-input' placeholder={placeholder}/>
      </div>
    </div>
  );
};

InputGroup.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

InputGroup.defaultProps = {
  icon: '',
  placeholder: '',
  type: 'text',
};

export default InputGroup;
