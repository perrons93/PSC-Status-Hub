import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LOCALIZE from "../../text_resources";
import "../../css/inbox.css";
import EditActionDialog from "./EditActionDialog";
import { ACTION_TYPE, EDIT_MODE, emailShape } from "./constants";
import ActionViewEmail from "./ActionViewEmail";
import ActionViewTask from "./ActionViewTask";
import CollapsingItemContainer, { ICON_TYPE } from "./CollapsingItemContainer";
import EmailContent from "./EmailContent";

const styles = {
  header: {
    marginBottom: 35
  },
  emailId: {
    float: "left",
    marginRight: 12,
    fontSize: 16,
    fontWeight: 700,
    color: "#252525",
    marginBottom: 8,
    marginTop: 0
  },
  replyStatus: {
    float: "right"
  },
  email: {
    textAlign: "left",
    padding: 16
  },
  replyIcon: {
    color: "#00565E"
  },
  titleEmailDivider: {
    width: "100%",
    borderTop: "1px solid #00565E",
    margin: "16px 0 12px 0"
  }
};

// used to allow or prevent focusing on action-views div (see componentWillUpdate() function)
let TABINDEX = "-1";

class Email extends Component {
  static propTypes = {
    email: emailShape,
    emailCount: PropTypes.number,
    taskCount: PropTypes.number,
    // Provided by Redux
    emailActionsArray: PropTypes.array
  };

  state = {
    showAddEmailDialog: false,
    showAddTaskDialog: false
  };

  showAddEmailDialog = () => {
    this.setState({ showAddEmailDialog: true });
  };

  closeEmailDialog = () => {
    this.setState({ showAddEmailDialog: false });
  };

  showAddTaskDialog = () => {
    this.setState({ showAddTaskDialog: true });
  };

  closeTaskDialog = () => {
    this.setState({ showAddTaskDialog: false });
  };

  componentWillUpdate = () => {
    // focusing on the action view items depending on the existing state
    const actionItem = document.getElementById("action-views");
    // there is no action item created yet
    if (actionItem === null) {
      // allowing focus to the action-view div
      TABINDEX = "0";
      // focusing on it
      actionItem.focus();
      // preventing focus to the action-view div
      TABINDEX = "-1";
      // there is at least one action item
    } else {
      // simply focus on it
      actionItem.focus();
    }
  };

  componentDidUpdate = () => {
    // scroll to bottom of the page
    const elmnt = document.getElementById("action-views");
    elmnt.scrollIntoView();
  };

  render() {
    const { email, emailCount, taskCount, emailActionsArray } = this.props;
    const hasTakenAction = emailCount + taskCount > 0;
    const emailActions = emailActionsArray[email.id];
    let emailNumber = 0;
    let taskNumber = 0;
    return (
      <div style={styles.email}>
        <div style={styles.header}>
          <h2 style={styles.emailId}>
            {LOCALIZE.emibTest.inboxPage.emailId.toUpperCase()}
            {email.id + 1}
          </h2>
          {hasTakenAction && (
            <div className="font-weight-bold" style={styles.replyStatus}>
              <i className="fas fa-sign-out-alt" style={styles.replyIcon} />
              {LOCALIZE.formatString(
                LOCALIZE.emibTest.inboxPage.yourActions,
                emailCount,
                taskCount
              )}
            </div>
          )}
        </div>
        <div>
          <button
            id="unit-test-email-reply-button"
            type="button"
            className="btn btn-primary"
            onClick={this.showAddEmailDialog}
          >
            <i className="fas fa-envelope" />
            &emsp;
            {LOCALIZE.emibTest.inboxPage.addReply}
          </button>
          &emsp;
          <button
            id="unit-test-email-task-button"
            type="button"
            className="btn btn-primary"
            onClick={this.showAddTaskDialog}
          >
            <i className="fas fa-tasks" />
            &emsp;
            {LOCALIZE.emibTest.inboxPage.addTask}
          </button>
        </div>
        <hr style={styles.titleEmailDivider} />
        <EmailContent email={email} />
        <div id="action-views" tabIndex={TABINDEX}>
          {emailActions.map((action, id) => {
            // populate email responses
            for (let i = 0; i < emailCount; i++) {
              if (emailActions[id].actionType === ACTION_TYPE.email) {
                emailNumber++;
                return (
                  <CollapsingItemContainer
                    key={id}
                    iconType={ICON_TYPE.email}
                    title={`Email Response #${emailNumber}`}
                    body={<ActionViewEmail action={action} actionId={id} email={email} />}
                  />
                );
              }
            }
            // populate tasks
            for (let i = 0; i < taskCount; i++) {
              if (emailActions[id].actionType === ACTION_TYPE.task) {
                taskNumber++;
                return (
                  <CollapsingItemContainer
                    key={id}
                    iconType={ICON_TYPE.task}
                    title={`Task #${taskNumber}`}
                    body={
                      <ActionViewTask
                        action={action}
                        actionId={id}
                        email={email}
                        emailSubject={email.subject}
                      />
                    }
                  />
                );
              }
            }
            return null;
          })}
        </div>
        <EditActionDialog
          email={email}
          showDialog={this.state.showAddEmailDialog}
          handleClose={this.closeEmailDialog}
          actionType={ACTION_TYPE.email}
          editMode={EDIT_MODE.create}
        />
        <EditActionDialog
          email={email}
          showDialog={this.state.showAddTaskDialog}
          handleClose={this.closeTaskDialog}
          actionType={ACTION_TYPE.task}
          editMode={EDIT_MODE.create}
        />
      </div>
    );
  }
}

export { Email as UnconnectedEmail };

const mapStateToProps = (state, ownProps) => {
  return {
    emailActionsArray: state.emibInbox.emailActions
  };
};

export default connect(
  mapStateToProps,
  null
)(Email);
