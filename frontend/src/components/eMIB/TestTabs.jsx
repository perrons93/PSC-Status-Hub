import React, { Component } from "react";
import PropTypes from "prop-types";
import HowTo from "./HowTo";
import Background from "./Background";
import Inbox from "./Inbox";
import LocalizedStrings from "react-localization";
import Tab from "./Tab";

const TABS = {
  instructions: "instructions",
  background: "background",
  inbox: "inbox"
};

const COLOURS = {
  unselected: "blue",
  selected: "red"
};

const LANGUAGES = {
  english: "en",
  french: "fr"
};

let STRINGS = new LocalizedStrings({
  en: {
    //Instructions Tab
    instructionsPageTitle: "Instructions",

    //Background Tab
    backgroundPageTitle: "Background",

    //Inbox Tab
    inboxPageTitle: "Inbox"
  },
  fr: {
    //Instructions Tab
    instructionsPageTitle: "FR Instructions",

    //Background Tab
    backgroundPageTitle: "FR Contexte",

    //Inbox Tab
    inboxPageTitle: "Boîte de réception"
  }
});

class TestTabs extends Component {
  static propTypes = {
    lang: PropTypes.string.isRequired
  };

  state = {
    curTab: TABS.background,
    curLanguage: this.props.lang,
    istrColour: COLOURS.unselected,
    baskColour: COLOURS.selected,
    inboxColour: COLOURS.unselected
  };

  switchInstr = () => {
    this.setState({
      curTab: TABS.instructions,
      istrColour: COLOURS.selected,
      backColour: COLOURS.unselected,
      inboxColour: COLOURS.unselected
    });
  };

  switchBKGD = () => {
    this.setState({
      curTab: TABS.background,
      istrColour: COLOURS.unselected,
      backColour: COLOURS.selected,
      inboxColour: COLOURS.unselected
    });
  };

  switchInbox = () => {
    this.setState({
      curTab: TABS.inbox,
      istrColour: COLOURS.unselected,
      backColour: COLOURS.unselected,
      inboxColour: COLOURS.selected
    });
  };

  render() {
    return (
      <div>
        <div>
          <span onClick={this.switchInstr}>
            <Tab tabName={STRINGS.instructionsPageTitle} colour={this.state.istrColour} />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick={this.switchBKGD}>
            <Tab tabName={STRINGS.backgroundPageTitle} colour={this.state.backColour} />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span onClick={this.switchInbox}>
            <Tab tabName={STRINGS.inboxPageTitle} colour={this.state.inboxColour} />
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
