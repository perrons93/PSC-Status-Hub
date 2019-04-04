import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import "../../css/inbox.css";
import EditEmailActionDialog, { ACTION_TYPE, EDIT_MODE } from "./EditEmailActionDialog";

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
    paddingLeft: 16,
    paddingTop: 16
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
    email: PropTypes.object.isRequired,
    respondToEmail: PropTypes.func.isRequired,
    isRepliedTo: PropTypes.bool.isRequired
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

  replyToEmail = () => {
    //TODO mcherry: replace the following with change to redux state
    this.props.respondToEmail(this.props.email.id);
  };

  addTaskToEmail = () => {
    //TODO mcherry: replace the following with change to redux state
    this.props.respondToEmail(this.props.email.id);
  };

  render() {
    const email = this.props.email;

    return (
      <div style={styles.email}>
        <div style={styles.header}>
          <h2 style={styles.emailId}>
            {LOCALIZE.emibTest.inboxPage.emailId.toUpperCase()}
            {email.id + 1}
          </h2>
          {this.props.isRepliedTo && (
            <div className="font-weight-bold" style={styles.replyStatus}>
              <i className="fas fa-sign-out-alt" style={styles.replyAndUser} />
              {LOCALIZE.emibTest.inboxPage.replyTextPart1}0
              {LOCALIZE.emibTest.inboxPage.replyTextPart2}0
              {LOCALIZE.emibTest.inboxPage.replyTextPart3}
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
        <EditEmailActionDialog
          showDialog={this.state.showAddEmailDialog}
          handleClose={this.closeEmailDialog}
          saveEmail={this.replyToEmail}
          responseType={ACTION_TYPE.email}
          modificationType={EDIT_MODE.create}
        />
        <EditEmailActionDialog
          showDialog={this.state.showAddTaskDialog}
          handleClose={this.closeTaskDialog}
          saveEmail={this.addTaskToEmail}
          responseType={ACTION_TYPE.task}
          modificationType={EDIT_MODE.create}
        />
      </div>
    );
  }
}
export default Email;
