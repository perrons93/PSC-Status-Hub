import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

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
    tempSpecs[this.state.currentTab].selected = false;
    tempSpecs[id].selected = true;

    this.setState({ currentTab: id, tabSpecs: tempSpecs, currentBody: tempSpecs[id].body });
  }

  render() {
    return (
      <div className="bootstrap-tabs">
        <div>
          <ul role="tablist" className="nav nav-tabs">
            {this.state.tabSpecs.map((tab, key) => (
              <span key={tab.id} onClick={() => this.selectTab(tab.id)}>
                <Tab tabName={tab.tabName} selected={tab.selected} />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </ul>
        </div>
        <div>{this.state.currentBody}</div>
      </div>
    );
  }
}

export default TabNavigation;
