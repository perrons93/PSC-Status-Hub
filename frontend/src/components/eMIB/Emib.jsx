import React, { Component } from "react";
import Confirmation from "./Confirmation";
import EmibTabs from "./EmibTabs";
import TestFooter from "../commons/TestFooter";
import LOCALIZE from "../../text_resources";
import ContentContainer from "../commons/ContentContainer";
import Overview from "./Overview";
import TipsOnTest from "./TipsOnTest";
import TestInstructions from "./TestInstructions";
import TestExamples from "./TestExamples";
import Evaluation from "./Evaluation";
import ProgressPane from "../commons/ProgressPane";
import PopupBox, { BUTTON_TYPE, BUTTON_STATE } from "../commons/PopupBox";
import SystemMessage, { MESSAGE_TYPE } from "../commons/SystemMessage";

const PAGES = {
  preTest: "preTest",
  emibTabs: "emibTabs",
  confirm: "confirm"
};

const styles = {
  hr: {
    width: "100%",
    borderTop: "2px solid #96a8b2",
    margin: "16px 0 16px 0"
  },
  checkboxZone: {
    paddingTop: 8
  }
};

//Returns array where each item indicates specifications related to How To Page including the title and the body
export const getInstructionContent = () => {
  return [
    { id: 0, text: LOCALIZE.emibTest.howToPage.overview.title, body: <Overview /> },
    {
      id: 1,
      text: LOCALIZE.emibTest.howToPage.testInstructions.title,
      body: <TestInstructions />
    },
    {
      id: 2,
      text: LOCALIZE.emibTest.howToPage.testExamples.title,
      body: <TestExamples />
    },
    { id: 3, text: LOCALIZE.emibTest.howToPage.tipsOnTest.title, body: <TipsOnTest /> },
    { id: 4, text: LOCALIZE.emibTest.howToPage.evaluation.title, body: <Evaluation /> }
  ];
};

export const getInboxContent = () => {
  return [
    LOCALIZE.emibTest.emails.email0,
    LOCALIZE.emibTest.emails.email1,
    LOCALIZE.emibTest.emails.email2,
    LOCALIZE.emibTest.emails.email3,
    LOCALIZE.emibTest.emails.email4,
    LOCALIZE.emibTest.emails.email5,
    LOCALIZE.emibTest.emails.email6,
    LOCALIZE.emibTest.emails.email7,
    LOCALIZE.emibTest.emails.email8,
    LOCALIZE.emibTest.emails.email9
  ];
};

//Passing Specs as a prop into Inbox causes a bug where the language does not toggle
// However, inbox's state needs to know the length of the specs to be initialized.
export const getInboxLen = () => {
  return getInboxContent().length;
};

const quitConditions = () => {
  return [
    { text: LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxOne, checked: false },
    { text: LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxTwo, checked: false },
    { text: LOCALIZE.emibTest.testFooter.quitTestPopupBox.checkboxThree, checked: false }
  ];
};

class Emib extends Component {
  state = {
    curPage: PAGES.preTest,
    showSubmitPopup: false,
    showQuitPopup: false,
    quitConditions: quitConditions()
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

  resetCheckboxStates = () => {
    this.setState({ quitConditions: quitConditions() });
  };

  toggleCheckbox = id => {
    let updatedQuitConditions = Array.from(this.state.quitConditions);
    updatedQuitConditions[id].checked = !updatedQuitConditions[id].checked;
    this.setState({ quitConditions: updatedQuitConditions });
  };

  isChecked = currentCheckbox => {
    return currentCheckbox.checked;
  };

  render() {
    const { quitConditions } = this.state;
    const allChecked = quitConditions.every(this.isChecked);
    const INSTRUCTION_SPECS = getInstructionContent();

    const submitButtonState = allChecked ? BUTTON_STATE.enabled : BUTTON_STATE.disabled;
    return (
      <div className="app">
        <div>{this.state.curPage === PAGES.emibTabs && <EmibTabs />}</div>
        {this.state.curPage !== PAGES.emibTabs && (
          <ContentContainer hideBanner={this.state.curPage === PAGES.emibTabs}>
            {this.state.curPage === PAGES.preTest && (
              <ProgressPane
                progressSpecs={INSTRUCTION_SPECS}
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

            {this.state.curPage === PAGES.confirm && <Confirmation />}
          </ContentContainer>
        )}
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
              <div>
                {this.state.quitConditions.map((condition, id) => {
                  return (
                    <div
                      key={id}
                      className="custom-control custom-checkbox"
                      style={styles.checkboxZone}
                    >
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={id}
                        checked={condition.checked}
                        onChange={() => this.toggleCheckbox(id)}
                      />
                      <label className="custom-control-label" htmlFor={id}>
                        {condition.text}
                      </label>
                    </div>
                  );
                })}
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
