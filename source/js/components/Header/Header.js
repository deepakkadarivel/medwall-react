import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = () => {
  return (
    <div>
      <nav className='pt-navbar pt-fixed-top'>
        <div className='pt-navbar-group pt-align-left'>
          <div className='pt-navbar-heading'>Medwall</div>
        </div>
        <div className='pt-navbar-group pt-align-right'>
          <button className='pt-button pt-minimal pt-icon-home'>Home</button>
          <button className='pt-button pt-minimal pt-icon-document'>Files</button>
          <span className='pt-navbar-divider' />
          <button className='pt-button pt-minimal pt-icon-user' />
          <button className='pt-button pt-minimal pt-icon-notifications' />
          <button className='pt-button pt-minimal pt-icon-cog' />
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {};

export default Header;
