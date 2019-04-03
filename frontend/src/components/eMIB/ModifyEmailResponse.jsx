import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import PopupBox, { BUTTON_TYPE } from "../commons/PopupBox";

class ModifyEmailResponse extends Component {
  static propTypes = {
    showDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    saveEmail: PropTypes.func.isRequired
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
