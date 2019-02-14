import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    tabName: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  };

  render() {
    return (
      <span>
        {this.props.selected === false && (
          <button className={this.props.tabName} style={{ color: "blue", cursor: "pointer" }}>
            {this.props.tabName}
          </button>
        )}
        {this.props.selected === true && (
          <button className={this.props.tabName} style={{ color: "black", cursor: "pointer" }}>
            {this.props.tabName}
          </button>
        )}
      </span>
    );
    //TODO can we pass a function as a prop??
  }
}

export default Tab;
