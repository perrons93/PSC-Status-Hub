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
  render() {
    return <div>STUBBED SideNavigation Component</div>;
  }
}

export default SideNavigation;
