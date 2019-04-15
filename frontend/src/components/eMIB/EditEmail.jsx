import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import { EMAIL_TYPE, actionShape } from "./constants";

const styles = {
  container: {
    maxHeight: "calc(100vh - 300px)",
    overflow: "auto",
    width: 700
  },
  header: {
    responseTypeIcons: {
      margin: "0 8px",
      padding: 3,
      border: "1px solid #00565E",
      borderRadius: 4,
      cursor: "pointer"
    },
    responseTypeIconsSelected: {
      backgroundColor: "#00565E",
      color: "white"
    },
    responseTypeIconsUnelected: {
      backgroundColor: "white",
      color: "00565E"
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
      marginBottom: 16,
      visibility: "hidden",
      marginLeft: -20
    },
    radioTextUnselected: {
      fontWeight: "normal",
      cursor: "pointer"
    },
    radioTextSelected: {
      fontWeight: "bold",
      textDecoration: "underline",
      cursor: "pointer"
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
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    action: actionShape
  };

  state = {
    emailType: !this.props.action ? EMAIL_TYPE.reply : this.props.action.emailType,
    emailTo: !this.props.action ? "" : this.props.action.emailTo,
    emailCc: !this.props.action ? "" : this.props.action.emailCc,
    emailBody: !this.props.action ? "" : this.props.action.emailBody,
    reasonsForAction: !this.props.action ? "" : this.props.action.reasonsForAction
  };

  onEmailTypeChange = event => {
    const newEmailType = event.target.value;
    this.setState({ emailType: newEmailType });
    this.props.onChange({ ...this.state, emailType: newEmailType });
  };

  onEmailToChange = event => {
    const newEmailTo = event.target.value;
    this.setState({ emailTo: newEmailTo });
    this.props.onChange({ ...this.state, emailTo: newEmailTo });
  };

  onEmailCcChange = event => {
    const newEmailCc = event.target.value;
    this.setState({ emailCc: newEmailCc });
    this.props.onChange({ ...this.state, emailCc: newEmailCc });
  };

  onEmailBodyChange = event => {
    const newEmailBody = event.target.value;
    this.setState({ emailBody: newEmailBody });
    this.props.onChange({ ...this.state, emailBody: newEmailBody });
  };

  onReasonsForActionChange = event => {
    const newreasonsForAction = event.target.value;
    this.setState({ reasonsForAction: newreasonsForAction });
    this.props.onChange({ ...this.state, reasonsForAction: newreasonsForAction });
  };

  render() {
    const { emailType, emailTo, emailCc, emailBody, reasonsForAction } = this.state;
    const replyChecked = emailType === EMAIL_TYPE.reply;
    const replyAllChecked = emailType === EMAIL_TYPE.replyAll;
    const forwardChecked = emailType === EMAIL_TYPE.forward;

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
                  onChange={this.onEmailTypeChange}
                  value={EMAIL_TYPE.reply}
                  checked={replyChecked}
                />
                <label
                  htmlFor="reply-radio"
                  style={
                    replyChecked
                      ? styles.header.radioTextSelected
                      : styles.header.radioTextUnselected
                  }
                >
                  <i
                    className="fas fa-reply"
                    style={{
                      ...styles.header.responseTypeIcons,
                      ...(replyChecked
                        ? styles.header.responseTypeIconsSelected
                        : styles.header.responseTypeIconsUnselected)
                    }}
                  />
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
                  onChange={this.onEmailTypeChange}
                  value={EMAIL_TYPE.replyAll}
                  checked={replyAllChecked}
                />
                <label
                  htmlFor="reply-all-radio"
                  style={
                    replyAllChecked
                      ? styles.header.radioTextSelected
                      : styles.header.radioTextUnselected
                  }
                >
                  <i
                    className="fas fa-reply-all"
                    style={{
                      ...styles.header.responseTypeIcons,
                      ...(replyAllChecked
                        ? styles.header.responseTypeIconsSelected
                        : styles.header.responseTypeIconsUnselected)
                    }}
                  />
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
                  onChange={this.onEmailTypeChange}
                  value={EMAIL_TYPE.forward}
                  checked={forwardChecked}
                />
                <label
                  htmlFor="forward-radio"
                  style={
                    forwardChecked
                      ? styles.header.radioTextSelected
                      : styles.header.radioTextUnselected
                  }
                >
                  <i
                    className="fas fa-share-square"
                    style={{
                      ...styles.header.responseTypeIcons,
                      ...(forwardChecked
                        ? styles.header.responseTypeIconsSelected
                        : styles.header.responseTypeIconsUnselected)
                    }}
                  />
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
                  value={emailTo}
                  onChange={this.onEmailToChange}
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
                  value={emailCc}
                  onChange={this.onEmailCcChange}
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
                value={emailBody}
                onChange={this.onEmailBodyChange}
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
                value={reasonsForAction}
                onChange={this.onReasonsForActionChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default EditEmail;
