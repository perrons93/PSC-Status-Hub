import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import Overview from "./Overview";
import TipsOnTest from "./TipsOnTest";
import TestInstructions from "./TestInstructions";
import Evaluation from "./Evaluation";

class HowTo extends Component {
  render() {
    return (
      <div>
        <h2>{LOCALIZE.emibTest.howToPage.title}</h2>
        <h3>{LOCALIZE.emibTest.howToPage.emailInstructions}</h3>
        <h3>{LOCALIZE.emibTest.howToPage.taskInstructions}</h3>
        <Overview />
        <TipsOnTest />
        <TestInstructions />
        <Evaluation />
      </div>
    );
  }
}

export default HowTo;
