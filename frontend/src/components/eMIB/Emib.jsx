import React, { Component } from "react";
import Confirmation from "./Confirmation";
import HowTo from "./HowTo";
import EmibTabs from "./EmibTabs";
import LOCALIZE from "../../text_resources";
import mini_banner from "./../../images/mini_banner.png";

const PAGES = {
  howTo: "howTo",
  emibTabs: "emibTabs",
  confirm: "confirm"
};
class Emib extends Component {
  state = {
    curPage: PAGES.howTo
  };

  changePage = () => {
    switch (this.state.curPage) {
      case PAGES.howTo:
        this.setState({ curPage: PAGES.emibTabs });
        break;
      case PAGES.emibTabs:
        this.setState({ curPage: PAGES.confirm });
        break;
      default:
        this.setState({ curPage: PAGES.howTo });
        break;
    }
  };

  render() {
    return (
      <div className="app">
        {this.state.curPage === PAGES.howTo && <img src={mini_banner} alt="" className="banner" />}
        <h1>{LOCALIZE.emibTest.homePage.testTitle}</h1>
        {this.state.curPage === PAGES.howTo && <HowTo inTest={false} />}
        {this.state.curPage === PAGES.emibTabs && <EmibTabs />}
        {this.state.curPage === PAGES.confirm && <Confirmation />}

        {this.state.curPage !== PAGES.confirm && (
          <button type="button" className="btn btn-primary" onClick={this.changePage}>
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
