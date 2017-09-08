import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <div className='App'>
        <Header />
      </div>
    );
  }
}
