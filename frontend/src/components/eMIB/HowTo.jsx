import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import Overview from "./Overview";
import TipsOnTest from "./TipsOnTest";
import TestInstructions from "./TestInstructions";
import Evaluation from "./Evaluation";
import ProgressPane from "../commons/ProgressPane";
import SideNavigation from "../commons/SideNavigation";

export const specsDefinition = () => {
  return [
    { id: 0, text: LOCALIZE.emibTest.howToPage.overview.title, body: <Overview /> },
    { id: 1, text: LOCALIZE.emibTest.howToPage.tipsOnTest.title, body: <TipsOnTest /> },
    {
      id: 2,
      text: LOCALIZE.emibTest.howToPage.testInstructions.title,
      body: <TestInstructions />
    },
    { id: 3, text: LOCALIZE.emibTest.howToPage.evaluation.title, body: <Evaluation /> }
  ];
};

class HowTo extends Component {
  static propTypes = {
    inTest: PropTypes.bool.isRequired,
    exitButton: PropTypes.object // optional exit button, to leave the HowTo
  };

  render() {
    const SPECS = specsDefinition();

    return (
      <div>
        {!this.props.inTest && (
          <ProgressPane
            progressSpecs={SPECS}
            currentNode={0}
            paneTitle={LOCALIZE.emibTest.homePage.testTitle}
            exitButton={this.props.exitButton}
          />
        )}
        {this.props.inTest && <SideNavigation navSpecs={SPECS} currentNode={0} />}
      </div>
    );
  }
}

export default HowTo;
