import React, { Component } from "react";
import Confirmation from "./Confirmation";
import EmibTabs from "./EmibTabs";
import TestFooter from "../commons/TestFooter";
import LOCALIZE from "../../text_resources";
import ContentContainer from "../commons/ContentContainer";
import Overview from "./Overview";
import TipsOnTest from "./TipsOnTest";
import TestInstructions from "./TestInstructions";
import Evaluation from "./Evaluation";
import ProgressPane from "../commons/ProgressPane";
import PopupBox, { BUTTON_TYPE } from "../commons/PopupBox";

const PAGES = {
  preTest: "preTest",
  emibTabs: "emibTabs",
  confirm: "confirm"
};

//Returns array where each item indicates specifications related to How To Page including the title and the body
export const getInstructionContent = () => {
  return [
    { id: 0, text: LOCALIZE.emibTest.howToPage.overview.title, body: <Overview /> },
    { id: 1, text: LOCALIZE.emibTest.howToPage.tipsOnTest.title, body: <TipsOnTest /> },
    {
      id: 2,
      text: LOCALIZE.emibTest.howToPage.testInstructions.title,
      body: <TestInstructions />
    },
    { id: 3, text: LOCALIZE.emibTest.howToPage.evaluation.title, body: <Evaluation /> }
  ];
};

class Emib extends Component {
  state = {
    curPage: PAGES.preTest,
    showPopupBox: false
  };

  changePage = () => {
    switch (this.state.curPage) {
      case PAGES.preTest:
        this.setState({ curPage: PAGES.emibTabs });
        break;
      case PAGES.emibTabs:
        this.setState({ curPage: PAGES.confirm });
        break;
      default:
        this.setState({ curPage: PAGES.preTest });
        break;
    }
  };

  openPopup = () => {
    this.setState({ showPopupBox: true });
  };

  closePopup = () => {
    this.setState({ showPopupBox: false });
  };

  render() {
    const SPECS = getInstructionContent();
    return (
      <div className="app">
        <ContentContainer hideBanner={this.state.curPage === PAGES.emibTabs}>
          {this.state.curPage === PAGES.preTest && (
            <ProgressPane
              progressSpecs={SPECS}
              currentNode={0}
              paneTitle={LOCALIZE.emibTest.homePage.testTitle}
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
        </ContentContainer>
        {this.state.curPage === PAGES.emibTabs && <TestFooter submitTest={this.openPopup} />}
        <PopupBox
          title={"title"}
          description={"description..."}
          show={this.state.showPopupBox}
          handleClose={this.closePopup}
        />
      </div>
    );
  }
}

export default Emib;
export { PAGES };
