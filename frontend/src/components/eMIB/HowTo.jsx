import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import Overview from "./Overview";
import TipsOnTest from "./TipsOnTest";
import TestInstructions from "./TestInstructions";
import Evaluation from "./Evaluation";
import ProgressPane from "../commons/ProgressPane";
import SideNavigation from "../commons/SideNavigation";

class HowTo extends Component {
  static propTypes = {
    inTest: PropTypes.bool.isRequired
  };

  render() {
    const PROGRESS = [
      { id: 1, text: LOCALIZE.emibTest.howToPage.overview, body: <Overview /> },
      { id: 2, text: LOCALIZE.emibTest.howToPage.tips, body: <TipsOnTest /> },
      { id: 3, text: LOCALIZE.emibTest.howToPage.instructions, body: <TestInstructions /> },
      { id: 4, text: LOCALIZE.emibTest.howToPage.evaluation, body: <Evaluation /> }
    ];

    return (
      <div>
        {this.props.inTest === false && <ProgressPane progressSpecs={PROGRESS} currentNode={1} />}
        {this.props.inTest === true && <SideNavigation progressSpecs={PROGRESS} currentNode={1} />}
      </div>
    );
  }
}

export default HowTo;
