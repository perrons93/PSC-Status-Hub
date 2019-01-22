/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import './App.css';
import StatusCheck from './StatusCheck.jsx';

class Status extends Component {
  render() {
    return (
      <div>
        <h2>Status</h2>
        <p>
          This page will contain status information about the state of the application.
        </p>
        <StatusCheck description={'Front end works'} isPassing={true} />
        <StatusCheck description={'Back end works'} isPassing={false} />
        <StatusCheck description={'Database works'} isPassing={false} />
      </div>
    );
  }
}

export default Status;
