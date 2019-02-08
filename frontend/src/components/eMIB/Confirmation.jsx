import React, { Component } from "react";
import Emib, { STRINGS } from "./Emib";

class Confirmation extends Component {
  render() {
    return (
      <div>
        <p>{STRINGS.submissionConfirmed}</p>
        <a href="/experiment">{STRINGS.exitTest}</a>
      </div>
    );
  }
}

export default Confirmation;
