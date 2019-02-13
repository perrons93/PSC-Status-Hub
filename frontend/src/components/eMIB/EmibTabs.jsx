import React, { Component } from "react";
import HowTo from "./HowTo";
import Background from "./Background";
import Inbox from "./Inbox";
import { SELECTED, UNSELECTED } from "../common/Tab";
import { STRINGS } from "./Emib";
import TabNavigation from "../common/TabNavigation";

class EmibTabs extends Component {
  render() {
    let TABS = [
      { id: 0, tabName: STRINGS.instructionsTabTitle, selected: UNSELECTED, body: <HowTo /> },
      { id: 1, tabName: STRINGS.backgroundTabTitle, selected: SELECTED, body: <Background /> },
      { id: 2, tabName: STRINGS.inboxTabTitle, selected: UNSELECTED, body: <Inbox /> }
    ];
    return (
      <div>
        <div>{<TabNavigation tabSpecs={TABS} curTab={1} />}</div>
      </div>
    );
  }
}

export default EmibTabs;
