import React, { Component } from "react";
import PropTypes from "prop-types";

class ModifyTaskBody extends Component {
  static propTypes = {
    showDialog: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    saveEmail: PropTypes.func.isRequired,
    responseType: PropTypes.string.isRequired,
    modificationType: PropTypes.string.isRequired
  };

  render() {
    return <div>Task Body is Under Construction</div>;
  }
}
export default ModifyTaskBody;
