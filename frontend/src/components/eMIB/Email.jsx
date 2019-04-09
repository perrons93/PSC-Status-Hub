import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LOCALIZE from "../../text_resources";
import "../../css/inbox.css";
import EditActionDialog from "./EditActionDialog";
import { ACTION_TYPE, EDIT_MODE, emailShape } from "./constants";
import { selectEmailActions } from "../../modules/EmibInboxRedux";
import ActionViewEmail from "./ActionViewEmail";
import CollapsingItemContainer, { ICON_TYPE } from "./CollapsingItemContainer";

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
  replyAndUser: {
    color: "#00565E"
  },
  titleEmailDivider: {
    width: "100%",
    borderTop: "1px solid #00565E",
    margin: "16px 0 12px 0"
  },
  dataBodyDivider: {
    width: "100%",
    borderTop: "1px solid #96a8b2",
    margin: "12px 0 12px 0"
  }
};

class Email extends Component {
  static propTypes = {
    email: emailShape,
    emailCount: PropTypes.number,
    taskCount: PropTypes.number,
    // Provided by Redux
    emailActions: PropTypes.array
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

  render() {
    const { email, emailCount, taskCount, emailActions } = this.props;
    const hasTakenAction = emailCount + taskCount > 0;

    return (
      <div style={styles.email}>
        <div style={styles.header}>
          <h2 style={styles.emailId}>
            {LOCALIZE.emibTest.inboxPage.emailId.toUpperCase()}
            {email.id + 1}
          </h2>
          {hasTakenAction && (
            <div className="font-weight-bold" style={styles.replyStatus}>
              <i className="fas fa-sign-out-alt" style={styles.replyAndUser} />
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
        <h3>{email.subject}</h3>
        <div>
          {LOCALIZE.emibTest.inboxPage.from}: <span style={styles.replyAndUser}>{email.from}</span>
        </div>
        <div>
          {LOCALIZE.emibTest.inboxPage.to}: <span style={styles.replyAndUser}>{email.to}</span>
        </div>
        <div>
          {LOCALIZE.emibTest.inboxPage.date}: {email.date}
        </div>
        <hr style={styles.dataBodyDivider} />
        <div>{email.body}</div>
        <div>
          {emailActions.map((action, id) => {
            return (
              <CollapsingItemContainer
                key={id}
                iconType={ICON_TYPE.email}
                // TODO: we need to put a dynamic title generator here instead of hard coding this title
                title={"Email response"}
                body={
                  <ActionViewEmail action={action} actionId={id} emailId={this.props.email.id} />
                }
              />
            );
          })}
        </div>
        <EditActionDialog
          emailId={email.id}
          showDialog={this.state.showAddEmailDialog}
          handleClose={this.closeEmailDialog}
          actionType={ACTION_TYPE.email}
          editMode={EDIT_MODE.create}
        />
        <EditActionDialog
          emailId={email.id}
          emailSubject={email.subject}
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
    emailActions: selectEmailActions(state.emibInbox.emailActions, ownProps.email.id)
  };
};

export default connect(
  mapStateToProps,
  null
)(Email);
