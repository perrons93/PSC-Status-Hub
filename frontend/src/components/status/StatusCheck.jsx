import React from "react";
import PropTypes from "prop-types";
import { Glyphicon, Label } from "react-bootstrap";

const styles = {
  container: {
    fontSize: 18,
    padding: 10
  },
  passing: {
    color: "green"
  },
  failing: {
    color: "red"
  },
  glyphicon: {
    marginRight: 10
  },
  icon: {
    float: "left",
    fontSize: 24
  },
  description: {
    textAlign: "left",
    marginLeft: 75,
    paddingLeft: 40,
    paddingTop: 5
  }
};

// This component is intended for internal use only and does not use styles or
// components of public facing CAT system.
class StatusCheck extends React.PureComponent {
  static propTypes = {
    isPassing: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
  };

  render() {
    const { description, isPassing } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.icon}>
          {isPassing && (
            <div style={styles.passing}>
              <Glyphicon style={styles.glyphicon} glyph="ok-circle" />
              <Label>Pass</Label>
            </div>
          )}
          {!isPassing && (
            <div style={styles.failing}>
              <Glyphicon style={styles.glyphicon} glyph="remove-circle" />
              <Label>Fail</Label>
            </div>
          )}
        </div>
        <p style={styles.description}>{description}</p>
      </div>
    );
  }
}

export default StatusCheck;
