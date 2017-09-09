import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from '../Global/Input/InputGroup';
import Button from '../Global/Button/Button';

class Login extends Component {

  state = {
    login: true,
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  render() {
    return (
      <div className='container loginComponent'>
        {!this.state.login &&
        <Input
          icon={'pt-icon pt-icon-user'}
          placeholder='Name'
          type='text'
          onChange={(e) => this.setState({name: e.target.value})}
        />
        }
        <Input
          icon={'pt-icon pt-icon-envelope'}
          placeholder='Email'
          type='text'
          onChange={(e) => this.setState({email: e.target.value})}
        />
        {!this.state.login &&
        <Input
          icon={'pt-icon pt-icon-phone'}
          placeholder='Phone'
          type='tel'
          onChange={(e) => this.setState({phone: e.target.value})}
        />
        }
        <Input
          icon={'pt-icon pt-icon-lock'}
          placeholder='Password'
          type='password'
          onChange={(e) => this.setState({password: e.target.value})}
        />
        <Button
          name={this.state.login ? 'Login' : 'Sign Up'}
          buttonClass='pt-button pt-large loginButton'
        />
        <div className='row justifyCenter'>
          <span>
            {this.state.login ? 'need to create an account? ' : 'already have an account? '}
            <a
              role='link'
              tabIndex='0'
              onClick={() => this.setState({login: !this.state.login})}
            >
              {this.state.login ? ' Sign Up' : ' Login'}
            </a>
          </span>
        </div>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
