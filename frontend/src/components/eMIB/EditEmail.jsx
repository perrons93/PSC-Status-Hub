import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

const styles = {
  container: {
    maxHeight: "calc(100vh - 300px)",
    overflow: "auto"
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
      width: "calc(100% - 36px)"
    },
    titleStyle: {
      float: "left",
      width: 24,
      height: 32,
      lineHeight: "2.1em"
    }
  },
  response: {
    textArea: {
      padding: "6px 12px",
      border: "1px solid #00565E",
      borderRadius: 4,
      width: "99.3%",
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
      border: "1px solid #00565E",
      borderRadius: 4,
      width: "99.3%",
      height: 150,
      resize: "none"
    }
  }
};

class EditEmail extends Component {
  render() {
    return (
      <div style={styles.container}>
        <form>
          <div>
            <p className="font-weight-bold" style={styles.header.title}>
              {LOCALIZE.emibTest.inboxPage.addEmailResponse.selectResponseType}
            </p>
            <div style={styles.header.responseTypeRadio}>
              <input type="radio" name="responseTypeRadio" style={styles.header.radioPadding} />
              <i className="fas fa-reply" style={styles.header.responseTypeIcons} />
              <span style={styles.header.radioText}>
                {LOCALIZE.emibTest.inboxPage.emailCommons.reply}
              </span>
            </div>
            <br />
            <div style={styles.header.responseTypeRadio}>
              <input type="radio" name="responseTypeRadio" style={styles.header.radioPadding} />
              <i className="fas fa-reply-all" style={styles.header.responseTypeIcons} />
              <span style={styles.header.radioText}>
                {LOCALIZE.emibTest.inboxPage.emailCommons.replyAll}
              </span>
            </div>
            <br />
            <div style={styles.header.responseTypeRadio}>
              <input type="radio" name="responseTypeRadio" style={styles.header.radioPadding} />
              <i className="fas fa-share-square" style={styles.header.responseTypeIcons} />
              <span style={styles.header.radioText}>
                {LOCALIZE.emibTest.inboxPage.emailCommons.forward}
              </span>
            </div>
          </div>
          <div>
            <p className="font-weight-bold">
              <span style={styles.header.titleStyle}>
                {LOCALIZE.emibTest.inboxPage.emailCommons.to}
              </span>
              <span style={styles.header.textFieldBoxPadding}>
                <input type="text" placeholder="John Smith" style={styles.header.textField} />
              </span>
            </p>
          </div>
          <div>
            <p className="font-weight-bold">
              <span style={styles.header.titleStyle}>
                {LOCALIZE.emibTest.inboxPage.emailCommons.cc}
              </span>
              <span style={styles.header.textFieldBoxPadding}>
                <input type="text" placeholder="John Smith" style={styles.header.textField} />
              </span>
            </p>
          </div>
          <div>
            <p className="font-weight-bold">
              {LOCALIZE.emibTest.inboxPage.addEmailResponse.response}
            </p>
            <fieldset>
              <label htmlFor="your-response-text-area" className="invisible position-absolute">
                {LOCALIZE.emibTest.inboxPage.addEmailResponse.response}
              </label>
              <textarea
                id="your-response-text-area"
                maxLength="500"
                style={styles.response.textArea}
              />
            </fieldset>
          </div>
          <hr style={styles.hr} />
          <div>
            <p className="font-weight-bold">
              {LOCALIZE.emibTest.inboxPage.addEmailResponse.reasonsForAction}
            </p>
            <fieldset>
              <label htmlFor="reasons-for-action-text-area" className="invisible position-absolute">
                {LOCALIZE.emibTest.inboxPage.addEmailResponse.reasonsForAction}
              </label>
              <textarea
                id="reasons-for-action-text-area"
                maxLength="100"
                style={styles.reasonsForAction.textArea}
              />
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}
export default EditEmail;
