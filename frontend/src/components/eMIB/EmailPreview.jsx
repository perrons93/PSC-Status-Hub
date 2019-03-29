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
  buttonSelectedBackground: {
    backgroundColor: "#00565E"
  },
  buttonReadBackground: {
    backgroundColor: "#F5F5F5"
  },
  buttonUnreadBackground: {
    backgroundColor: "white"
  },
  buttonSelectedText: {
    color: "#D3FCFF"
  },
  buttonUnselectedText: {
    color: "black"
  },
  //li
  li: {
    listStyleType: "none"
  },
  //subject line
  subjectSelected: {
    color: "white"
  },
  subjectUnselected: {
    color: "#00565E"
  },
  subjectRead: {
    fontWeight: "normal"
  },
  subjectUnread: {
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
    let buttonBackgroundColor = styles.buttonUnreadBackground;
    let imgSrc = <i className="fas fa-envelope" />; //emailUnread;
    let divId = "unread-email-preview";
    let subjectIsRead = styles.subjectUnread;
    if (this.props.isRead) {
      //if it is read
      buttonBackgroundColor = styles.buttonReadBackground;
      subjectIsRead = styles.subjectRead;
      imgSrc = <i className="far fa-envelope-open" />; //emailRead;
      divId = "read-email-preview";
    }

    //SELECTED/UNSELECTED CHECK
    //defaults, or unselected
    let unitTestId = "unit-test-unselected-email-preview";
    let pageStyle = "";
    let buttonTextColor = styles.buttonUnselectedText;
    let subjectIsSelected = styles.subjectUnselected;
    if (this.props.isSelected) {
      //if it is selected
      unitTestId = "unit-test-selected-email-preview";
      pageStyle = "page";
      buttonBackgroundColor = styles.buttonSelectedBackground;
      buttonTextColor = styles.buttonSelectedText;
      subjectIsSelected = styles.subjectSelected;
    }

    //REPLIED TO/NOT REPLIED TO CHECK
    //defaults, or no reply
    let reply = <></>;
    if (this.props.isRepliedTo) {
      //if it is replied to
      reply = <i className="fas fa-sign-out-alt" />;
    }

    let buttonStyle = { ...styles.button, ...buttonTextColor, ...buttonBackgroundColor };
    var subject = { ...subjectIsRead, ...subjectIsSelected };
    const email = this.props.email;
    return (
      <li id={unitTestId} style={styles.li} aria-current={pageStyle} role="menuitem">
        <div style={buttonStyle} onClick={() => this.props.selectEmail(email.id)}>
          <div id={divId}>
            {imgSrc}
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
