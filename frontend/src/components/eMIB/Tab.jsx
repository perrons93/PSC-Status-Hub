import React, { Component } from "react";
import PropTypes from "prop-types";

const SELECTED = "true";

const UNSELECTED = "false";

class Tab extends Component {
  static propTypes = {
    tabName: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired
  };

  render() {
    return (
      <span>
        {this.props.selected === UNSELECTED && (
          <span style={{ color: "blue" }}>{this.props.tabName}</span>
        )}
        {this.props.selected === SELECTED && (
          <span style={{ color: "black" }}>{this.props.tabName}</span>
        )}
      </span>
    );
    //TODO can we pass a function as a prop??
  }
}

export default Tab;

export { SELECTED, UNSELECTED };
