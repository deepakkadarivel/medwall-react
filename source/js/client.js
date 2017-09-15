import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import 'babel-polyfill';
import {
  ApolloProvider,
  createNetworkInterface,
  ApolloClient,
} from 'react-apollo';

import Client from 'views/Client';

import es6Promise from 'es6-promise';
import 'isomorphic-fetch';

// Load SCSS
import '../scss/app.scss';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    req.options.headers['access_token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIyMTc2YTUwLTlhMTEtMTFlNy1hNGFlLWVkNDc2ZTQzYWY2YiIsImlhdCI6MTUwNTQ4MDU1MSwiZXhwIjoxNTA1NDgyMzUxfQ.WsqkJI1QItdlHll1z9O6oVJCQjFJZKTfMawxpRSH6Lk';
    next();
  },
}]);

const client = new ApolloClient({networkInterface});

es6Promise.polyfill();

const render = Component => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </ApolloProvider>,
    document.getElementById('root')
  );
};

// Render app
render(Client);

if (module.hot) {
  module.hot.accept('./views/Client/', () => {
    const NewClient = require('./views/Client/index').default; // eslint-disable-line global-require

    render(NewClient);
  });
}
