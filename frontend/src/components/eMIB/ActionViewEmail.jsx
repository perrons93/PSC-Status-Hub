import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/collapsing-item.css";
import LOCALIZE from "../../text_resources";
import { EMAIL_TYPE } from "./constants";
import { actionShape } from "./constants";

const styles = {
  responseType: {
    description: {
      float: "left",
      margin: "4px 0 0 0"
    },
    icon: {
      color: "white",
      margin: "0 8px",
      padding: 3,
      backgroundColor: "#00565E",
      border: "3px solid #009FAE",
      borderRadius: 4
    },
    attribute: {
      color: "#00565E",
      textDecoration: "underline"
    }
  },
  toAndCcStyle: {
    float: "left",
    width: 32,
    height: 32,
    lineHeight: "22px",
    margin: 0
  },
  headerMargin: {
    margin: "9px 0 12px 0"
  },
  hr: {
    margin: "16px 0 16px 0"
  },
  editButton: {
    float: "right"
  }
};

class ActionViewEmail extends Component {
  static propTypes = {
    action: actionShape,
    emailId: PropTypes.number.isRequired
  };

  render() {
    const action = this.props.action;
    return (
      <div aria-label={LOCALIZE.ariaLabel.responseDetails}>
        <div tabIndex="0">
          <div>
            <h6 style={styles.responseType.description}>
              {LOCALIZE.emibTest.inboxPage.emailResponse.description}
            </h6>
            {action.emailType === EMAIL_TYPE.reply && (
              <>
                <i className="fas fa-reply" style={styles.responseType.icon} />
                <span style={styles.responseType.attribute}>
                  {LOCALIZE.emibTest.inboxPage.emailCommons.reply}
                </span>
              </>
            )}
            {action.emailType === EMAIL_TYPE.replyAll && (
              <>
                <i className="fas fa-reply-all" style={styles.icon} />
                <span style={styles.responseType.attribute}>
                  {LOCALIZE.emibTest.inboxPage.emailCommons.replyAll}
                </span>
              </>
            )}
            {action.emailType === EMAIL_TYPE.forward && (
              <>
                <i className="fas fa-share-square" style={styles.icon} />
                <span style={styles.responseType.attribute}>
                  {LOCALIZE.emibTest.inboxPage.emailCommons.forward}
                </span>
              </>
            )}
          </div>
          <div style={styles.headerMargin}>
            <h6 style={styles.toAndCcStyle}>{LOCALIZE.emibTest.inboxPage.emailCommons.to}</h6>
            <span>{action.emailTo}</span>
          </div>
          <div>
            <h6 style={styles.toAndCcStyle}>{LOCALIZE.emibTest.inboxPage.emailCommons.cc}</h6>
            <span>{action.emailCc}</span>
          </div>
        </div>
        <hr style={styles.hr} />
        <div tabIndex="0">
          <h6 className="font-weight-bold">{LOCALIZE.emibTest.inboxPage.emailResponse.response}</h6>
          <p>{action.emailBody}</p>
        </div>
        <hr style={styles.hr} />
        <div tabIndex="0">
          <h6 className="font-weight-bold">
            {LOCALIZE.emibTest.inboxPage.emailResponse.reasonsForAction}
          </h6>
          <p>{action.reasonForAction}</p>
        </div>
        <hr style={styles.hr} />
        <div aria-label={LOCALIZE.ariaLabel.emailOptions}>
          <button className="btn btn-primary" style={styles.editButton}>
            {LOCALIZE.emibTest.inboxPage.emailCommons.editButton}
          </button>
          <button className="btn btn-danger">
            {LOCALIZE.emibTest.inboxPage.emailCommons.deleteButton}
          </button>
        </div>
      </div>
    );
  }
}
export default ActionViewEmail;
