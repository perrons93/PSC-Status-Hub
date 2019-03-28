import React, { Component } from "react";
import PropTypes from "prop-types";

class Email extends Component {
  static propTypes = {
    email: PropTypes.object.isRequired
  };

  render() {
    const email = this.props.email;
    return (
      <span>
        <div>{email.subject}</div>
        <div>{email.from}</div>
        <div>{email.to}</div>
        <div>{email.date}</div>
        <div>{email.body}</div>
      </span>
    );
  }
}
export default Email;
