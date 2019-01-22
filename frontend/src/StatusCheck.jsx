/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class StatusCheck extends Component {
  static propTypes = {
    isPassing: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  };

  render() {
    const { description, isPassing } = this.props;

    return (
      <div>
        <div>
          {isPassing
            && <div>check</div>
          }
          {!isPassing
            && <div>fail</div>
          }
        </div>
        <p>
          {description}
        </p>
      </div>
    );
  }
}

export default StatusCheck;
