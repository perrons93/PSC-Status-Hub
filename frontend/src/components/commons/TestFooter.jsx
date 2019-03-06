import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";

const styles = {
  hr: {
    width: "100%",
    borderTop: "2px solid #96a8b2",
    margin: 0
  }
};

class TestFooter extends Component {
  static propTypes = {
    submitTest: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <div>
          <hr style={styles.hr} />
        </div>
        <button type="button" className="btn btn-primary" onClick={this.props.submitTest}>
          {LOCALIZE.commons.submitTestButton}
        </button>
      </div>
    );
  }
}

export default TestFooter;
