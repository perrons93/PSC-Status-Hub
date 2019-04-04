import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import EmailPreview from "./EmailPreview";
import Email from "./Email";
import "../../css/inbox.css";
import { HEADER_HEIGHT, FOOTER_HEIGHT } from "./constants";
import { readEmail } from "../../modules/EmibInboxRedux";

const INBOX_HEIGHT = `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`;

const styles = {
  ul: {
    borderBottom: "none"
  },
  buttonList: {
    overflow: "auto",
    width: 219,
    paddingRight: 25,
    height: INBOX_HEIGHT
  },
  bodyContent: {
    overflow: "auto",
    height: INBOX_HEIGHT
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
    // Provided by redux
    emails: PropTypes.array,
    emailSummaries: PropTypes.array.isRequired,
    readEmail: PropTypes.func.isRequired
  };

  state = {
    currentEmail: 0,
    emailResponses: initializeFalseArray(this.props.emails.length)
  };

  changeEmail = index => {
    this.props.readEmail(this.state.currentEmail);
    this.setState({ currentEmail: index });
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
                  isRead={this.props.emailSummaries[index].isRead}
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

export { Inbox as UnconnectedInbox };
const mapStateToProps = (state, ownProps) => {
  return {
    emails: state.emibInbox.emails,
    emailSummaries: state.emibInbox.emailSummaries
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      readEmail
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox);
