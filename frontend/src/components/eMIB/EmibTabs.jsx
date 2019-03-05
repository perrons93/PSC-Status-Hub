import React, { Component } from "react";
import PropTypes from "prop-types";
import Background from "./Background";
import Inbox from "./Inbox";
import SideNavigation from "../commons/SideNavigation";
import LOCALIZE from "../../text_resources";
import TabNavigation from "../commons/TabNavigation";
import { getInstructionContent } from "./Emib";
import Notepad from "../commons/Notepad";

const styles = {
  container: {
    display: "grid"
  },
  tabNavigation: {
    gridColumn: "1"
  },
  notepad: {
    gridColumn: "2"
  }
};

class EmibTabs extends Component {
  static propTypes = {
    submitTest: PropTypes.func.isRequired
  };

  render() {
    const SPECS = getInstructionContent();
    const TABS = [
      {
        id: 0,
        tabName: LOCALIZE.emibTest.tabs.instructionsTabTitle,
        body: <SideNavigation navSpecs={SPECS} currentNode={0} />
      },
      {
        id: 1,
        tabName: LOCALIZE.emibTest.tabs.backgroundTabTitle,
        body: <Background />
      },
      {
        id: 2,
        tabName: LOCALIZE.emibTest.tabs.inboxTabTitle,
        body: <Inbox />
      }
    ];
    return (
      <div style={styles.container}>
        <div style={styles.tabNavigation}>
          <TabNavigation tabSpecs={TABS} currentTab={1} />
          <button type="button" className="btn btn-primary" onClick={this.props.submitTest}>
            {LOCALIZE.commons.submitTestButton}
          </button>
        </div>
        <div style={styles.notepad}>
          <Notepad />
        </div>
      </div>
    );
  }
}

export default EmibTabs;
