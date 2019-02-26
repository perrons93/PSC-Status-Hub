import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  buttonList: {
    width: 200,
    paddingRight: 25,
    float: "left"
  },
  button: {
    width: "100%",
    marginBottom: 10
  },
  bodyContent: {
    display: "flex",
    justifyContent: "flext-end"
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
    currentNode: this.props.currentNode,
    currentBody: this.props.navSpecs[this.props.currentNode].body
  };

  changeNode(id) {
    this.setState({ currentNode: id, currentBody: this.props.navSpecs[id].body });
  }

  genButtonID(id, status) {
    return "unit-test-sidenav-button" + id + "-" + status;
  }

  render() {
    const body_id = this.props.navSpecs[this.state.currentNode].text;
    return (
      <div className="side-nav-pane">
        <div style={styles.buttonList}>
          {this.props.navSpecs.map(tab => (
            <div key={tab.id}>
              {tab.id === this.state.currentNode && (
                <button
                  id={this.genButtonID(tab.id, "selected")}
                  className="btn-primary"
                  style={{ ...styles.button, ...styles.primaryButton }}
                  onClick={() => this.changeNode(tab.id)}
                >
                  {tab.text}
                </button>
              )}
              {tab.id !== this.state.currentNode && (
                <button
                  id={this.genButtonID(tab.id, "unselected")}
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
        <div style={styles.bodyContent} id={body_id}>
          {this.state.currentBody}
        </div>
      </div>
    );
  }
}

export default SideNavigation;
