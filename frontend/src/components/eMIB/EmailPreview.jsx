import React, { Component } from "react";
import PropTypes from "prop-types";
import email_read from "../../images/email_read.svg";
import email_unread from "../../images/email_unread.svg";
/*import forward from "../../images/forward.svg";
import reply_all from "../../images/reply_all.svg";
import reply_sent from "../../images/reply_sent.svg";
import reply from "../../images/reply.svg";
import tasks from "../../images/tasks.svg";*/

const styles = {
  //buttons
  button: {
    width: 155,
    textAlign: "left",
    borderRadius: 4,
    padding: 6,
    border: "2px solid #00565E"
  },
  // 3x background colors
  button_selected_background: {
    backgroundColor: "#00565E"
  },
  button_read_background: {
    backgroundColor: "#F5F5F5"
  },
  button_unread_background: {
    backgroundColor: "white"
  },
  // 2x text colors
  button_selected_text: {
    color: "#D3FCFF"
  },
  button_unselected_text: {
    color: "black"
  },
  //images
  image: {
    maxWidth: 16
  },
  //li
  li: {
    listStyleType: "none"
  },
  //subject line
  subject_selected: {
    color: "white"
  },
  subject_unselected: {
    color: "#00565E"
  },
  subject_read: {
    fontWeight: "normal"
  },
  subject_unread: {
    fontWeight: "bold"
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
    //READ/UNREAD CHECK
    //defaults, or if unread
    var button_background_color = styles.button_unread_background;
    var page_style = "";
    var img_src = <i class="fas fa-envelope" />; //email_unread;
    var img_alt = "unread";
    var div_id = "unread-email-preview";
    var subject_is_read = styles.subject_unread;
    if (this.props.isRead === true) {
      //if it is read
      button_background_color = styles.button_read_background;
      subject_is_read = styles.subject_read;
      page_style = "page";
      img_src = <i class="far fa-envelope-open" />; //email_read;
      img_alt = "read";
      div_id = "read-email-preview";
    }

    //SELECTED/UNSELECTED CHECK
    //defaults, or unselected
    var button_text_color = styles.button_unselected_text;
    var subject_is_selected = styles.subject_unselected;
    if (this.props.selected === true) {
      //it it is selected
      button_background_color = styles.button_selected_background;
      button_text_color = styles.button_selected_text;
      subject_is_selected = styles.subject_selected;
    }
    var button_style = { ...styles.button, ...button_text_color, ...button_background_color };
    var subject = { ...subject_is_read, ...subject_is_selected };
    const email = this.props.email;
    return (
      <li style={styles.li} aria-current={page_style} role="menuitem">
        <div style={button_style} onClick={() => this.props.clickFunction(email.id)}>
          <div id={div_id}>
            {img_src} email id#
            {email.id}
          </div>
          <div style={subject}>{email.subject}</div>
          <div>{email.from}</div>
        </div>
      </li>
    );
  }
}

export default EmailPreview;
