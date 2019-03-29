import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";

const styles = {
  email: {
    textAlign: "left"
  },
  replyStatus: {
    fontSize: 16,
    textAlign: "right",
    fontWeight: "bold"
  },
  replyAndUser: {
    color: "#00565E"
  },
  hr: {
    width: "100%",
    borderTop: "2px solid #00565E",
    margin: "24px 0 24px 0"
  },
  capitalize: {
    textTransform: "uppercase"
  }
};

class Email extends Component {
  static propTypes = {
    email: PropTypes.object.isRequired,
    respondToEmail: PropTypes.func.isRequired,
    isRepliedTo: PropTypes.bool.isRequired
  };

  replyToEmail = () => {
    this.props.respondToEmail(this.props.email.id);
  };

  addTaskToEmail = () => {
    this.props.respondToEmail(this.props.email.id);
  };

  render() {
    const email = this.props.email;
    const REPLACE_ME_1 = "Add email Response";
    const REPLACE_ME_2 = "Create a task";
    return (
      <div style={styles.email}>
        <h5 style={styles.capitalize}>
          {LOCALIZE.emibTest.inboxPage.emailId}
          {email.visibleID}
        </h5>
        {this.props.isRepliedTo && (
          <div style={styles.replyStatus}>
            <i className="fas fa-sign-out-alt" style={styles.replyAndUser} />
            Temp placeholder....
          </div>
        )}
        <div>
          <button type="button" className="btn btn-primary" onClick={this.replyToEmail}>
            <i className="fas fa-envelope" />
            &emsp;
            {REPLACE_ME_1}
          </button>
          &emsp;
          <button type="button" className="btn btn-primary" onClick={this.addTaskToEmail}>
            <i className="fas fa-tasks" />
            &emsp;
            {REPLACE_ME_2}
          </button>
        </div>
        <hr style={styles.hr} />
        <div>{email.subject}</div>
        <div>
          <span style={styles.replyAndUser}>{email.from}</span>
        </div>
        <div>
          <span style={styles.replyAndUser}>{email.to}</span>
        </div>
        <div>{email.date}</div>
        <hr style={styles.hr} />
        <div>{email.body}</div>
      </div>
    );
  }
}
export default Email;
