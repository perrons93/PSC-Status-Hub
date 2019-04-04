import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import EditEmail from "./EditEmail";
import EditTask from "./EditTask";
import { Modal } from "react-bootstrap";
import "../../css/modify-email-response.css";

export const ACTION_TYPE = {
  email: "email",
  task: "task"
};

export const EDIT_MODE = {
  create: "create",
  update: "update"
};

const styles = {
  icon: {
    float: "left",
    marginTop: 12
  },
  modalHeader: {
    backgroundColor: "#00565E",
    color: "white",
    fontSize: 16,
    fontWeight: 600
  }
};

class EditEmailActionDialog extends Component {
  static propTypes = {
    showDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    saveEmail: PropTypes.func.isRequired,
    actionType: PropTypes.string.isRequired,
    editMode: PropTypes.string.isRequired
  };

  buttonCloseAndAction = () => {
    this.props.saveEmail();
    this.props.handleClose();
  };

  render() {
    const { showDialog, handleClose, actionType, editMode } = this.props;
    return (
      <div>
        <Modal id="email-response" show={showDialog} onHide={handleClose}>
          <div>
            <Modal.Header style={styles.modalHeader}>
              {
                <div style={styles.title}>
                  {actionType === ACTION_TYPE.email && (
                    <div>
                      <i styles={styles.icon} className="fas fa-envelope" />
                      {editMode === EDIT_MODE.create && (
                        <h3>{LOCALIZE.emibTest.inboxPage.editEmailActionDialog.addEmail}</h3>
                      )}
                      {editMode === EDIT_MODE.update && (
                        <h3>{LOCALIZE.emibTest.inboxPage.editEmailActionDialog.editEmail}</h3>
                      )}
                    </div>
                  )}
                  {actionType === ACTION_TYPE.task && (
                    <div>
                      <i styles={styles.icon} className="fas fa-tasks" />
                      {editMode === EDIT_MODE.create && (
                        <h3>{LOCALIZE.emibTest.inboxPage.editEmailActionDialog.addTask}</h3>
                      )}
                      {editMode === EDIT_MODE.update && (
                        <h3>{LOCALIZE.emibTest.inboxPage.editEmailActionDialog.editTask}</h3>
                      )}
                    </div>
                  )}
                </div>
              }
            </Modal.Header>
            <Modal.Body>
              {actionType === ACTION_TYPE.email && <EditEmail />}
              {actionType === ACTION_TYPE.task && <EditTask />}
            </Modal.Body>
            <Modal.Footer>
              <div>
                <div>
                  <button
                    id="unit-test-email-response-button"
                    type="button"
                    className="btn btn-primary"
                    onClick={this.buttonCloseAndAction}
                  >
                    {LOCALIZE.emibTest.inboxPage.editEmailActionDialog.save}
                  </button>
                </div>
              </div>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    );
  }
}
export default EditEmailActionDialog;
