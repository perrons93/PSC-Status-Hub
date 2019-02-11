import React, { Component } from "react";
import HowTo from "./HowTo";
import Background from "./Background";
import Inbox from "./Inbox";
import Tab, { SELECTED, UNSELECTED } from "./Tab";
import { STRINGS } from "./Emib";

const TABS = {
  instructions: "instructions",
  background: "background",
  inbox: "inbox"
};

class TestTabs extends Component {
  state = {
    curTab: TABS.background,
    instructionSelected: UNSELECTED,
    backgroundSelected: SELECTED,
    inboxSelected: UNSELECTED
  };

  switchInstr = () => {
    this.setState({
      curTab: TABS.instructions,
      instructionSelected: SELECTED,
      backgroundSelected: UNSELECTED,
      inboxSelected: UNSELECTED
    });
  };

  switchBKGD = () => {
    this.setState({
      curTab: TABS.background,
      instructionSelected: UNSELECTED,
      backgroundSelected: SELECTED,
      inboxSelected: UNSELECTED
    });
  };

  switchInbox = () => {
    this.setState({
      curTab: TABS.inbox,
      instructionSelected: UNSELECTED,
      backgroundSelected: UNSELECTED,
      inboxSelected: SELECTED
    });
  };

  render() {
    return (
      <div>
        <div>
          <span onClick={this.switchInstr}>
            <Tab tabName={STRINGS.instructionsTabTitle} selected={this.state.instructionSelected} />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick={this.switchBKGD}>
            <Tab tabName={STRINGS.backgroundTabTitle} selected={this.state.backgroundSelected} />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick={this.switchInbox}>
            <Tab tabName={STRINGS.inboxTabTitle} selected={this.state.inboxSelected} />
          </span>
        </div>
        {this.state.curTab === TABS.instructions && <HowTo />}
        {this.state.curTab === TABS.background && <Background />}
        {this.state.curTab === TABS.inbox && <Inbox />}
      </div>
    );
  }
}

export default TestTabs;

export { TABS };
