import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import { RESPONSE_TYPE } from "./ResponseItem";

const styles = {
  container: {
    maxHeight: "calc(100vh - 300px)",
    overflow: "auto",
    width: 700
  },
  header: {
    responseTypeIcons: {
      color: "#00565E",
      margin: "0 8px",
      padding: 3,
      border: "1px solid #00565E",
      borderRadius: 4,
      cursor: "pointer"
    },
    radioButtonZone: {
      marginBottom: 12
    },
    responseTypeRadio: {
      all: "unset",
      color: "#00565E",
      cursor: "pointer"
    },
    radioPadding: {
      marginBottom: 16
    },
    radioText: {
      textDecoration: "underline"
    },
    textFieldBoxPadding: {
      padding: "0 6px"
    },
    textField: {
      padding: "4px 12px",
      border: "1px solid #00565E",
      borderRadius: 4,
      width: "calc(100% - 40px)"
    },
    titleStyle: {
      float: "left",
      width: 28,
      height: 32,
      lineHeight: "2.1em"
    }
  },
  response: {
    textArea: {
      padding: "6px 12px",
      margin: "0 6px",
      border: "1px solid #00565E",
      borderRadius: 4,
      width: "calc(100% - 12px)",
      height: 225,
      resize: "none"
    }
  },
  hr: {
    margin: "12px 0 6px 0"
  },
  reasonsForAction: {
    textArea: {
      padding: "6px 12px",
      margin: "0 6px",
      border: "1px solid #00565E",
      borderRadius: 4,
      width: "calc(100% - 12px)",
      height: 150,
      resize: "none"
    }
  }
};

class EditEmail extends Component {
  state = {
    emailType: RESPONSE_TYPE.reply,
    toValue: "",
    ccValue: "",
    responseValue: "",
    reasonsForActionValue: ""
  };

  onToValueChange = event => {
    this.setState({ toValue: event.target.value });
  };

  onCcValueChange = event => {
    this.setState({ ccValue: event.target.value });
  };

  onResponseValueChange = event => {
    this.setState({ responseValue: event.target.value });
  };

  onReasonsForActionValueChange = event => {
    this.setState({ reasonsForActionValue: event.target.value });
  };

  render() {
    const { toValue, ccValue, responseValue, reasonsForActionValue } = this.state;

    // TODO: remove when done debugging
    //=======================================================================
    console.log("To: ", toValue);
    console.log("Cc: ", ccValue);
    console.log("Response: ", responseValue);
    console.log("Reasons for action: ", reasonsForActionValue);
    //=======================================================================
    return (
      <div style={styles.container}>
        <form>
          <div>
            <p className="font-weight-bold" style={styles.header.title}>
              {LOCALIZE.emibTest.inboxPage.addEmailResponse.selectResponseType}
            </p>
            <div style={styles.header.radioButtonZone}>
              <div style={styles.header.responseTypeRadio}>
                <input
                  id="reply-radio"
                  type="radio"
                  name="responseTypeRadio"
                  style={styles.header.radioPadding}
                />
                <label htmlFor="reply-radio" style={styles.header.radioText}>
                  <i className="fas fa-reply" style={styles.header.responseTypeIcons} />
                  {LOCALIZE.emibTest.inboxPage.emailCommons.reply}
                </label>
              </div>
              <br />
              <div style={styles.header.responseTypeRadio}>
                <input
                  id="reply-all-radio"
                  type="radio"
                  name="responseTypeRadio"
                  style={styles.header.radioPadding}
                />
                <label htmlFor="reply-all-radio" style={styles.header.radioText}>
                  <i className="fas fa-reply-all" style={styles.header.responseTypeIcons} />
                  {LOCALIZE.emibTest.inboxPage.emailCommons.replyAll}
                </label>
              </div>
              <br />
              <div style={styles.header.responseTypeRadio}>
                <input
                  id="forward-radio"
                  type="radio"
                  name="responseTypeRadio"
                  style={styles.header.radioPadding}
                />
                <label htmlFor="forward-radio" style={styles.header.radioText}>
                  <i className="fas fa-share-square" style={styles.header.responseTypeIcons} />
                  {LOCALIZE.emibTest.inboxPage.emailCommons.forward}
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="font-weight-bold form-group">
              <label htmlFor="to-field" style={styles.header.titleStyle}>
                {LOCALIZE.emibTest.inboxPage.emailCommons.to}
              </label>
              <span style={styles.header.textFieldBoxPadding}>
                <input
                  id="to-field"
                  type="text"
                  placeholder={LOCALIZE.emibTest.inboxPage.addEmailResponse.headerFieldPlaceholder}
                  style={styles.header.textField}
                  value={toValue}
                  onChange={this.onToValueChange}
                />
              </span>
            </div>
          </div>
          <div>
            <div className="font-weight-bold form-group">
              <label htmlFor="cc-field" style={styles.header.titleStyle}>
                {LOCALIZE.emibTest.inboxPage.emailCommons.cc}
              </label>
              <span style={styles.header.textFieldBoxPadding}>
                <input
                  id="cc-field"
                  type="text"
                  placeholder={LOCALIZE.emibTest.inboxPage.addEmailResponse.headerFieldPlaceholder}
                  style={styles.header.textField}
                  value={ccValue}
                  onChange={this.onCcValueChange}
                />
              </span>
            </div>
          </div>
          <div>
            <div className="font-weight-bold form-group">
              <label htmlFor="your-response-text-area">
                {LOCALIZE.emibTest.inboxPage.addEmailResponse.response}
              </label>
              <textarea
                id="your-response-text-area"
                maxLength="500"
                style={styles.response.textArea}
                value={responseValue}
                onChange={this.onResponseValueChange}
              />
            </div>
          </div>
          <hr style={styles.hr} />
          <div>
            <div className="font-weight-bold form-group">
              <label htmlFor="reasons-for-action-text-area">
                {LOCALIZE.emibTest.inboxPage.addEmailResponse.reasonsForAction}
              </label>
              <textarea
                id="reasons-for-action-text-area"
                maxLength="100"
                style={styles.reasonsForAction.textArea}
                value={reasonsForActionValue}
                onChange={this.onReasonsForActionValueChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default EditEmail;
