import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import EmailPreview from "./EmailPreview";
import Email from "./Email";
import "../../css/inbox.css";
import { HEADER_HEIGHT, FOOTER_HEIGHT, emailShape } from "./constants";
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

class Inbox extends Component {
  static propTypes = {
    // Provided by redux
    emails: PropTypes.arrayOf(emailShape),
    emailSummaries: PropTypes.array.isRequired,
    readEmail: PropTypes.func.isRequired
  };

  state = {
    currentEmail: 0
  };

  changeEmail = index => {
    this.props.readEmail(this.state.currentEmail);
    this.setState({ currentEmail: index });
  };

  render() {
    const { emails, emailSummaries } = this.props;
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
                  isRepliedTo={
                    emailSummaries[index].emailCount + emailSummaries[index].taskCount > 0
                  }
                  isSelected={index === this.state.currentEmail}
                />
              </div>
            ))}
          </ul>
        </nav>
        <div className="inbox-grid-content-cell" style={styles.bodyContent}>
          <Email
            email={emails[this.state.currentEmail]}
            emailCount={emailSummaries[this.state.currentEmail].emailCount}
            taskCount={emailSummaries[this.state.currentEmail].taskCount}
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
