import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from 'views/Home';
import About from 'views/About';
import NotFound from 'views/NotFound';
import Login from '../components/Login/Login';

const publicPath = '/';

export const routeCodes = {
  Home: publicPath,
  ABOUT: `${publicPath}about`,
  LOGIN: `${publicPath}login`,
};

export default () => (
  <Switch>
    <Route exact path={publicPath} component={Home}/>
    <Route path={routeCodes.ABOUT} component={About}/>
    <Route path={routeCodes.LOGIN} component={Login}/>
    <Route path='*' component={NotFound}/>
  </Switch>
);
