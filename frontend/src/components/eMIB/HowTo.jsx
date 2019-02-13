import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

class HowTo extends Component {
  render() {
    return (
      <div>
        <h2>{LOCALIZE.emibTest.howToPage.title}</h2>
        <h3>{LOCALIZE.emibTest.howToPage.emailInstructions}</h3>
        <h3>{LOCALIZE.emibTest.howToPage.taskInstructions}</h3>
      </div>
    );
  }
}

export default HowTo;
