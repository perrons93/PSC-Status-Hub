import React, { Component } from "react";
import PropTypes from "prop-types";
import ProgressNode from "./ProgressNode";

class ProgressPane extends Component {
  static propTypes = {
    progressSpecs: PropTypes.array.isRequired,
    currentNode: PropTypes.number.isRequired,
    paneTitle: PropTypes.string, //optional title parameter
    exitButton: PropTypes.object // optional exit button, to leave the ProgressPane
  };

  state = {
    currentNode: this.props.currentNode,
    currentBody: this.props.progressSpecs[this.props.currentNode].body
  };

  changeNode(diff) {
    const index = this.state.currentNode + diff;
    this.setState({ currentNode: index, currentBody: this.props.progressSpecs[index].body });
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
        {this.props.paneTitle ? <h1>{this.props.paneTitle}</h1> : null}
        {this.state.currentBody}
        {this.state.currentNode < this.props.progressSpecs.length - 1 && (
          <div>
            <button type="button" className="btn btn-primary" onClick={() => this.changeNode(1)}>
              Next to {this.props.progressSpecs[this.state.currentNode + 1].text}
            </button>
          </div>
        )}
        {this.state.currentNode === this.props.progressSpecs.length - 1 && (
          <div>{this.props.exitButton}</div>
        )}
        {this.state.currentNode > 0 && (
          <div>
            <button type="button" className="btn btn-secondary" onClick={() => this.changeNode(-1)}>
              Back to {this.props.progressSpecs[this.state.currentNode - 1].text}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ProgressPane;
