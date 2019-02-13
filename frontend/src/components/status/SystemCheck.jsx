import React from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";

const styles = {
  passing: {
    color: "green"
  },
  failing: {
    color: "red"
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
      <tr>
        <td>{description}</td>
        <td>
          {isPassing && (
            <div style={styles.passing}>
              <i style={styles.glyphicon} className="fas fa-check-circle" />
              <span>{LOCALIZE.commons.passStatus}</span>
              <span style={styles.currentSpecs}>{currentSettingsDetails}</span>
            </div>
          )}
          {!isPassing && (
            <div style={styles.failing}>
              <i style={styles.glyphicon} className="fas fa-times-circle" />
              <span>{LOCALIZE.commons.failStatus}</span>
              <span style={styles.currentSpecs}>{currentSettingsDetails}</span>
            </div>
          )}
        </td>
      </tr>
    );
  }
}

export default SystemCheck;
