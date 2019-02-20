import React, { Component } from "react";
import PropTypes from "prop-types";
import ProgressNode from "./ProgressNode";

class ProgressIndicator extends Component {
  static propTypes = {
    progressSpecs: PropTypes.array.isRequired,
    currentStep: PropTypes.number.isRequired
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
              current={this.props.currentStep}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProgressIndicator;
