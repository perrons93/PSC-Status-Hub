import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressNode extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    current: PropTypes.number.isRequired,
    clickFunction: PropTypes.func.isRequired
  };
  render() {
    if (this.props.id < this.props.current)
      return (
        <li className="complete" onClick={() => this.props.clickFunction(this.props.id)}>
          {this.props.text}
          <span className="sr-only">completed</span>
        </li>
      );
    if (this.props.id === this.props.current)
      return (
        <li
          className="active"
          aria-current="true"
          onClick={() => this.props.clickFunction(this.props.id)}
        >
          {this.props.text}
        </li>
      );
    if (this.props.id > this.props.current)
      return (
        <li onClick={() => this.props.clickFunction(this.props.id)}>
          {this.props.text}
          <span className="sr-only">not completed</span>
        </li>
      );
  }
}

export default ProgressNode;
