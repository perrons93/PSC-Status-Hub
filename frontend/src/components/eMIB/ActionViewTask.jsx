import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/collapsing-item.css";
import LOCALIZE from "../../text_resources";

const styles = {
  responseTypeIcon: {
    color: "white",
    margin: "0 8px",
    padding: 3,
    backgroundColor: "#00565E",
    border: "3px solid #009FAE",
    borderRadius: 4
  },
  responseType: {
    color: "#00565E",
    textDecoration: "underline"
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
    taskContent: PropTypes.string.isRequired,
    reasonsForAction: PropTypes.string
  };

  render() {
    const { taskContent, reasonsForAction } = this.props;
    return (
      <div>
        <div
          aria-label={LOCALIZE.ariaLabel.taskDetails}
          tabIndex="0"
          aria-describedby="task-content"
        >
          <div id="task-content" role="dialog">
            <p className="font-weight-bold">{LOCALIZE.emibTest.inboxPage.taskContent.task}</p>
            <p>{taskContent}</p>
          </div>
        </div>
        <hr style={styles.hr} />
        <div
          aria-label={LOCALIZE.ariaLabel.reasonsForActionDetails}
          tabIndex="0"
          aria-describedby="task-reasons-for-action"
        >
          <div id="task-reasons-for-action" role="dialog">
            <p className="font-weight-bold">
              {LOCALIZE.emibTest.inboxPage.emailResponse.reasonsForAction}
            </p>
            <p>{reasonsForAction}</p>
          </div>
        </div>
        <hr style={styles.hr} />
        <div aria-label={LOCALIZE.ariaLabel.emailOptions}>
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
