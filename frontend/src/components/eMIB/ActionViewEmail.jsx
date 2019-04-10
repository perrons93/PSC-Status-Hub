import React, { Component } from "react";
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
  header: {
    zone: {
      minHeight: 95
    },
    elementHeight: {
      minHeight: 24
    },
    toAndCcTitle: {
      float: "left",
      width: 32,
      height: 32,
      margin: "2px 0 0 0"
    },
    toFieldMargin: {
      margin: "9px 0 12px 0"
    }
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
    action: actionShape
  };

  render() {
    const action = this.props.action;
    return (
      <div aria-label={LOCALIZE.ariaLabel.responseDetails}>
        <div style={styles.header.zone} tabIndex="0">
          <div style={styles.header.elementHeight}>
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
                <i className="fas fa-reply-all" style={styles.responseType.icon} />
                <span style={styles.responseType.attribute}>
                  {LOCALIZE.emibTest.inboxPage.emailCommons.replyAll}
                </span>
              </>
            )}
            {action.emailType === EMAIL_TYPE.forward && (
              <>
                <i className="fas fa-share-square" style={styles.responseType.icon} />
                <span style={styles.responseType.attribute}>
                  {LOCALIZE.emibTest.inboxPage.emailCommons.forward}
                </span>
              </>
            )}
          </div>
          <div style={{ ...styles.header.toFieldMargin, ...styles.header.elementHeight }}>
            <h6 style={styles.header.toAndCcTitle}>
              {LOCALIZE.emibTest.inboxPage.emailCommons.to}
            </h6>
            <span>{action.emailTo}</span>
          </div>
          <div style={styles.header.elementHeight}>
            <h6 style={styles.header.toAndCcTitle}>
              {LOCALIZE.emibTest.inboxPage.emailCommons.cc}
            </h6>
            <span>{action.emailCc}</span>
          </div>
        </div>
        <hr style={styles.hr} />
        <div tabIndex="0">
          <h6>{LOCALIZE.emibTest.inboxPage.emailResponse.response}</h6>
          <p>{action.emailBody}</p>
        </div>
        <hr style={styles.hr} />
        <div tabIndex="0">
          <h6>{LOCALIZE.emibTest.inboxPage.emailResponse.reasonsForAction}</h6>
          <p>{action.reasonsForAction}</p>
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
