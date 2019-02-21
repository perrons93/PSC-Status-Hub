import React, { Component } from "react";
import PropTypes from "prop-types";
import ProgressNode from "./ProgressNode";
import LOCALIZE from "../../text_resources";

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
      <div className="progress-pane emib-text-zone">
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
        {this.props.paneTitle ? <h1 className="progress-pane">{this.props.paneTitle}</h1> : null}
        {this.state.currentBody}
        <div className="centeredButtons">
          {this.state.currentNode < this.props.progressSpecs.length - 1 && (
            <button type="button" className="btn btn-primary" onClick={() => this.changeNode(1)}>
              {LOCALIZE.commons.nextButton}
            </button>
          )}
          {this.state.currentNode === this.props.progressSpecs.length - 1 && this.props.exitButton}
          {this.state.currentNode > 0 && (
            <button type="button" className="btn btn-secondary" onClick={() => this.changeNode(-1)}>
              {LOCALIZE.commons.backButton}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ProgressPane;
