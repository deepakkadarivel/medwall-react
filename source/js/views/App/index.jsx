import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Routes from 'config/routes';

import Header from '../../components/Header/Header';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header/>
          <div className='Page'>
            <Routes/>
          </div>
        </div>
      </div>
    );
  }
}
