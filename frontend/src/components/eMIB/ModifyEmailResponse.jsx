import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import ModifyEmailBody from "./ModifyEmailBody";
import ModifyTaskBody from "./ModifyTaskBody";
import { Modal } from "react-bootstrap";

export const RESPONSE_TYPE = {
  email: "email",
  task: "task"
};

export const MODIFICATION_TYPE = {
  add: "add",
  modify: "modify"
};

const styles = {
  title: {
    fontSize: 16
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

class ModifyEmailResponse extends Component {
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
    const { showDialog, handleClose, saveEmail, responseType, modificationType } = this.props;

    return (
      <div>
        <Modal show={showDialog} onHide={handleClose}>
          <div>
            <Modal.Header closeButton style={styles.modalHeader}>
              {
                <span style={styles.title}>
                  {responseType === RESPONSE_TYPE.email ? (
                    <i className="fas fa-envelope" />
                  ) : (
                    <i className="fas fa-tasks" />
                  )}
                  &emsp;
                  {modificationType === MODIFICATION_TYPE.add
                    ? LOCALIZE.emibTest.inboxPage.modifyEmailResponse.add
                    : LOCALIZE.emibTest.inboxPage.modifyEmailResponse.modify}{" "}
                  {responseType === RESPONSE_TYPE.email
                    ? LOCALIZE.emibTest.inboxPage.modifyEmailResponse.email
                    : LOCALIZE.emibTest.inboxPage.modifyEmailResponse.task}{" "}
                  response
                </span>
              }
            </Modal.Header>
            <Modal.Body>
              {responseType === RESPONSE_TYPE.email ? <ModifyEmailBody /> : <ModifyTaskBody />}
            </Modal.Body>
            <Modal.Footer>
              <div>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.buttonCloseAndAction}
                  >
                    {LOCALIZE.emibTest.inboxPage.modifyEmailResponse.save}
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
export default ModifyEmailResponse;
