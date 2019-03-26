import React, { Component } from "react";
import PropTypes from "prop-types";

class InboxEmail extends Component {
  static propTypes = {
    text: PropTypes.object.isRequired
  };

  render() {
    return (
      <span>
        <div>{this.props.text}</div>
      </span>
    );
  }
}

export default InboxEmail;
