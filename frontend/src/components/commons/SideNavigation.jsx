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

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll(id) {
    const currentScroll = document.documentElement.scrollTop;
    console.log(currentScroll);
    console.log(id);
    console.log("BIINNGg");
    this.setState({ currentNode: id });
  }

  render() {
    const body_id = this.props.navSpecs[this.state.currentNode].text;
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
        <div className="side-nav-grid-content-cell" style={styles.bodyContent} id={body_id}>
          {this.props.navSpecs.map(tab => (
            <div key={tab.id} ref={tab.id} onScroll={() => this.handleScroll(tab.id)}>
              {tab.body}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SideNavigation;
