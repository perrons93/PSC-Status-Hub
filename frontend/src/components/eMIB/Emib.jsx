import React, { Component } from "react";
import Confirmation from "./Confirmation";
import HowTo from "./HowTo";
import EmibTabs from "./EmibTabs";
import LOCALIZE from "../../text_resources";

const PAGES = {
  welcome: "welcome",
  howTo: "howTo",
  emibTabs: "emibTabs",
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
        this.setState({ curPage: PAGES.emibTabs });
        break;
      case PAGES.emibTabs:
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
        {this.state.curPage === PAGES.emibTabs && <EmibTabs />}
        {this.state.curPage === PAGES.confirm && <Confirmation />}

        {this.state.curPage !== PAGES.confirm && (
          <button type="button" className="btn btn-primary" onClick={this.changePage}>
            {this.state.curPage === PAGES.welcome && <span>{LOCALIZE.commons.nextButton}</span>}
            {this.state.curPage === PAGES.howTo && <span>{LOCALIZE.commons.startTest}</span>}
            {this.state.curPage === PAGES.emibTabs && (
              <span>{LOCALIZE.commons.submitTestButton}</span>
            )}
          </button>
        )}
      </div>
    );
  }
}

export default Emib;
export { PAGES };
