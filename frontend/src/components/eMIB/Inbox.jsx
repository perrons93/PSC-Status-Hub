import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EmailPreview from "./EmailPreview";
import Email from "./Email";
import "../../css/inbox.css";

const styles = {
  ul: {
    borderBottom: "none"
  },
  buttonList: {
    overflow: "auto",
    width: 219,
    paddingRight: 25,
    height: "calc(100vh - 241px)"
  },
  bodyContent: {
    overflow: "auto",
    height: "calc(100vh - 241px)"
  }
};

class Inbox extends Component {
  static propTypes = {
    // Provided by redux
    emails: PropTypes.array
  };

  state = {
    currentEmail: 0,
    emailRead: [false, false, false],
    emailResponses: [false, false, false]
  };

  changeEmail = index => {
    let emailsRead = Array.from(this.state.emailRead);
    emailsRead[index] = true;
    // The previous "current email" is marked as open.
    emailsRead[this.state.currentEmail] = true;
    this.setState({ currentEmail: index, emailRead: emailsRead });
  };

  respondToEmail = index => {
    let emailResponses = Array.from(this.state.emailResponses);
    emailResponses[index] = true;
    this.setState({ emailResponses: emailResponses });
  };

  render() {
    const { emails } = this.props;
    return (
      <div className="inbox-grid">
        <nav
          className="inbox-grid-buttons-cell"
          style={styles.buttonList}
          role="dialog"
          aria-label={"Inbox"}
        >
          <ul className="nav nav-tabs" style={styles.ul} role="menubar">
            {emails.map((email, index) => (
              <div key={index}>
                <EmailPreview
                  email={email}
                  selectEmail={this.changeEmail}
                  isRead={this.state.emailRead[index]}
                  isRepliedTo={this.state.emailResponses[index]}
                  isSelected={index === this.state.currentEmail}
                />
              </div>
            ))}
          </ul>
        </nav>
        <div className="inbox-grid-content-cell" style={styles.bodyContent}>
          <Email
            email={emails[this.state.currentEmail]}
            respondToEmail={this.respondToEmail}
            isRepliedTo={this.state.emailResponses[this.state.currentEmail]}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    emails: state.emibInbox.emails
  };
};

export default connect(
  mapStateToProps,
  null
)(Inbox);
