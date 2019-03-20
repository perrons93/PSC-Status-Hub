import React, { Component } from "react";
import Background from "./Background";
import Inbox from "./Inbox";
import SideNavigation from "../commons/SideNavigation";
import LOCALIZE from "../../text_resources";
import TabNavigation from "../commons/TabNavigation";
import InTestInstructions from "./InTestInstructions";
import Notepad from "../commons/Notepad";
import "../../css/emib-tabs.css";

class EmibTabs extends Component {
  render() {
    const TABS = [
      {
        id: 0,
        tabName: LOCALIZE.emibTest.tabs.instructionsTabTitle,
        body: <InTestInstructions />
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
      <div className="emib-tabs-grid">
        <div className="test-tabs-cell">
          <TabNavigation tabSpecs={TABS} currentTab={1} menuName={LOCALIZE.ariaLabel.tabMenu} />
        </div>
        <div className="notepad-cell">
          <Notepad />
        </div>
      </div>
    );
  }
}

export default EmibTabs;
