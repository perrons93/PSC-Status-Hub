import React, { Component } from "react";
import PropTypes from "prop-types";
import EmailPreview from "./EmailPreview";
import Email from "./Email";
import "../../css/inbox.css";
import { getInboxContent } from "./Emib";

const styles = {
  ul: {
    borderBottom: "none"
  },
  buttonList: {
    overflow: "auto",
    width: 174,
    paddingRight: 25,
    height: "calc(100vh - 241px)"
  },
  bodyContent: {
    overflow: "auto",
    paddingRight: 20,
    height: "calc(100vh - 241px)"
  }
};

function initializeFalseArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(false);
  }
  return arr;
}

class Inbox extends Component {
  static propTypes = {
    inboxLength: PropTypes.number.isRequired
  };

  state = {
    currentEmail: "0",
    emailRead: initializeFalseArray(this.props.inboxLength),
    emailReplies: initializeFalseArray(this.props.inboxLength)
  };

  changeEmail = index => {
    let emailsRead = Array.from(this.state.emailRead);
    emailsRead[index] = true;
    // The previous "current email" is marked as open.
    emailsRead[this.state.currentEmail] = true;
    this.setState({ currentEmail: index, emailRead: emailsRead });
  };

  respondToEmail = index => {
    let emailsReplies = Array.from(this.state.emailReplies);
    emailsReplies[index] = true;
    this.setState({ emailReplies: emailsReplies });
  };

  render() {
    const inboxSpecs = getInboxContent();
    return (
      <div className="inbox-grid">
        <nav
          className="inbox-grid-buttons-cell"
          style={styles.buttonList}
          role="dialog"
          aria-label={"Inbox"}
        >
          <ul className="nav nav-tabs" style={styles.ul} role="menubar">
            {inboxSpecs.map(email => (
              <div key={email.id}>
                <EmailPreview
                  email={email}
                  selectEmail={this.changeEmail}
                  isRead={this.state.emailRead[email.id]}
                  isRepliedTo={this.state.emailReplies[email.id]}
                  isSelected={email.id === this.state.currentEmail}
                />
              </div>
            ))}
          </ul>
        </nav>
        <div className="inbox-grid-content-cell" style={styles.bodyContent}>
          <Email
            email={inboxSpecs[this.state.currentEmail]}
            respondToEmail={this.respondToEmail}
            isRepliedTo={this.state.emailReplies[this.state.currentEmail]}
          />
        </div>
      </div>
    );
  }
}

export default Inbox;
