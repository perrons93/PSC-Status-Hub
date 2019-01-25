import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Glyphicon, Label } from 'react-bootstrap';

const styles = {
  container: {
    fontSize: 18,
    paddingLeft: '30px',
  },
  passing: {
    color: 'green',
    padding: '10px 40px 0px 0px',
  },
  failing: {
    color: 'red',
    padding: '10px 40px 0px 0px',
  },
  glyphicon: {
    marginRight: 10,
  },
  icon: {
    float: 'right',
    fontSize: 24,
    paddingLeft: '15px',
  },
  description: {
    textAlign: 'left',
    paddingTop: '25px',
  },
  currentSpecs: {
    fontSize: 14,
    paddingTop: '8px',
  },
};

// This component is intended for internal use only and does not use styles or
// components of public facing CAT system.
class SystemCheck extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    isPassing: PropTypes.bool.isRequired,
    screenResolutionDetected: PropTypes.string,
    browserDetected: PropTypes.string,
    javaScriptEnable: PropTypes.string,

  };

  render() {
    const {
      description, isPassing, screenResolutionDetected, browserDetected, javaScriptEnabled,
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.icon}>
          {isPassing
            && <div style={styles.passing}>
              <Glyphicon style={styles.glyphicon} glyph="ok-circle" /><Label>Pass</Label>
              <p style={styles.currentSpecs}>{screenResolutionDetected}{browserDetected}{javaScriptEnabled}</p>
            </div>
          }
          {!isPassing
            && <div style={styles.failing}>
              <Glyphicon style={styles.glyphicon} glyph="remove-circle" /><Label>Fail</Label>
              <p style={styles.currentSpecs}>{screenResolutionDetected}{browserDetected}{javaScriptEnabled}</p>
            </div>
          }
        </div>
        <p style={styles.description}>{description}</p>
      </div>
    );
  }
}

export default SystemCheck;
