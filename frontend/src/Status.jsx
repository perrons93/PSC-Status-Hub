/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './App.css';
import StatusCheck from './StatusCheck.jsx';

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

class Status extends Component {
  componentWillMount() {
    this.checkBackend();
  }

  /* Front end is always running successfully if this page loads so it will always be true */
  state = {
    backendStatus: false,
    databaseStatus: false,
    frontendStatus: true,
  }

  checkBackend = async () => {
    const test = await fetch('http://localhost:80/api/', {
      method: 'GET',
      headers,
      cache: 'default',
    });
    const testJson = await test.json();
    if (testJson && testJson.status) {
      this.setState({ backendStatus: true });
    }
  }

  render() {
    return (
      <div>
        <h2>Status</h2>
        <p>
          This page will contain status information about the state of the application.
        </p>
        
        <StatusCheck
          description={'Front end application built and serving successfully'}
          isPassing={this.state.frontendStatus}
        />
        <StatusCheck description={'Back end works'} isPassing={this.state.backendStatus} />
        <StatusCheck description={'Database works'} isPassing={this.state.databaseStatus} />
      </div>
    );
  }
}

export default Status;
