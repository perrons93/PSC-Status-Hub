import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LOCALIZE from "../../text_resources";
import EditEmail from "./EditEmail";
import EditTask from "./EditTask";
import { Modal } from "react-bootstrap";
import PopupBox, { BUTTON_TYPE } from "../commons/PopupBox";
import SystemMessage, { MESSAGE_TYPE } from "../commons/SystemMessage";
import { ACTION_TYPE, EDIT_MODE, actionShape } from "./constants";
import {
  addEmail,
  addTask,
  updateEmail,
  updateTask,
  readEmail
} from "../../modules/EmibInboxRedux";

const styles = {
  icon: {
    float: "left",
    marginTop: 14,
    marginRight: 8
  },
  dialogHeaderText: {
    float: "left",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  modalHeader: {
    backgroundColor: "#00565E",
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    borderRadius: "9px 9px 0px 0px",
    paddingTop: 0,
    paddingBottom: 0
  },
  closeButton: {
    backgroundColor: "transparent",
    float: "right",
    color: "white",
    border: 0,
    marginTop: 11
  },
  modalBody: {
    paddingTop: 0,
    paddingBottom: 0
  },
  fullWidth: {
    width: "100%"
  }
};

class EditActionDialog extends Component {
  static propTypes = {
    emailId: PropTypes.number.isRequired,
    emailSubject: PropTypes.string,
    showDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    actionType: PropTypes.oneOf(Object.keys(ACTION_TYPE)).isRequired,
    editMode: PropTypes.oneOf(Object.keys(EDIT_MODE)).isRequired,
    // Provided from Redux.
    addEmail: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    updateEmail: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    readEmail: PropTypes.func.isRequired,
    // Only needed when updating an existing one
    action: actionShape,
    actionId: PropTypes.number
  };

  state = {
    action: {},
    showCancelConfirmationDialog: false
  };

  handleSave = () => {
    this.props.handleClose();
    if (this.props.actionType === ACTION_TYPE.email && this.props.editMode === EDIT_MODE.create) {
      this.props.addEmail(this.props.emailId, this.state.action);
      this.props.readEmail(this.props.emailId);
    } else if (
      this.props.actionType === ACTION_TYPE.task &&
      this.props.editMode === EDIT_MODE.create
    ) {
      this.props.addTask(this.props.emailId, this.state.action);
      this.props.readEmail(this.props.emailId);
    } else if (
      this.props.actionType === ACTION_TYPE.email &&
      this.props.editMode === EDIT_MODE.update
    ) {
      this.props.updateEmail(this.props.emailId, this.props.actionId, this.state.action);
    } else if (
      this.props.actionType === ACTION_TYPE.task &&
      this.props.editMode === EDIT_MODE.update
    ) {
      this.props.updateTask(this.props.emailId, this.props.actionId, this.state.action);
    }
    this.setState({ action: {} });
  };

  // updatedAction is the PropType shape actionShape and represents a single action a candidate takes on an email
  editAction = updatedAction => {
    this.setState({ action: updatedAction });
  };

  handleClose = () => {
    this.setState({ showCancelConfirmationDialog: true });
  };

  showCancelConfirmationDialog = () => {
    this.setState({ showCancelConfirmationDialog: true });
  };

  closeCancelConfirmationDialog = () => {
    this.setState({ showCancelConfirmationDialog: false });
  };

  render() {
    const { showDialog, handleClose, actionType, editMode } = this.props;
    return (
      <div>
        {!this.state.showCancelConfirmationDialog && (
          <Modal show={showDialog} onHide={this.handleClose}>
            <div>
              <Modal.Header style={styles.modalHeader}>
                {
                  <div style={styles.fullWidth}>
                    {actionType === ACTION_TYPE.email && (
                      <div style={styles.fullWidth}>
                        <i style={styles.icon} className="fas fa-envelope" />
                        <h3 style={styles.dialogHeaderText}>
                          {editMode === EDIT_MODE.create &&
                            LOCALIZE.emibTest.inboxPage.editActionDialog.addEmail}
                          {editMode === EDIT_MODE.update &&
                            LOCALIZE.emibTest.inboxPage.editActionDialog.editEmail}
                        </h3>
                        <button onClick={handleClose} style={styles.closeButton}>
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    )}
                    {actionType === ACTION_TYPE.task && (
                      <div style={styles.fullWidth}>
                        <i style={styles.icon} className="fas fa-tasks" />
                        <h3 style={styles.dialogHeaderText}>
                          {editMode === EDIT_MODE.create &&
                            LOCALIZE.emibTest.inboxPage.editActionDialog.addTask}
                          {editMode === EDIT_MODE.update &&
                            LOCALIZE.emibTest.inboxPage.editActionDialog.editTask}
                        </h3>
                        <button onClick={handleClose} style={styles.closeButton}>
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    )}
                  </div>
                }
              </Modal.Header>
              <Modal.Body style={styles.modalBody}>
                {actionType === ACTION_TYPE.email && (
                  <EditEmail
                    onChange={this.editAction}
                    action={editMode === EDIT_MODE.update ? this.props.action : null}
                  />
                )}
                {actionType === ACTION_TYPE.task && (
                  <EditTask
                    emailNumber={this.props.emailId}
                    emailSubject={this.props.emailSubject}
                    onChange={this.editAction}
                    action={editMode === EDIT_MODE.update ? this.props.action : null}
                  />
                )}
              </Modal.Body>
              <Modal.Footer>
                <div>
                  <div>
                    <button
                      id="unit-test-email-response-button"
                      type="button"
                      className="btn btn-primary"
                      onClick={this.handleSave}
                      disabled={!this.props.showDialog}
                    >
                      {LOCALIZE.emibTest.inboxPage.editActionDialog.save}
                    </button>
                  </div>
                </div>
              </Modal.Footer>
            </div>
          </Modal>
        )}
        {this.state.showCancelConfirmationDialog && (
          <PopupBox
            show={this.state.showCancelConfirmationDialog}
            handleClose={this.closeCancelConfirmationDialog}
            title={"TITLE"}
            description={
              <div>
                <div>
                  <SystemMessage
                    messageType={MESSAGE_TYPE.error}
                    title={"TITLE"}
                    message={"Message here..."}
                  />
                </div>
              </div>
            }
            leftButtonType={BUTTON_TYPE.danger}
            leftButtonTitle={"Cancel response"}
            leftButtonAction={handleClose}
            rightButtonType={BUTTON_TYPE.primary}
            rightButtonTitle={"Return to response"}
          />
        )}
      </div>
    );
  }
}

export { EditActionDialog as UnconnectedEditActionDialog };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addEmail,
      addTask,
      updateEmail,
      updateTask,
      readEmail
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(EditActionDialog);
