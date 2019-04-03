import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import PopupBox, { BUTTON_TYPE } from "../commons/PopupBox";

export const RESPONSE_TYPE = {
  email: "email",
  task: "task"
};

export const MODIFICATION_TYPE = {
  add: "add",
  modify: "modify"
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
    return (
      <div>
        <PopupBox
          show={this.props.showDialog}
          handleClose={this.props.handleClose}
          title={LOCALIZE.commons.confirmStartTest.aboutToStart}
          description={
            <div>
              <p>{LOCALIZE.commons.confirmStartTest.instructionsAccess}</p>
            </div>
          }
          rightButtonType={BUTTON_TYPE.primary}
          rightButtonTitle={LOCALIZE.commons.startTest}
          rightButtonAction={this.props.saveEmail}
        />
      </div>
    );
  }
}
export default ModifyEmailResponse;
