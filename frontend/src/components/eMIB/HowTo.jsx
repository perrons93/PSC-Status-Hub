import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

class HowTo extends Component {
  render() {
    return (
      <div>
        <h2>{LOCALIZE.howToPageTitle}</h2>
        <h3>{LOCALIZE.emailInstructions}</h3>
        <h3>{LOCALIZE.taskInstructions}</h3>
      </div>
    );
  }
}

export default HowTo;
