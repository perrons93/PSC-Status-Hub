import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  email: {
    textAlign: "left"
  }
};

class Email extends Component {
  static propTypes = {
    email: PropTypes.object.isRequired
  };

  render() {
    const email = this.props.email;
    return (
      <div style={styles.email}>
        <div>{email.subject}</div>
        <div>{email.from}</div>
        <div>{email.to}</div>
        <div>{email.date}</div>
        <div>{email.body}</div>
      </div>
    );
  }
}
export default Email;
