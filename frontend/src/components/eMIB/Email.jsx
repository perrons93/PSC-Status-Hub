import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import "../../css/inbox.css";
import EditEmailActionDialog, { ACTION_TYPE, EDIT_MODE } from "./EditEmailActionDialog";
import { addEmail, addTask } from "../../modules/EmibInboxRedux";

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
    addEmail: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    emailCount: PropTypes.number,
    taskCount: PropTypes.number
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
    this.props.addEmail(this.props.email.id);
  };

  addTaskToEmail = () => {
    this.props.addTask(this.props.email.id);
  };

  render() {
    const { email, emailCount, taskCount } = this.props;

    return (
      <div style={styles.email}>
        <div style={styles.header}>
          <h2 style={styles.emailId}>
            {LOCALIZE.emibTest.inboxPage.emailId.toUpperCase()}
            {email.id + 1}
          </h2>
          {true && (
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
        <EditEmailActionDialog
          showDialog={this.state.showAddEmailDialog}
          handleClose={this.closeEmailDialog}
          saveEmail={this.replyToEmail}
          actionType={ACTION_TYPE.email}
          editMode={EDIT_MODE.create}
        />
        <EditEmailActionDialog
          showDialog={this.state.showAddTaskDialog}
          handleClose={this.closeTaskDialog}
          saveEmail={this.addTaskToEmail}
          actionType={ACTION_TYPE.task}
          editMode={EDIT_MODE.create}
        />
      </div>
    );
  }
}

export { Email as UnconnectedEmail };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addEmail,
      addTask
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Email);
