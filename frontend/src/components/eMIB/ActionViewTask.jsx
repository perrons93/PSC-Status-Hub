import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/collapsing-item.css";
import LOCALIZE from "../../text_resources";
import { actionShape } from "./constants";

const styles = {
  taskStyle: {
    marginTop: 18
  },
  hr: {
    margin: "16px 0 16px 0"
  },
  editButton: {
    float: "right"
  }
};

class ActionViewTask extends Component {
  static propTypes = {
    action: actionShape,
    emailId: PropTypes.number.isRequired
  };

  render() {
    const action = this.props.action;
    return (
      <div aria-label={LOCALIZE.ariaLabel.taskDetails}>
        <div tabIndex="0">
          <h6 style={styles.taskStyle}>{LOCALIZE.emibTest.inboxPage.taskContent.task}</h6>
          <p>{action.task}</p>
        </div>
        <hr style={styles.hr} />
        <div tabIndex="0">
          <h6>{LOCALIZE.emibTest.inboxPage.emailResponse.reasonsForAction}</h6>
          <p>{action.reasonsForAction}</p>
        </div>
        <hr style={styles.hr} />
        <div aria-label={LOCALIZE.ariaLabel.taskOptions}>
          <button className="btn btn-primary" style={styles.editButton}>
            {LOCALIZE.emibTest.inboxPage.emailCommons.editButton}
          </button>
          <button className="btn btn-danger">
            {LOCALIZE.emibTest.inboxPage.emailCommons.deleteButton}
          </button>
        </div>
      </div>
    );
  }
}
export default ActionViewTask;
