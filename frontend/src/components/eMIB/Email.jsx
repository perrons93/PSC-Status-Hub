import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";

const styles = {
  email: {
    textAlign: "left"
  },
  reply_status: {
    fontSize: 16,
    textAlign: "right"
  },
  reply_icon: {
    color: "#00565E"
  }
};

class Email extends Component {
  static propTypes = {
    email: PropTypes.object.isRequired
  };

  render() {
    const email = this.props.email;
    const REPLACE_ME_1 = "Add email Response";
    const REPLACE_ME_2 = "Create a task";
    return (
      <div style={styles.email}>
        <h5>
          {LOCALIZE.emibTest.inboxPage.emailId}
          {email.id}
        </h5>
        <div style={styles.reply_status}>
          <i className="fas fa-sign-out-alt" style={styles.reply_icon} />
          Temp placeholder....
        </div>
        <div>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-envelope" />
            &emsp;
            {REPLACE_ME_1}
          </button>
          &emsp;
          <button type="button" className="btn btn-primary">
            <i className="fas fa-tasks" />
            &emsp;
            {REPLACE_ME_2}
          </button>
        </div>
        <hr />
        <div>{email.subject}</div>
        <div>{email.from}</div>
        <div>{email.to}</div>
        <div>{email.date}</div>
        <hr />
        <div>{email.body}</div>
      </div>
    );
  }
}
export default Email;
