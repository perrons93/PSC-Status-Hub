import React, { Component } from "react";
import PropTypes from "prop-types";

class InboxEmail extends Component {
  static propTypes = {
    email: PropTypes.object.isRequired
  };

  render() {
    return (
      <span>
        <div>{this.props.email.body}</div>
      </span>
    );
  }
}

export default InboxEmail;
