import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class Home extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>
          Welcome to the Compotency Assessment Tool.
        </p>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
    );
  }
}

export default Home;
