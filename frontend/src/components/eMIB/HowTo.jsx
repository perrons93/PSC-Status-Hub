import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import Overview from "./Overview";
import TipsOnTest from "./TipsOnTest";
import TestInstructions from "./TestInstructions";
import Evaluation from "./Evaluation";
import ProgressBar from "../commons/ProgressBar";

class HowTo extends Component {
  static propTypes = {
    inTest: PropTypes.bool.isRequired
  };

  render() {
    const PROGRESS = [
      { id: 1, text: "prog 1" },
      { id: 2, text: "prog 2" },
      { id: 3, text: "prog 3" },
      { id: 4, text: "prog 4" }
    ];
    return (
      <div>
        <ProgressBar progressSpecs={PROGRESS} currentNode={1} />
        <h2>{LOCALIZE.emibTest.howToPage.title}</h2>
        <h3>{LOCALIZE.emibTest.howToPage.emailInstructions}</h3>
        <h3>{LOCALIZE.emibTest.howToPage.taskInstructions}</h3>
        {this.props.inTest === true && <p>True</p>}
        {this.props.inTest === false && <p>False</p>}
        <Overview />
        <TipsOnTest />
        <TestInstructions />
        <Evaluation />
      </div>
    );
  }
}

export default HowTo;
