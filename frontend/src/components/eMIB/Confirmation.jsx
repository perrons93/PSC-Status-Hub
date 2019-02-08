import React, { Component } from "react";
import { STRINGS } from "./Emib";

class Confirmation extends Component {
  render() {
    return (
      <div>
        <p>{STRINGS.submissionConfirmed}</p>
        <a style={{ color: "blue" }} href="/experiment">
          {STRINGS.exitTest}
        </a>
      </div>
    );
  }
}

export default Confirmation;
