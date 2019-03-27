import React, { Component } from "react";
import PropTypes from "prop-types";
/*import email_read from "../../images/email_read.png";
import email_unread from "../../images/email_unread.png";
import forward from "../../images/forward.png";
import reply_all from "../../images/reply_all.png";
import reply_sent from "../../images/reply_sent.png";
import reply from "../../images/reply.png";
import tasks from "../../images/tasks.png";*/

const styles = {
  button: {
    width: 180,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "left",
    borderRadius: 4,
    padding: 6,
    border: "2px solid #009fae"
  }
};

class EmailPreview extends Component {
  static propTypes = {
    email: PropTypes.object.isRequired,
    clickFunction: PropTypes.func.isRequired
  };
  render() {
    return (
      <div style={styles.button} onClick={() => this.props.clickFunction(this.props.email.id)}>
        <div>{this.props.email.subject}</div>
        <div>{this.props.email.from}</div>
      </div>
    );
  }
}

export default EmailPreview;
