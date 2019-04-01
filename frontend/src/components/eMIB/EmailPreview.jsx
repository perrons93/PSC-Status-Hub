import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";

const styles = {
  //buttons
  button: {
    width: 200,
    textAlign: "left",
    padding: 8,
    border: "1px solid #00565E",
    cursor: "pointer",
    fontSize: 14
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
  buttonUnselectedSymbol: {
    color: "#00565E"
  },
  //li
  li: {
    listStyleType: "none"
  },
  //subject line
  subjectGeneral: {
    fontSize: 16
  },
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
  },
  truncated: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
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
    let subjectIsRead = styles.subjectUnread;
    if (this.props.isRead) {
      //if it is read
      buttonBackgroundColor = styles.buttonReadBackground;
      subjectIsRead = styles.subjectRead;
    }

    //SELECTED/UNSELECTED CHECK
    //defaults, or unselected
    let buttonTextColor = styles.buttonUnselectedText;
    let subjectIsSelected = styles.subjectUnselected;
    if (this.props.isSelected) {
      //if it is selected
      buttonBackgroundColor = styles.buttonSelectedBackground;
      buttonTextColor = styles.buttonSelectedText;
      subjectIsSelected = styles.subjectSelected;
    }

    let buttonStyle = { ...styles.button, ...buttonTextColor, ...buttonBackgroundColor };
    let subject = {
      ...styles.subjectGeneral,
      ...subjectIsRead,
      ...subjectIsSelected,
      ...styles.truncated
    };
    const email = this.props.email;
    return (
      <li
        id={
          this.props.isSelected
            ? "unit-test-selected-email-preview"
            : "unit-test-unselected-email-preview"
        }
        style={styles.li}
        aria-current={this.props.isSelected ? "page" : ""}
        role="menuitem"
      >
        <div style={buttonStyle} onClick={() => this.props.selectEmail(email.id)}>
          <div id={this.props.isRead ? "read-email-preview" : "unread-email-preview"}>
            {this.props.isRead ? (
              <i
                className="far fa-envelope-open"
                style={
                  this.props.isSelected ? styles.buttonSelectedText : styles.buttonUnselectedSymbol
                }
              />
            ) : (
              <i
                className="fas fa-envelope"
                style={
                  this.props.isSelected ? styles.buttonSelectedText : styles.buttonUnselectedSymbol
                }
              />
            )}
            &nbsp;
            {LOCALIZE.emibTest.inboxPage.emailId}
            {email.visibleID}&emsp;
            {this.props.isRepliedTo && <i className="fas fa-sign-out-alt" />}
          </div>
          <div style={subject}>{email.subject}</div>
          <div style={styles.truncated}>{email.from}</div>
        </div>
      </li>
    );
  }
}

export default EmailPreview;
