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

const CHECKBOX_CLASS = {
  firstCheckboxNotSelected: "checkbox checkbox-not-selected first-checkbox-cell",
  firstCheckboxSelected: "checkbox checkbox-selected first-checkbox-cell",
  secondCheckboxNotSelected: "checkbox checkbox-not-selected second-checkbox-cell",
  secondCheckboxSelected: "checkbox checkbox-selected second-checkbox-cell",
  thirdCheckboxNotSelected: "checkbox checkbox-not-selected third-checkbox-cell",
  thirdCheckboxSelected: "checkbox checkbox-selected third-checkbox-cell"
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
    thirdCheckboxChecked: false,
    checkboxState: BUTTON_STATE.disabled,
    firstCheckboxStyle: CHECKBOX_CLASS.firstCheckboxNotSelected,
    secondCheckboxStyle: CHECKBOX_CLASS.secondCheckboxNotSelected,
    thirdCheckboxStyle: CHECKBOX_CLASS.thirdCheckboxNotSelected
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

  firstCheckboxToggle = () => {
    //checkbox = checked
    if (this.state.firstCheckboxChecked === true) {
      this.setState({
        firstCheckboxChecked: false,
        firstCheckboxStyle: CHECKBOX_CLASS.firstCheckboxNotSelected,
        checkboxState: BUTTON_STATE.disabled
      });
      //checkbox = unchecked
    } else {
      this.setState({
        firstCheckboxChecked: true,
        firstCheckboxStyle: CHECKBOX_CLASS.firstCheckboxSelected
      });
      if (this.state.secondCheckboxChecked === true && this.state.thirdCheckboxChecked === true) {
        this.setState({ checkboxState: BUTTON_STATE.enabled });
      }
    }
  };

  secondCheckboxToggle = () => {
    //checkbox = checked
    if (this.state.secondCheckboxChecked === true) {
      this.setState({
        secondCheckboxChecked: false,
        secondCheckboxStyle: CHECKBOX_CLASS.secondCheckboxNotSelected,
        checkboxState: BUTTON_STATE.disabled
      });
      //checkbox = unchecked
    } else {
      this.setState({
        secondCheckboxChecked: true,
        secondCheckboxStyle: CHECKBOX_CLASS.secondCheckboxSelected
      });
      if (this.state.firstCheckboxChecked === true && this.state.thirdCheckboxChecked === true) {
        this.setState({ checkboxState: BUTTON_STATE.enabled });
      }
    }
  };

  thirdCheckboxToggle = () => {
    //checkbox = checked
    if (this.state.thirdCheckboxChecked === true) {
      this.setState({
        thirdCheckboxChecked: false,
        thirdCheckboxStyle: CHECKBOX_CLASS.thirdCheckboxNotSelected,
        checkboxState: BUTTON_STATE.disabled
      });
      //checkbox = unchecked
    } else {
      this.setState({
        thirdCheckboxChecked: true,
        thirdCheckboxStyle: CHECKBOX_CLASS.thirdCheckboxSelected
      });
      if (this.state.firstCheckboxChecked === true && this.state.secondCheckboxChecked === true) {
        this.setState({ checkboxState: BUTTON_STATE.enabled });
      }
    }
  };

  resetCheckboxStates = () => {
    this.setState({
      /* first checkbox */
      firstCheckboxChecked: false,
      firstCheckboxStyle: CHECKBOX_CLASS.firstCheckboxNotSelected,
      /* second checkbox */
      secondCheckboxChecked: false,
      secondCheckboxStyle: CHECKBOX_CLASS.secondCheckboxNotSelected,
      /* third checkbox */
      thirdCheckboxChecked: false,
      thirdCheckboxStyle: CHECKBOX_CLASS.thirdCheckboxNotSelected,
      /* //disable quit test button */
      checkboxState: BUTTON_STATE.disabled
    });
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
                  title={LOCALIZE.emibTest.testFooter.quitTestPopupBox.warning.title}
                  message={LOCALIZE.emibTest.testFooter.quitTestPopupBox.warning.message}
                />
              </div>
              <p className="font-weight-bold">
                {LOCALIZE.emibTest.testFooter.quitTestPopupBox.descriptionPart1}
              </p>
              <div className="popup-box-checkbox-grid">
                <button
                  className={this.state.firstCheckboxStyle}
                  onClick={this.firstCheckboxToggle}
                />
                <button
                  className={this.state.secondCheckboxStyle}
                  onClick={this.secondCheckboxToggle}
                />
                <button
                  className={this.state.thirdCheckboxStyle}
                  onClick={this.thirdCheckboxToggle}
                />

                <p className="first-description-cell">
                  {LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxOne}
                </p>
                <p className="second-description-cell">
                  {LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxTwo}
                </p>
                <p className="third-description-cell">
                  {LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxThree}
                </p>
              </div>
              <hr style={styles.hr} />
              <p className="font-weight-bold">
                {LOCALIZE.emibTest.testFooter.quitTestPopupBox.descriptionPart2}
              </p>
              <p className="font-weight-bold">
                {LOCALIZE.emibTest.testFooter.quitTestPopupBox.descriptionPart3}
              </p>
            </div>
          }
          leftButtonType={BUTTON_TYPE.danger}
          leftButtonTitle={LOCALIZE.commons.quitTest}
          leftButtonAction={this.changePage}
          leftButtonState={this.state.checkboxState}
          rightButtonType={BUTTON_TYPE.primary}
          rightButtonTitle={LOCALIZE.commons.returnToTest}
        />
      </div>
    );
  }
}

export default Emib;
export { PAGES };
