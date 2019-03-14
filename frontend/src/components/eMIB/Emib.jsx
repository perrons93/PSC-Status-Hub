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
import PopupBox, { BUTTON_TYPE, BUTTON_STATE } from "../commons/PopupBox";
import SystemMessage, { MESSAGE_TYPE } from "../commons/SystemMessage";
import "../../css/emib.css";

const PAGES = {
  preTest: "preTest",
  emibTabs: "emibTabs",
  confirm: "confirm"
};

const styles = {
  hr: {
    width: "100%",
    borderTop: "2px solid #96a8b2",
    margin: "12px 0 0 0"
  }
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
    showSubmitPopup: false,
    showQuitPopup: false,
    firstCheckboxChecked: false,
    secondCheckboxChecked: false,
    thirdCheckboxChecked: false
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

  openSubmitPopup = () => {
    this.setState({ showSubmitPopup: true });
  };

  closePopup = () => {
    this.setState({ showSubmitPopup: false, showQuitPopup: false });
    //reset all checkbox states on close
    this.resetCheckboxStates();
  };

  openQuitPopup = () => {
    this.setState({ showQuitPopup: true });
  };

  updateFirstCheck = () => {
    if (this.state.firstCheckboxChecked === true) {
      this.setState({
        firstCheckboxChecked: false
      });
    } else {
      this.setState({
        firstCheckboxChecked: true
      });
    }
  };

  updateSecondCheck = () => {
    if (this.state.secondCheckboxChecked === true) {
      this.setState({
        secondCheckboxChecked: false
      });
    } else {
      this.setState({
        secondCheckboxChecked: true
      });
    }
  };

  updateThirdCheck = () => {
    if (this.state.thirdCheckboxChecked === true) {
      this.setState({
        thirdCheckboxChecked: false
      });
    } else {
      this.setState({
        thirdCheckboxChecked: true
      });
    }
  };

  resetCheckboxStates = () => {
    this.setState({
      firstCheckboxChecked: false,
      secondCheckboxChecked: false,
      thirdCheckboxChecked: false
    });
  };

  render() {
    const { firstCheckboxChecked, secondCheckboxChecked, thirdCheckboxChecked } = this.state;
    const SPECS = getInstructionContent();
    const submitButtonState =
      firstCheckboxChecked && secondCheckboxChecked && thirdCheckboxChecked
        ? BUTTON_STATE.enabled
        : BUTTON_STATE.disabled;
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
        {this.state.curPage === PAGES.emibTabs && (
          <TestFooter submitTest={this.openSubmitPopup} quitTest={this.openQuitPopup} />
        )}

        <PopupBox
          show={this.state.showSubmitPopup}
          handleClose={this.closePopup}
          title={LOCALIZE.emibTest.testFooter.submitTestPopupBox.title}
          description={
            <div>
              <div>
                <SystemMessage
                  messageType={MESSAGE_TYPE.warning}
                  title={LOCALIZE.emibTest.testFooter.submitTestPopupBox.warning.title}
                  message={LOCALIZE.emibTest.testFooter.submitTestPopupBox.warning.message}
                />
              </div>
              <div>{LOCALIZE.emibTest.testFooter.submitTestPopupBox.description}</div>
            </div>
          }
          leftButtonType={BUTTON_TYPE.secondary}
          leftButtonTitle={LOCALIZE.commons.cancel}
          rightButtonType={BUTTON_TYPE.primary}
          rightButtonTitle={LOCALIZE.commons.submitTestButton}
          rightButtonAction={this.changePage}
        />

        <PopupBox
          show={this.state.showQuitPopup}
          handleClose={this.closePopup}
          title={LOCALIZE.emibTest.testFooter.quitTestPopupBox.title}
          description={
            <div>
              <div>
                <SystemMessage
                  messageType={MESSAGE_TYPE.error}
                  title={LOCALIZE.emibTest.testFooter.quitTestPopupBox.error.title}
                  message={LOCALIZE.emibTest.testFooter.quitTestPopupBox.error.message}
                />
              </div>
              <p className="font-weight-bold">
                {LOCALIZE.emibTest.testFooter.quitTestPopupBox.descriptionPart1}
              </p>
              <div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    checked={firstCheckboxChecked}
                    onChange={this.updateFirstCheck}
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    {LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxOne}
                  </label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck2"
                    checked={secondCheckboxChecked}
                    onChange={this.updateSecondCheck}
                  />
                  <label className="custom-control-label" htmlFor="customCheck2">
                    {LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxTwo}
                  </label>
                </div>

                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck3"
                    checked={thirdCheckboxChecked}
                    onChange={this.updateThirdCheck}
                  />
                  <label className="custom-control-label" htmlFor="customCheck3">
                    {LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxThree}
                  </label>
                </div>
              </div>
              <hr style={styles.hr} />
              <p className="font-weight-bold">
                {LOCALIZE.emibTest.testFooter.quitTestPopupBox.descriptionPart2}
              </p>
            </div>
          }
          leftButtonType={BUTTON_TYPE.danger}
          leftButtonTitle={LOCALIZE.commons.quitTest}
          leftButtonAction={this.changePage}
          leftButtonState={submitButtonState}
          rightButtonType={BUTTON_TYPE.primary}
          rightButtonTitle={LOCALIZE.commons.returnToTest}
        />
      </div>
    );
  }
}

export default Emib;
export { PAGES };
