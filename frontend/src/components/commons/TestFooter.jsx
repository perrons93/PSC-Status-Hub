import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";

const styles = {
  height: {
    height: "104px"
  },
  hr: {
    width: "100%",
    borderTop: "2px solid #96a8b2",
    margin: 0
  },
  submitBtn: {
    float: "Right",
    padding: "25px 0 0 0"
  }
};

class TestFooter extends Component {
  static propTypes = {
    submitTest: PropTypes.func.isRequired
  };

  render() {
    return (
      <div style={styles.height}>
        <hr style={styles.hr} />
        <div style={styles.submitBtn}>
          <button type="button" className="btn btn-primary" onClick={this.props.submitTest}>
            {LOCALIZE.commons.submitTestButton}
          </button>
        </div>
      </div>
    );
  }
}

export default TestFooter;
