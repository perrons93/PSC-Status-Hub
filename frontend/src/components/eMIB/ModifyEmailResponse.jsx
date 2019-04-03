import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import PopupBox, { BUTTON_TYPE } from "../commons/PopupBox";
import ModifyEmailBody from "./ModifyEmailBody";
import ModifyTaskBody from "./ModifyTaskBody";

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
    top: 0,
    right: 0,
    backgroundColor: "#00565E",
    color: "white",
    fontSize: 16,
    width: "100%"
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

  render() {
    const { showDialog, handleClose, saveEmail, responseType, modificationType } = this.props;

    return (
      <div>
        <PopupBox
          show={showDialog}
          handleClose={handleClose}
          title={
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
          description={
            <div>
              {responseType === RESPONSE_TYPE.email ? <ModifyEmailBody /> : <ModifyTaskBody />}
            </div>
          }
          rightButtonType={BUTTON_TYPE.primary}
          rightButtonTitle={LOCALIZE.commons.startTest}
          rightButtonAction={saveEmail}
          noEdge={true}
        />
      </div>
    );
  }
}
export default ModifyEmailResponse;
