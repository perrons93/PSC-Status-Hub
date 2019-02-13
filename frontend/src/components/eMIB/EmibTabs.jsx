import React, { Component } from "react";
import HowTo from "./HowTo";
import Background from "./Background";
import Inbox from "./Inbox";
import { SELECTED, UNSELECTED } from "../common/Tab";
import LOCALIZE from "../../text_resources";
import TabNavigation from "../common/TabNavigation";

class EmibTabs extends Component {
  render() {
    let TABS = [
      {
        id: 0,
        tabName: LOCALIZE.emibTest.tabs.instructionsTabTitle,
        selected: UNSELECTED,
        body: <HowTo />
      },
      {
        id: 1,
        tabName: LOCALIZE.emibTest.tabs.backgroundTabTitle,
        selected: SELECTED,
        body: <Background />
      },
      {
        id: 2,
        tabName: LOCALIZE.emibTest.tabs.inboxTabTitle,
        selected: UNSELECTED,
        body: <Inbox />
      }
    ];
    return (
      <div>
        <div>{<TabNavigation tabSpecs={TABS} curTab={1} />}</div>
      </div>
    );
  }
}

export default EmibTabs;
