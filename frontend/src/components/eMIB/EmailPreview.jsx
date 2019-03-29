import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";

const styles = {
  //buttons
  button: {
    width: 155,
    textAlign: "left",
    borderRadius: 4,
    padding: 6,
    border: "2px solid #00565E",
    cursor: "pointer"
  },
  button_selected_background: {
    backgroundColor: "#00565E"
  },
  button_read_background: {
    backgroundColor: "#F5F5F5"
  },
  button_unread_background: {
    backgroundColor: "white"
  },
  button_selected_text: {
    color: "#D3FCFF"
  },
  button_unselected_text: {
    color: "black"
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
    selectEmail: PropTypes.func.isRequired,
    isRead: PropTypes.bool.isRequired,
    isRepliedTo: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired
  };

  render() {
    //READ/UNREAD CHECK
    //defaults, or if unread
    var button_background_color = styles.button_unread_background;
    var img_src = <i className="fas fa-envelope" />; //email_unread;
    var div_id = "unread-email-preview";
    var subject_is_read = styles.subject_unread;
    if (this.props.isRead) {
      //if it is read
      button_background_color = styles.button_read_background;
      subject_is_read = styles.subject_read;
      img_src = <i className="far fa-envelope-open" />; //email_read;
      div_id = "read-email-preview";
    }

    //SELECTED/UNSELECTED CHECK
    //defaults, or unselected
    var unit_test_id = "unit-test-unselected-email-preview";
    var page_style = "";
    var button_text_color = styles.button_unselected_text;
    var subject_is_selected = styles.subject_unselected;
    if (this.props.isSelected) {
      //if it is selected
      unit_test_id = "unit-test-selected-email-preview";
      page_style = "page";
      button_background_color = styles.button_selected_background;
      button_text_color = styles.button_selected_text;
      subject_is_selected = styles.subject_selected;
    }

    //REPLIED TO/NOT REPLIED TO CHECK
    //defaults, or no reply
    var reply = <></>;
    if (this.props.isRepliedTo) {
      //if it is replied to
      reply = <i className="fas fa-sign-out-alt" />;
    }

    var button_style = { ...styles.button, ...button_text_color, ...button_background_color };
    var subject = { ...subject_is_read, ...subject_is_selected };
    const email = this.props.email;
    return (
      <li id={unit_test_id} style={styles.li} aria-current={page_style} role="menuitem">
        <div style={button_style} onClick={() => this.props.selectEmail(email.id)}>
          <div id={div_id}>
            {img_src}
            {LOCALIZE.emibTest.inboxPage.emailId}
            {email.id}&emsp;
            {reply}
          </div>
          <div style={subject}>{email.subject}</div>
          <div>{email.from}</div>
        </div>
      </li>
    );
  }
}

export default EmailPreview;
