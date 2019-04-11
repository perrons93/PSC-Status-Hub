import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/collapsing-item.css";
import LOCALIZE from "../../text_resources";
import EditActionDialog from "./EditActionDialog";
import { ACTION_TYPE, EDIT_MODE, EMAIL_TYPE, actionShape } from "./constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteEmail } from "../../modules/EmibInboxRedux";

const styles = {
  responseType: {
    description: {
      float: "left",
      margin: "4px 0 0 0"
    },
    icon: {
      color: "white",
      margin: "0 8px",
      padding: 3,
      backgroundColor: "#00565E",
      border: "3px solid #009FAE",
      borderRadius: 4
    },
    attribute: {
      color: "#00565E",
      textDecoration: "underline"
    }
  },
  header: {
    zone: {
      minHeight: 95
    },
    elementHeight: {
      minHeight: 24
    },
    toAndCcTitle: {
      float: "left",
      width: 32,
      height: 32,
      margin: "2px 0 0 0"
    },
    toFieldMargin: {
      margin: "9px 0 12px 0"
    }
  },
  hr: {
    margin: "16px 0 16px 0"
  },
  editButton: {
    float: "right"
  }
};

class ActionViewEmail extends Component {
  static propTypes = {
    action: actionShape,
    actionId: PropTypes.number.isRequired,
    emailId: PropTypes.number.isRequired,
    // Props from Redux
    deleteEmail: PropTypes.func
  };

  state = {
    showEmailDialog: false
  };

  showEmailDialog = () => {
    this.setState({ showEmailDialog: true });
  };

  closeEmailDialog = () => {
    this.setState({ showEmailDialog: false });
  };

  render() {
    const action = this.props.action;
    return (
      <div aria-label={LOCALIZE.ariaLabel.responseDetails}>
        <div style={styles.header.zone} tabIndex="0">
          <div style={styles.header.elementHeight}>
            <h6 style={styles.responseType.description}>
              {LOCALIZE.emibTest.inboxPage.emailResponse.description}
            </h6>
            {action.emailType === EMAIL_TYPE.reply && (
              <>
                <i className="fas fa-reply" style={styles.responseType.icon} />
                <span style={styles.responseType.attribute}>
                  {LOCALIZE.emibTest.inboxPage.emailCommons.reply}
                </span>
              </>
            )}
            {action.emailType === EMAIL_TYPE.replyAll && (
              <>
                <i className="fas fa-reply-all" style={styles.responseType.icon} />
                <span style={styles.responseType.attribute}>
                  {LOCALIZE.emibTest.inboxPage.emailCommons.replyAll}
                </span>
              </>
            )}
            {action.emailType === EMAIL_TYPE.forward && (
              <>
                <i className="fas fa-share-square" style={styles.responseType.icon} />
                <span style={styles.responseType.attribute}>
                  {LOCALIZE.emibTest.inboxPage.emailCommons.forward}
                </span>
              </>
            )}
          </div>
          <div style={{ ...styles.header.toFieldMargin, ...styles.header.elementHeight }}>
            <h6 style={styles.header.toAndCcTitle}>
              {LOCALIZE.emibTest.inboxPage.emailCommons.to}
            </h6>
            <span>{action.emailTo}</span>
          </div>
          <div style={styles.header.elementHeight}>
            <h6 style={styles.header.toAndCcTitle}>
              {LOCALIZE.emibTest.inboxPage.emailCommons.cc}
            </h6>
            <span>{action.emailCc}</span>
          </div>
        </div>
        <hr style={styles.hr} />
        <div tabIndex="0">
          <h6>{LOCALIZE.emibTest.inboxPage.emailResponse.response}</h6>
          <p>{action.emailBody}</p>
        </div>
        <hr style={styles.hr} />
        <div tabIndex="0">
          <h6>{LOCALIZE.emibTest.inboxPage.emailResponse.reasonsForAction}</h6>
          <p>{action.reasonsForAction}</p>
        </div>
        <hr style={styles.hr} />
        <div aria-label={LOCALIZE.ariaLabel.emailOptions}>
          <button
            className="btn btn-primary"
            style={styles.editButton}
            onClick={this.showEmailDialog}
          >
            {LOCALIZE.emibTest.inboxPage.emailCommons.editButton}
          </button>
          <button
            id="unit-test-view-email-delete-button"
            className="btn btn-danger"
            onClick={() => this.props.deleteEmail(this.props.emailId, this.props.actionId)}
          >
            {LOCALIZE.emibTest.inboxPage.emailCommons.deleteButton}
          </button>
        </div>
        <EditActionDialog
          emailId={this.props.emailId}
          showDialog={this.state.showEmailDialog}
          handleClose={this.closeEmailDialog}
          actionType={ACTION_TYPE.email}
          editMode={EDIT_MODE.update}
          action={action}
          actionId={this.props.actionId}
        />
      </div>
    );
  }
}

export { ActionViewEmail as UnconnectedActionViewEmail };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteEmail
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(ActionViewEmail);
