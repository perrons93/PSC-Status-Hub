import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  logo: {
    fontSize: "40px"
  },
  textBox: {
    textAlign: "left",
    paddingLeft: 25
  }
};

class ErrorMessage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  };

  render() {
    const { title, message } = this.props;
    return (
      <div className="alert-icon alert-danger" role="alert">
        <div className="icon" aria-hidden="true">
          <i className="far fa-times-circle" style={styles.logo} />
        </div>
        <div style={styles.textBox}>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    );
  }
}

export default ErrorMessage;
