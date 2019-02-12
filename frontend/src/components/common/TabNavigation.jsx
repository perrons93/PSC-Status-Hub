import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class TabNavigation extends Component {
  static propTypes = {
    tabSpecs: PropTypes.array.isRequired,
    selected: PropTypes.number.isRequired
  };

  state = {
    tabSpecs: this.props.tabSpecs,
    selected: this.props.selected
  };

  selectTab(id) {
    let tempSpecs = this.state.tabSpecs;
    tempSpecs[this.state.selected].selected = "false";
    tempSpecs[id].selected = "true";
    this.setState({ selected: id, tabSpecs: tempSpecs });
  }

  render() {
    return (
      <div>
        {this.state.tabSpecs.map((tab, key) => (
          <span key={tab.id} onClick={() => this.selectTab(tab.id)}>
            <Tab tabName={tab.tabName} selected={tab.selected} />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
    );
  }
}

export default TabNavigation;
