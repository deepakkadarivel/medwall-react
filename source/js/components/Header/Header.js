import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import Button from "../Global/Button/Button";
import {NavLink} from "react-router-dom";
import {routeCodes} from "../../config/routes";

const Header = () => {
  return (
    <div>
      <nav className='pt-navbar pt-fixed-top'>
        <div className='pt-navbar-group pt-align-left'>
          <div className='pt-navbar-heading'>Medwall</div>
        </div>
        <div className='pt-navbar-group pt-align-right'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={routeCodes.Home}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={routeCodes.ABOUT}
          >
            <span>About</span>
          </NavLink>
          <span className='pt-navbar-divider'/>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={routeCodes.LOGIN}
          >
            <span>Login</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {};

export default Header;
