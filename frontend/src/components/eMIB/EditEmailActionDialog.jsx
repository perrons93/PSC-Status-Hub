import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import ModifyEmailBody from "./ModifyEmailBody";
import ModifyTaskBody from "./ModifyTaskBody";
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
  title: {
    fontSize: 16,
    fontWeight: 600
  },
  modalHeader: {
    display: "table",
    top: 0,
    right: 0,
    width: "100%",
    padding: "0 0 0 0",
    backgroundColor: "#00565E",
    color: "white"
  }
};

class EditEmailActionDialog extends Component {
  static propTypes = {
    showDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    saveEmail: PropTypes.func.isRequired,
    responseType: PropTypes.string.isRequired,
    modificationType: PropTypes.string.isRequired
  };

  buttonCloseAndAction = () => {
    this.props.saveEmail();
    this.props.handleClose();
  };

  render() {
    const { showDialog, handleClose, responseType, modificationType } = this.props;

    // Note the header has a span within a span: this is to make testing easier:
    // Rather than checking all the possible titles, just check that the span is present
    return (
      <div>
        <Modal id="email-response" show={showDialog} onHide={handleClose}>
          <div>
            <Modal.Header closeButton style={styles.modalHeader}>
              {
                <span style={styles.title}>
                  &emsp;
                  {responseType === ACTION_TYPE.email ? (
                    <i className="fas fa-envelope" />
                  ) : (
                    <i className="fas fa-tasks" />
                  )}
                  &emsp;
                  <span>
                    {modificationType === EDIT_MODE.create
                      ? LOCALIZE.emibTest.inboxPage.editEmailActionDialog.add
                      : LOCALIZE.emibTest.inboxPage.editEmailActionDialog.modify}
                  </span>{" "}
                  {responseType === ACTION_TYPE.email
                    ? LOCALIZE.emibTest.inboxPage.editEmailActionDialog.email
                    : LOCALIZE.emibTest.inboxPage.editEmailActionDialog.task}{" "}
                  {LOCALIZE.emibTest.inboxPage.editEmailActionDialog.response}
                </span>
              }
            </Modal.Header>
            <Modal.Body>
              {responseType === ACTION_TYPE.email ? <ModifyEmailBody /> : <ModifyTaskBody />}
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
