import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import EditEmail from "./EditEmail";
import EditTask from "./EditTask";
import { Modal } from "react-bootstrap";

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
    borderRadius: "10px 10px 0px 0px"
  }
};

class EditEmailActionDialog extends Component {
  static propTypes = {
    showDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    saveEmail: PropTypes.func.isRequired,
    actionType: PropTypes.oneOf([ACTION_TYPE.email, ACTION_TYPE.task]).isRequired,
    editMode: PropTypes.oneOf([EDIT_MODE.create, EDIT_MODE.update]).isRequired
  };

  handleSave = () => {
    this.props.saveEmail();
    this.props.handleClose();
  };

  render() {
    const { showDialog, handleClose, actionType, editMode } = this.props;
    return (
      <div>
        <Modal show={showDialog} onHide={handleClose}>
          <div>
            <Modal.Header style={styles.modalHeader}>
              {
                <div style={styles.title}>
                  {actionType === ACTION_TYPE.email && (
                    <div>
                      <i style={styles.icon} className="fas fa-envelope" />
                      <h3 style={styles.dialogHeaderText}>
                        {editMode === EDIT_MODE.create &&
                          LOCALIZE.emibTest.inboxPage.editEmailActionDialog.addEmail}
                        {editMode === EDIT_MODE.update &&
                          LOCALIZE.emibTest.inboxPage.editEmailActionDialog.editEmail}
                      </h3>
                    </div>
                  )}
                  {actionType === ACTION_TYPE.task && (
                    <div>
                      <i style={styles.icon} className="fas fa-tasks" />
                      <h3 style={styles.dialogHeaderText}>
                        {editMode === EDIT_MODE.create &&
                          LOCALIZE.emibTest.inboxPage.editEmailActionDialog.addTask}
                        {editMode === EDIT_MODE.update &&
                          LOCALIZE.emibTest.inboxPage.editEmailActionDialog.editTask}
                      </h3>
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
                    onClick={this.handleSave}
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
