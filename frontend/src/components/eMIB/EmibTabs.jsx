import React, { Component } from "react";
import Background from "./Background";
import Inbox from "./Inbox";
import SideNavigation from "../commons/SideNavigation";
import LOCALIZE from "../../text_resources";
import TabNavigation from "../commons/TabNavigation";
import { getInstructionContent } from "./Emib";

class EmibTabs extends Component {
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
      <div>
        <div>{<TabNavigation tabSpecs={TABS} currentTab={1} />}</div>
      </div>
    );
  }
}

export default EmibTabs;
