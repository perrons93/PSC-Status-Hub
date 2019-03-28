import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";

const styles = {
  email: {
    textAlign: "left"
  }
};

class Email extends Component {
  static propTypes = {
    email: PropTypes.object.isRequired
  };

  render() {
    const email = this.props.email;
    return (
      <div style={styles.email}>
        <h5>
          {LOCALIZE.emibTest.inboxPage.emailId}
          {email.id}
        </h5>
        <div>{email.subject}</div>
        <div>{email.from}</div>
        <div>{email.to}</div>
        <div>{email.date}</div>
        <div>{email.body}</div>
      </div>
    );
  }
}
export default Email;
