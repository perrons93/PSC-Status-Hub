import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const styles = {
  bootstrapNav: {
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    borderBottom: "none"
  },
  afterNav: {
    //this replaces the .bootstrap-tabs > .nav:after
    content: "",
    backgroundColor: "white",
    width: 900,
    border: "1px solid #00565e",
    borderBottomColor: "transparent"
  },
  tabContent: {
    display: "block",
    WebkitTransition: "opacity 0.15s linear",
    OTransition: "opacity 0.15s linear",
    transition: "opacity 0.15s linear",
    backgroundColor: "white",
    borderWidth: "1px 1px 0 1px",
    borderStyle: "solid",
    borderColor: "#00565e",
    borderTopColor: "white",
    height: "calc(100vh - 272px)",
    width: 900
  }
};

class TabNavigation extends Component {
  static propTypes = {
    tabSpecs: PropTypes.array.isRequired,
    currentTab: PropTypes.number.isRequired,
    menuName: PropTypes.string.isRequired
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
      <div>
        <nav aria-label={this.props.menuName} role="dialog">
          <ul role="menubar" className="nav nav-tabs" style={styles.bootstrapNav}>
            {this.props.tabSpecs.map((tab, key) => (
              <span key={tab.id} onClick={() => this.selectTab(tab.id)}>
                <Tab tabName={tab.tabName} selected={tab.id === this.state.currentTab} />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </ul>
        </nav>
        <div style={styles.afterNav} />
        <div style={styles.tabContent}>{this.state.currentBody}</div>
      </div>
    );
  }
}

export default TabNavigation;
