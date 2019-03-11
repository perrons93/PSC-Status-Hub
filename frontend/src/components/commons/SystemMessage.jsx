import React, { Component } from "react";
import PropTypes from "prop-types";

export const MESSAGE_TYPE = {
  warning: "warning",
  error: "error"
};

export let CLASS_NAME = {
  alert: "",
  icon: ""
};

const styles = {
  logo: {
    fontSize: "40px"
  },
  textBox: {
    textAlign: "left",
    paddingLeft: 25
  }
};

class SystemMessage extends Component {
  static propTypes = {
    messageType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  };

  render() {
    const { title, message, messageType } = this.props;
    if (messageType === MESSAGE_TYPE.error) {
      CLASS_NAME.alert = "alert-icon alert-danger";
      CLASS_NAME.icon = "far fa-times-circle";
    } else {
      CLASS_NAME.alert = "alert-icon alert-warning";
      CLASS_NAME.icon = "fas fa-exclamation-circle";
    }

    return (
      <div>
        <div className={CLASS_NAME.alert} role="alert">
          <div className="icon" aria-hidden="true">
            <i className={CLASS_NAME.icon} style={styles.logo} />
          </div>
          <div style={styles.textBox}>
            <h3>{title}</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SystemMessage;
