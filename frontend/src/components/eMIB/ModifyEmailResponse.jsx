import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import PopupBox, { BUTTON_TYPE } from "../commons/PopupBox";
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
    backgroundColor: "#00565E",
    color: "white",
    fontSize: 16,
    width: "100%"
  } /*,
  boxshape: {
    borderWidth: "1px 1px 0 1px",
    borderStyle: "solid",
    borderColor: "#00565e",
    borderRadius: "0px 0px 0px 0px"
  },
  boxContent: {
    paddingLeft: 20,
    paddingRight: 20
  }*/,
  modalHeader: {
    display: "table",
    width: "100%"
  } /*,
  modelTitle: {
    position: "absolute",
    fontSize: "28px"
  }*/
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
        <Modal show={showDialog} onHide={handleClose} style={styles.modal}>
          <div style={styles.boxContent}>
            <Modal.Header closeButton style={styles.modalHeader}>
              <Modal.Title>
                {
                  <span style={styles.title}>
                    {responseType === RESPONSE_TYPE.email ? (
                      <i className="fas fa-envelope" />
                    ) : (
                      <i className="fas fa-tasks" />
                    )}
                    &emsp;{modificationType === MODIFICATION_TYPE.add ? "TODO Add" : "TODO Modify"}{" "}
                    {responseType === RESPONSE_TYPE.email ? "TODO email" : "TODO task"} response
                  </span>
                }
              </Modal.Title>
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
                    {LOCALIZE.commons.startTest}
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
