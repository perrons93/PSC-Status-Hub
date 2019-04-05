import React, { Component } from "react";
import PropTypes from "prop-types";
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
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  state = {
    emailType: RESPONSE_TYPE.reply,
    toValue: "",
    ccValue: "",
    responseValue: "",
    reasonsForActionValue: ""
  };

  onEmailTypeChange = event => {
    const newEmailType = event.target.value;
    this.setState({ emailType: newEmailType });
    this.props.onChange({ ...this.state, emailType: newEmailType });
  };

  onToValueChange = event => {
    const newToValue = event.target.value;
    this.setState({ toValue: newToValue });
    this.props.onChange({ ...this.state, toValue: newToValue });
  };

  onCcValueChange = event => {
    const newCcValue = event.target.value;
    this.setState({ ccValue: newCcValue });
    this.props.onChange({ ...this.state, ccValue: newCcValue });
  };

  onResponseValueChange = event => {
    const newResponseValue = event.target.value;
    this.setState({ responseValue: newResponseValue });
    this.props.onChange({ ...this.state, responseValue: newResponseValue });
  };

  onReasonsForActionValueChange = event => {
    const newReasonsForActionValue = event.target.value;
    this.setState({ reasonsForActionValue: newReasonsForActionValue });
    this.props.onChange({ ...this.state, reasonsForAction: newReasonsForActionValue });
  };

  render() {
    const { emailType, toValue, ccValue, responseValue, reasonsForActionValue } = this.state;

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
                  value={RESPONSE_TYPE.reply}
                  checked={emailType === RESPONSE_TYPE.reply}
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
                  onChange={this.onEmailTypeChange}
                  value={RESPONSE_TYPE.replyAll}
                  checked={emailType === RESPONSE_TYPE.replyAll}
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
                  onChange={this.onEmailTypeChange}
                  value={RESPONSE_TYPE.forward}
                  checked={emailType === RESPONSE_TYPE.forward}
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
