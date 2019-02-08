import React, { Component } from "react";
import Emib, { STRINGS } from "./Emib";

class HowTo extends Component {
  render() {
    return (
      <div>
        <h2>{STRINGS.howToPageTitle}</h2>
        <h3>{STRINGS.emailInstructions}</h3>
        <h3>{STRINGS.taskInstructions}</h3>
      </div>
    );
  }
}

export default HowTo;
