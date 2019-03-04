import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/side-nav.css";

const styles = {
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
    const curVw = document.getElementById("side-nav-grid-content-cell").getBoundingClientRect();
    var id = 0;
    for (var i = this.props.navSpecs.length - 1; i >= 0; i--) {
      var tab = this.props.navSpecs[i];
      var elmnt = document.getElementById(tab.text).getBoundingClientRect();
      // Verify tha tthe top is at the same height or higher than tht etop and the bottom is still below the top
      if (elmnt.top <= curVw.top && elmnt.bottom >= curVw.top) {
        id = i;
      }
    }
    this.setState({ currentNode: id });
  };

  render() {
    return (
      <div className="side-nav-grid">
        <div className="side-nav-grid-buttons-cell" style={styles.buttonList}>
          {this.props.navSpecs.map(tab => (
            <div key={tab.id}>
              {tab.id === this.state.currentNode && (
                <button
                  className="btn-primary"
                  style={{ ...styles.button, ...styles.primaryButton }}
                  onClick={() => this.changeNode(tab.id)}
                >
                  {tab.text}
                </button>
              )}
              {tab.id !== this.state.currentNode && (
                <button
                  className="btn-secondary"
                  style={{ ...styles.button, ...styles.secondaryButton }}
                  onClick={() => this.changeNode(tab.id)}
                >
                  {tab.text}
                </button>
              )}
            </div>
          ))}
        </div>
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
