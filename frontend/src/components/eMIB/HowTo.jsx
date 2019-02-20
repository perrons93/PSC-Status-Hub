import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import Overview from "./Overview";
import TipsOnTest from "./TipsOnTest";
import TestInstructions from "./TestInstructions";
import Evaluation from "./Evaluation";
import PropTypes from "prop-types";

class HowTo extends Component {
  static propTypes = {
    inTest: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div>
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
