import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class TabNavigation extends Component {
  static propTypes = {
    tabSpecs: PropTypes.array.isRequired,
    curTab: PropTypes.number.isRequired
  };

  state = {
    tabSpecs: this.props.tabSpecs,
    curTab: this.props.curTab,
    curBody: this.props.tabSpecs[this.props.curTab].body
  };

  selectTab(id) {
    let tempSpecs = this.state.tabSpecs;
    tempSpecs[this.state.curTab].selected = "false";
    tempSpecs[id].selected = "true";

    this.setState({ curTab: id, tabSpecs: tempSpecs, curBody: tempSpecs[id].body });
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
        <div>{this.state.curBody}</div>
      </div>
    );
  }
}

export default TabNavigation;
