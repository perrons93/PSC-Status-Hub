import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab, { SELECTED, UNSELECTED } from "./Tab";

class TabNavigation extends Component {
  static propTypes = {
    tabSpecs: PropTypes.array.isRequired,
    currentTab: PropTypes.number.isRequired
  };

  state = {
    tabSpecs: this.props.tabSpecs,
    currentTab: this.props.currentTab,
    currentBody: this.props.tabSpecs[this.props.currentTab].body
  };

  selectTab(id) {
    let tempSpecs = this.state.tabSpecs;
    tempSpecs[this.state.currentTab].selected = UNSELECTED;
    tempSpecs[id].selected = SELECTED;

    this.setState({ currentTab: id, tabSpecs: tempSpecs, currentBody: tempSpecs[id].body });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.tabSpecs.map((tab, key) => (
            <span key={tab.id} onClick={() => this.selectTab(tab.id)}>
              <Tab tabName={tab.tabName} selected={tab.selected} />
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
        <div>{this.state.currentBody}</div>
      </div>
    );
  }
}

export default TabNavigation;
