import React, { Component } from "react";
import PropTypes from "prop-types";
import ProgressNode from "./ProgressNode";

class ProgressPane extends Component {
  static propTypes = {
    progressSpecs: PropTypes.array.isRequired,
    currentNode: PropTypes.number.isRequired
  };

  state = {
    currentNode: this.props.currentNode,
    currentBody: this.props.progressSpecs[this.props.currentNode].body
  };

  render() {
    return (
      <div aria-label="progress" className="step-indicator">
        <ul className="steps">
          {this.props.progressSpecs.map(tab => (
            <ProgressNode
              key={tab.id}
              id={tab.id}
              text={tab.text}
              current={this.props.currentNode}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProgressPane;
