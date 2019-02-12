import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

class Confirmation extends Component {
  render() {
    return (
      <div>
        <p>{LOCALIZE.submissionConfirmed}</p>
        <a style={{ color: "blue" }} href="/experiment">
          {LOCALIZE.exitTest}
        </a>
      </div>
    );
  }
}

export default Confirmation;
