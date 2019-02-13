import React from "react";
import PropTypes from "prop-types";
import { Glyphicon, Label } from "react-bootstrap";
import LOCALIZE from "../../text_resources";

const styles = {
  container: {
    fontSize: 18,
    paddingLeft: 30
  },
  passing: {
    color: "green",
    padding: "10px 40px 0px 0px"
  },
  failing: {
    color: "red",
    padding: "10px 40px 0px 0px"
  },
  glyphicon: {
    marginRight: 10
  },
  icon: {
    float: "right",
    fontSize: 24,
    paddingLeft: 15
  },
  description: {
    textAlign: "left",
    paddingTop: 25
  },
  currentSpecs: {
    fontSize: 14,
    paddingTop: 8
  }
};

// This component is intended for internal use only and does not use styles or
// components of public facing CAT system.
class SystemCheck extends React.PureComponent {
  static propTypes = {
    description: PropTypes.string.isRequired,
    isPassing: PropTypes.bool.isRequired,
    currentSettingsDetails: PropTypes.string.isRequired
  };

  render() {
    const { description, isPassing, currentSettingsDetails } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.icon}>
          {isPassing && (
            <div style={styles.passing}>
              <Glyphicon style={styles.glyphicon} glyph="ok-circle" />
              <Label>{LOCALIZE.commons.passStatus}</Label>
              <p style={styles.currentSpecs}>{currentSettingsDetails}</p>
            </div>
          )}
          {!isPassing && (
            <div style={styles.failing}>
              <Glyphicon style={styles.glyphicon} glyph="remove-circle" />
              <Label>{LOCALIZE.commons.failStatus}</Label>
              <p style={styles.currentSpecs}>{currentSettingsDetails}</p>
            </div>
          )}
        </div>
        <p style={styles.description}>{description}</p>
      </div>
    );
  }
}

export default SystemCheck;
