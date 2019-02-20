import React, { Component } from "react";
import HowTo from "./HowTo";
import Background from "./Background";
import Inbox from "./Inbox";

import LOCALIZE from "../../text_resources";
import TabNavigation from "../commons/TabNavigation";

class EmibTabs extends Component {
  render() {
    const TABS = [
      {
        id: 0,
        tabName: LOCALIZE.emibTest.tabs.instructionsTabTitle,
        body: <HowTo />
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
