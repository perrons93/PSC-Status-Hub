import React, { Component } from "react";
import Confirmation from "./Confirmation";
import HowTo from "./HowTo";
import TestTabs from "./TestTabs";
import LOCALIZE from "../../text_resources";

const PAGES = {
  welcome: "welcome",
  howTo: "howTo",
  testTabs: "testTabs",
  confirm: "confirm"
};
class Emib extends Component {
  state = {
    curPage: PAGES.welcome
  };

  changePage = () => {
    switch (this.state.curPage) {
      case PAGES.welcome:
        this.setState({ curPage: PAGES.howTo });
        break;
      case PAGES.howTo:
        this.setState({ curPage: PAGES.testTabs });
        break;
      case PAGES.testTabs:
        this.setState({ curPage: PAGES.confirm });
        break;
      default:
        this.setState({ curPage: PAGES.welcome });
        break;
    }
  };

  render() {
    return (
      <div className="app">
        <h2>{LOCALIZE.emibTest.homePage.testTitle}</h2>
        {this.state.curPage === PAGES.welcome && <p>{LOCALIZE.emibTest.homePage.welcomeMsg}</p>}
        {this.state.curPage === PAGES.howTo && <HowTo />}
        {this.state.curPage === PAGES.testTabs && <TestTabs />}
        {this.state.curPage === PAGES.confirm && <Confirmation />}

        {this.state.curPage !== PAGES.confirm && (
          <div style={{ color: "blue", cursor: "pointer" }} onClick={this.changePage}>
            {this.state.curPage === PAGES.welcome && <p>{LOCALIZE.commons.nextButton}</p>}
            {this.state.curPage === PAGES.howTo && <p>{LOCALIZE.commons.startTest}</p>}
            {this.state.curPage === PAGES.testTabs && <p>{LOCALIZE.commons.submitTestButton}</p>}
          </div>
        )}
      </div>
    );
  }
}

export default Emib;
export { PAGES };
