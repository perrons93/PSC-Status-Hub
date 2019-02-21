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
    currentBody: this.props.progressSpecs[this.props.currentNode - 1].body
  };

  changeNode(diff) {
    const index = this.state.currentNode + diff;
    this.setState({ currentNode: index, currentBody: this.props.progressSpecs[index - 1].body });
  }

  render() {
    return (
      <div>
        <div aria-label="progress" className="step-indicator">
          <ul className="steps">
            {this.props.progressSpecs.map(tab => (
              <ProgressNode
                key={tab.id}
                id={tab.id}
                text={tab.text}
                current={this.state.currentNode}
              />
            ))}
          </ul>
        </div>
        {this.state.currentBody}
        {this.state.currentNode < this.props.progressSpecs.length && (
          <div>
            <button type="button" className="btn btn-primary" onClick={() => this.changeNode(1)}>
              Next
            </button>
          </div>
        )}
        {this.state.currentNode > 1 && (
          <div>
            <button type="button" className="btn btn-primary" onClick={() => this.changeNode(-1)}>
              Prev
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ProgressPane;
