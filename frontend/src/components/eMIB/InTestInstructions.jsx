import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import SideNavigation from "../commons/SideNavigation";
import { getInstructionContent } from "./Emib";

class InTestInstructions extends Component {
  render() {
    const SPECS = getInstructionContent();
    return (
      <SideNavigation
        navSpecs={SPECS}
        currentNode={0}
        menuName={LOCALIZE.ariaLabel.instructionsMenu}
      />
    );
  }
}

export default InTestInstructions;
