import React, { Component } from "react";
import PropTypes from "prop-types";

export const MESSAGE_TYPE = {
  warning: "warning",
  error: "error"
};

//only useful for unit test
export let UNIT_TEST_VALIDATION = {
  validation: "",
  iconClassName: ""
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
    let iconClassName = "";
    let alertClassName = "";
    if (messageType === MESSAGE_TYPE.error) {
      alertClassName = "alert-icon alert-danger";
      iconClassName = "far fa-times-circle";
      //only useful for unit test
      UNIT_TEST_VALIDATION.validation = MESSAGE_TYPE.error;
      UNIT_TEST_VALIDATION.iconClassName = iconClassName;
    } else {
      alertClassName = "alert-icon alert-warning";
      iconClassName = "fas fa-exclamation-circle";
      //only useful for unit test
      UNIT_TEST_VALIDATION.validation = MESSAGE_TYPE.warning;
      UNIT_TEST_VALIDATION.iconClassName = iconClassName;
    }

    return (
      <div>
        <div className={alertClassName} role="alert">
          <div className="icon" aria-hidden="true">
            <i className={iconClassName} style={styles.logo} />
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
