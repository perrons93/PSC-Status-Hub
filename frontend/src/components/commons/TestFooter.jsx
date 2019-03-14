import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";

const styles = {
  footer: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: 1140,
    height: 72
  },
  hr: {
    width: "100%",
    borderTop: "2px solid #96a8b2",
    margin: 0
  },
  submitBtn: {
    float: "right",
    paddingTop: 17
  },
  quitTestBtn: {
    float: "left",
    paddingTop: 17
  }
};

class TestFooter extends Component {
  static propTypes = {
    submitTest: PropTypes.func.isRequired,
    quitTest: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <hr style={styles.hr} />
        <div style={styles.footer}>
          <div style={styles.submitBtn}>
            <button
              id="unit-test-submit-btn"
              type="button"
              className="btn btn-primary"
              onClick={this.props.submitTest}
            >
              {LOCALIZE.commons.submitTestButton}
            </button>
          </div>
          <div style={styles.quitTestBtn}>
            <button
              id="unit-test-quit-btn"
              type="button"
              className="btn btn-danger"
              onClick={this.props.quitTest}
            >
              {LOCALIZE.commons.quitTest}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TestFooter;
