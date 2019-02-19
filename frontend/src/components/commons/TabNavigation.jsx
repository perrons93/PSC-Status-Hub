import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class TabNavigation extends Component {
  static propTypes = {
    tabSpecs: PropTypes.array.isRequired,
    currentTab: PropTypes.number.isRequired
  };

  state = {
    currentTab: this.props.currentTab,
    currentBody: this.props.tabSpecs[this.props.currentTab].body
  };

  selectTab(id) {
    this.setState({ currentTab: id, currentBody: this.props.tabSpecs[id].body });
  }

  render() {
    return (
      <div className="bootstrap-tabs">
        <ul role="tablist" className="nav nav-tabs">
          {this.props.tabSpecs.map((tab, key) => (
            <span key={tab.id} onClick={() => this.selectTab(tab.id)}>
              <Tab tabName={tab.tabName} selected={tab.id == this.state.currentTab} />
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </ul>
        <div className="tab-content">{this.state.currentBody}</div>
      </div>
    );
  }
}

export default TabNavigation;
