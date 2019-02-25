import React, { Component } from "react";
import Confirmation from "./Confirmation";
import HowTo from "./HowTo";
import EmibTabs from "./EmibTabs";
import LOCALIZE from "../../text_resources";
import ContentContainer from "../commons/ContentContainer";

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
        <ContentContainer hideBanner={this.state.curPage === PAGES.emibTabs}>
          {this.state.curPage === PAGES.howTo && (
            <HowTo
              inTest={false}
              exitButton={
                <button
                  type="button"
                  className="btn btn-primary btn-wide"
                  onClick={this.changePage}
                >
                  {LOCALIZE.commons.startTest}
                </button>
              }
            />
          )}
          {this.state.curPage === PAGES.emibTabs && <EmibTabs />}
          {this.state.curPage === PAGES.confirm && <Confirmation />}
          {this.state.curPage === PAGES.emibTabs && (
            <button type="button" className="btn btn-primary" onClick={this.changePage}>
              {LOCALIZE.commons.submitTestButton}
            </button>
          )}
        </ContentContainer>
      </div>
    );
  }
}

export default Emib;
export { PAGES };
