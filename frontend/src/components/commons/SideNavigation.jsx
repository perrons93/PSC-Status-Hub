import React, { Component } from "react";
import PropTypes from "prop-types";

class SideNavigation extends Component {
  static propTypes = {
    progressSpecs: PropTypes.array.isRequired,
    currentNode: PropTypes.number.isRequired
  };

  state = {
    currentNode: this.props.currentNode,
    currentBody: this.props.progressSpecs[this.props.currentNode].body
  };

  changeNode(id) {
    this.setState({ currentNode: id, currentBody: this.props.progressSpecs[id].body });
  }

  render() {
    return (
      <div className="side-nav-pane">
        <div className="side-nav-btn-list">
          {this.props.progressSpecs.map(tab => (
            <div key={tab.id}>
              {tab.id === this.state.currentNode && (
                <button
                  className="btn-primary side-nav-btn"
                  onClick={() => this.changeNode(tab.id)}
                >
                  {tab.text}
                </button>
              )}
              {tab.id !== this.state.currentNode && (
                <button
                  className="btn-secondary side-nav-btn"
                  onClick={() => this.changeNode(tab.id)}
                >
                  {tab.text}
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="side-nav-body">{this.state.currentBody}</div>
      </div>
    );
  }
}

export default SideNavigation;
