import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  clickable: {
    cursor: "pointer"
  }
};

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
        <li
          id="unit-test-passed-node"
          style={styles.clickable}
          className="complete progress-node"
          onClick={() => this.props.clickFunction(this.props.id)}
        >
          {this.props.text}
          <span className="sr-only">completed</span>
        </li>
      );
    if (this.props.id === this.props.current)
      return (
        <li
          id="unit-test-active-node"
          style={styles.clickable}
          className="active progress-node"
          aria-current="true"
          onClick={() => this.props.clickFunction(this.props.id)}
        >
          {this.props.text}
        </li>
      );
    if (this.props.id > this.props.current)
      return (
        <li
          id="unit-test-future-node"
          className="progress-node"
          style={styles.clickable}
          onClick={() => this.props.clickFunction(this.props.id)}
        >
          {this.props.text}
          <span className="sr-only">not completed</span>
        </li>
      );
  }
}

export default ProgressNode;

export { styles };
