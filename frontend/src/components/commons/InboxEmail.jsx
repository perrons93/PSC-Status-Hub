import React, { Component } from "react";
import PropTypes from "prop-types";

class InboxEmail extends Component {
  static propTypes = {
    email: PropTypes.object.isRequired
  };

  render() {
    return (
      <span>
        <div>{this.props.email.subject}</div>
        <div>{this.props.email.from}</div>
        <div>{this.props.email.to}</div>
        <div>{this.props.email.date}</div>
        <div>{this.props.email.body}</div>
      </span>
    );
  }
}
export default InboxEmail;
