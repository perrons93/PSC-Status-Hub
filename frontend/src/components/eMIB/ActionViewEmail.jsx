import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/collapsing-item.css";
import LOCALIZE from "../../text_resources";
import { EMAIL_TYPE } from "./constants";
import { actionShape } from "./constants";

const styles = {
  responseTypeIcon: {
    color: "white",
    margin: "0 8px",
    padding: 3,
    backgroundColor: "#00565E",
    border: "3px solid #009FAE",
    borderRadius: 4
  },
  responseType: {
    color: "#00565E",
    textDecoration: "underline"
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
      <div>
        <div
          aria-label={LOCALIZE.ariaLabel.emailHeader}
          tabIndex="0"
          aria-describedby="email-header-desc"
        >
          <div id="email-header-desc" role="dialog">
            <p className="font-weight-bold">
              {LOCALIZE.emibTest.inboxPage.emailResponse.description}
              {action.emailType === EMAIL_TYPE.reply && (
                <>
                  <i className="fas fa-reply" style={styles.responseTypeIcon} />
                  <span style={styles.responseType}>
                    {LOCALIZE.emibTest.inboxPage.emailCommons.reply}
                  </span>
                </>
              )}
              {action.emailType === EMAIL_TYPE.replyAll && (
                <>
                  <i className="fas fa-reply-all" style={styles.responseTypeIcon} />
                  <span style={styles.responseType}>
                    {LOCALIZE.emibTest.inboxPage.emailCommons.replyAll}
                  </span>
                </>
              )}
              {action.emailType === EMAIL_TYPE.forward && (
                <>
                  <i className="fas fa-share-square" style={styles.responseTypeIcon} />
                  <span style={styles.responseType}>
                    {LOCALIZE.emibTest.inboxPage.emailCommons.forward}
                  </span>
                </>
              )}
            </p>
            <p>
              <span className="font-weight-bold">
                {LOCALIZE.emibTest.inboxPage.emailCommons.to}&nbsp;
              </span>
              <span>{action.emailTo}</span>
            </p>
            <p>
              <span className="font-weight-bold">
                {LOCALIZE.emibTest.inboxPage.emailCommons.cc}&nbsp;
              </span>
              <span>{action.emailCc}</span>
            </p>
          </div>
        </div>
        <hr style={styles.hr} />
        <div
          aria-label={LOCALIZE.ariaLabel.responseDetails}
          tabIndex="0"
          aria-describedby="email-response"
        >
          <div id="email-response" role="dialog">
            <p className="font-weight-bold">{LOCALIZE.emibTest.inboxPage.emailResponse.response}</p>
            <p>{action.emailBody}</p>
          </div>
        </div>
        <hr style={styles.hr} />
        <div
          aria-label={LOCALIZE.ariaLabel.reasonsForActionDetails}
          tabIndex="0"
          aria-describedby="email-reasons-for-action"
        >
          <div id="email-reasons-for-action" role="dialog">
            <p className="font-weight-bold">
              {LOCALIZE.emibTest.inboxPage.emailResponse.reasonsForAction}
            </p>
            <p>{action.reasonForAction}</p>
          </div>
        </div>
        <hr style={styles.hr} />
        <div aria-label={LOCALIZE.ariaLabel.emailOptions}>
          <button className="btn btn-primary" style={styles.editButton}>
            {LOCALIZE.emibTest.inboxPage.emailResponse.editButton}
          </button>
          <button className="btn btn-danger">
            {LOCALIZE.emibTest.inboxPage.emailResponse.deleteButton}
          </button>
        </div>
      </div>
    );
  }
}
export default ActionViewEmail;
