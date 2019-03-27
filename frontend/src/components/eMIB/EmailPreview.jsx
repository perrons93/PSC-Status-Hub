import React, { Component } from "react";
import PropTypes from "prop-types";
import email_read from "../../images/email_read.png";
import email_unread from "../../images/email_unread.png";
/*import forward from "../../images/forward.png";
import reply_all from "../../images/reply_all.png";
import reply_sent from "../../images/reply_sent.png";
import reply from "../../images/reply.png";
import tasks from "../../images/tasks.png";*/

const styles = {
  button: {
    width: 155,
    textAlign: "left",
    borderRadius: 4,
    padding: 6,
    border: "2px solid #009fae"
  },
  image: {
    maxWidth: 16
  },
  li: {
    listStyleType: "none"
  }
};

class EmailPreview extends Component {
  static propTypes = {
    email: PropTypes.object.isRequired,
    clickFunction: PropTypes.func.isRequired,
    isRead: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired
  };

  render() {
    //defaults, or if unread
    var page_style = "";
    var img_src = email_unread;
    var img_alt = "unread";
    var div_id = "unread-email-preview";
    if (this.props.isRead === true) {
      //if it is read
      page_style = "page";
      img_src = email_read;
      img_alt = "read";
      div_id = "read-email-preview";
    }
    return (
      <li style={styles.li} aria-current={page_style} role="menuitem">
        <div style={styles.button} onClick={() => this.props.clickFunction(this.props.email.id)}>
          <div id={div_id}>
            <img src={img_src} alt={img_alt} style={styles.image} /> email id#
            {this.props.email.id}
          </div>
          <div>{this.props.email.subject}</div>
          <div>{this.props.email.from}</div>
        </div>
      </li>
    );
  }
}

export default EmailPreview;
