import React, { Component } from "react";
import PropTypes from "prop-types";
import { OverlayTrigger, Popover } from "react-bootstrap";
import LOCALIZE from "../../text_resources";
import { actionShape } from "./constants";
import "../../css/inbox.css";

const styles = {
  container: {
    maxHeight: "calc(100vh - 300px)",
    overflow: "auto",
    width: 500
  },
  header: {
    color: "#00565E",
    paddingTop: 12
  },
  hr: {
    margin: "6px 0",
    borderColor: "#00565E"
  },
  tasks: {
    title: {
      float: "left",
      marginRight: 6
    },
    icon: {
      color: "#00565E",
      marginTop: "4px",
      width: 15
    },
    tooltipContainer: {
      marginLeft: 6,
      padding: 6,
      maxWidth: 500,
      borderColor: "#00565E"
    },
    tooltipContent: {
      color: "#00565E",
      margin: 0
    },
    textArea: {
      padding: "6px 12px",
      border: "1px solid #00565E",
      borderRadius: 4,
      width: "100%",
      height: 125,
      resize: "none"
    }
  },
  reasonsForAction: {
    title: {
      float: "left",
      marginRight: 6
    },
    icon: {
      color: "#00565E",
      marginTop: "4px"
    },
    textArea: {
      padding: "6px 12px",
      border: "1px solid #00565E",
      borderRadius: 4,
      width: "100%",
      height: 100,
      resize: "none"
    }
  }
};

class EditTask extends Component {
  state = {
    task: !this.props.action ? "" : this.props.action.task,
    reasonsForAction: !this.props.action ? "" : this.props.action.reasonsForAction
  };

  static propTypes = {
    emailNumber: PropTypes.number.isRequired,
    emailSubject: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    action: actionShape
  };

  onTaskContentChange = event => {
    const newTaskContent = event.target.value;
    this.setState({ task: newTaskContent });
    this.props.onChange({ ...this.state, task: newTaskContent });
  };

  onReasonsForActionChange = event => {
    const newReasonForAction = event.target.value;
    this.setState({ reasonsForAction: newReasonForAction });
    this.props.onChange({ ...this.state, reasonsForAction: newReasonForAction });
  };

  render() {
    const { emailNumber, emailSubject } = this.props;
    const { task, reasonsForAction } = this.state;

    return (
      <div style={styles.container}>
        <form>
          <div>
            <label style={styles.header}>
              {LOCALIZE.formatString(
                LOCALIZE.emibTest.inboxPage.addEmailTask.header,
                emailNumber + 1,
                emailSubject
              )}
            </label>
          </div>
          <hr style={styles.hr} />
          <div>
            <div className="font-weight-bold form-group">
              <label htmlFor="your-tasks-text-area" style={styles.tasks.title}>
                {LOCALIZE.emibTest.inboxPage.addEmailTask.task}
              </label>
              <OverlayTrigger
                trigger="focus"
                placement="right"
                overlay={
                  <Popover id="task-tooltip" style={styles.tasks.tooltipContainer}>
                    <div>
                      <p style={styles.tasks.tooltipContent}>
                        {LOCALIZE.emibTest.inboxPage.taskContent.taskTooltipPart1}
                      </p>
                      <p style={styles.tasks.tooltipContent}>
                        {LOCALIZE.emibTest.inboxPage.taskContent.taskTooltipPart1}
                      </p>
                    </div>
                  </Popover>
                }
              >
                <i
                  id="task-tooltip"
                  tabIndex="0"
                  className="fas fa-question-circle"
                  style={styles.tasks.icon}
                />
              </OverlayTrigger>
              <textarea
                id="your-tasks-text-area"
                maxLength="100"
                style={styles.tasks.textArea}
                value={task}
                onChange={this.onTaskContentChange}
              />
            </div>
          </div>
          <div>
            <div className="font-weight-bold form-group">
              <label htmlFor="reasons-for-action-text-area" style={styles.reasonsForAction.title}>
                {LOCALIZE.emibTest.inboxPage.addEmailTask.reasonsForAction}
              </label>
              <i className="fas fa-question-circle" style={styles.reasonsForAction.icon} />
              <textarea
                id="reasons-for-action-text-area"
                maxLength="100"
                style={styles.reasonsForAction.textArea}
                value={reasonsForAction}
                onChange={this.onReasonsForActionChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default EditTask;
