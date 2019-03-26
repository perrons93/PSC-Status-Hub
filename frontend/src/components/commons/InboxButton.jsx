import React, { Component } from "react";
import PropTypes from "prop-types";

class InboxButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    return (
      <span>
        <div>{this.props.text}</div>
      </span>
    );
  }
}

export default InboxButton;
