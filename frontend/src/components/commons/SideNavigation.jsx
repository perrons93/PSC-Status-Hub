import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/side-nav.css";

const styles = {
  ul: {
    borderBottom: "none"
  },
  li: {
    listStyleType: "none"
  },
  buttonList: {
    width: 240,
    paddingRight: 25,
    marginTop: 18
  },
  button: {
    width: 200,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    borderRadius: 4,
    padding: 6
  },
  bodyContent: {
    overflow: "auto",
    paddingRight: 20,
    height: "calc(100vh - 220px)"
  },
  secondaryButton: {
    border: "none"
  },
  primaryButton: {
    border: "2px solid #009fae"
  }
};

class SideNavigation extends Component {
  static propTypes = {
    navSpecs: PropTypes.array.isRequired,
    currentNode: PropTypes.number.isRequired
  };

  state = {
    currentNode: this.props.currentNode
  };

  changeNode(id) {
    this.setState({ currentNode: id });
    this.refs[id].scrollIntoView({ block: "start", behavior: "smooth" });
  }

  onScroll = () => {
    const buffer = 50; // buffer to shift the "currentView"
    const currentView = document
      .getElementById("side-nav-grid-content-cell")
      .getBoundingClientRect();
    var id = this.state.currentNode; //default to currentNode
    for (var i = this.props.navSpecs.length - 1; i >= 0; i--) {
      var tab = this.props.navSpecs[i];
      var element = document.getElementById(tab.text).getBoundingClientRect();
      // Verify that the top is at the same height or higher than the top and the bottom is still below the top
      if (element.top <= currentView.top + buffer && element.bottom >= currentView.top + buffer) {
        id = i;
      }
    }
    this.setState({ currentNode: id });
  };

  render() {
    return (
      <div className="side-nav-grid">
        <nav className="side-nav-grid-buttons-cell" style={styles.buttonList}>
          <ul className="nav nav-tabs" style={styles.ul}>
            {this.props.navSpecs.map(tab => (
              <div key={tab.id}>
                {tab.id === this.state.currentNode && (
                  <li style={styles.li} aria-current="page">
                    <button
                      className="btn-primary"
                      style={{ ...styles.button, ...styles.primaryButton }}
                      onClick={() => this.changeNode(tab.id)}
                    >
                      {tab.text}
                    </button>
                  </li>
                )}
                {tab.id !== this.state.currentNode && (
                  <li style={styles.li}>
                    <button
                      className="btn-secondary"
                      style={{ ...styles.button, ...styles.secondaryButton }}
                      onClick={() => this.changeNode(tab.id)}
                    >
                      {tab.text}
                    </button>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </nav>
        <div
          className="side-nav-grid-content-cell"
          style={styles.bodyContent}
          id="side-nav-grid-content-cell"
          onScroll={this.onScroll}
        >
          {this.props.navSpecs.map(tab => (
            <div id={tab.text} key={tab.id} ref={tab.id}>
              {tab.body}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SideNavigation;
