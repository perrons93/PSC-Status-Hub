import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    tabName: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired
  };

  render() {
    //this.setState({ curLanguage: lang });
    return <span style={{ colour: this.props.colour }}>{this.props.tabName}</span>;
    //TODO can we pass a function as a prop??
  }
}

export default Tab;
