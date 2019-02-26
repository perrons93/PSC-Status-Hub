import React, { Component } from "react";
import PropTypes from "prop-types";

class SideNavigation extends Component {
  static propTypes = {
    navSpecs: PropTypes.array.isRequired,
    currentNode: PropTypes.number.isRequired
  };

  state = {
    currentNode: this.props.currentNode,
    currentBody: this.props.navSpecs[this.props.currentNode].body
  };

  changeNode(id) {
    this.setState({ currentNode: id, currentBody: this.props.navSpecs[id].body });
  }

  genButtonID(id, status) {
    return "unit-test-sidenav-button" + id + "-" + status;
  }

  render() {
    const body_id = this.props.navSpecs[this.state.currentNode].text;
    return (
      <div className="side-nav-pane">
        <div className="side-nav-btn-list">
          {this.props.navSpecs.map(tab => (
            <div key={tab.id}>
              {tab.id === this.state.currentNode && (
                <button
                  id={this.genButtonID(tab.id, "selected")}
                  className="btn-primary side-nav-btn"
                  onClick={() => this.changeNode(tab.id)}
                >
                  {tab.text}
                </button>
              )}
              {tab.id !== this.state.currentNode && (
                <button
                  id={this.genButtonID(tab.id, "unselected")}
                  className="btn-secondary side-nav-btn"
                  onClick={() => this.changeNode(tab.id)}
                >
                  {tab.text}
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="side-nav-body" id={body_id}>
          {this.state.currentBody}
        </div>
      </div>
    );
  }
}

export default SideNavigation;
