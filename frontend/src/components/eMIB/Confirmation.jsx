import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

class Confirmation extends Component {
  render() {
    return (
      <div>
        <p>{LOCALIZE.emibTest.confirmationPage.submissionConfirmed}</p>
        <a style={{ color: "blue" }} href="/experiment">
          {LOCALIZE.commons.exitTest}
        </a>
      </div>
    );
  }
}

export default Confirmation;
