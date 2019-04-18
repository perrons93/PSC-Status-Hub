import React, { Component } from "react";
import PropTypes from "prop-types";
import { OverlayTrigger, Popover } from "react-bootstrap";
import LOCALIZE from "../../text_resources";
import { actionShape } from "./constants";
import "../../css/inbox.css";

// These two consts limit the number of characters
// that can be entered into two text areas
// and are used to display <x>/<MAX>
// under the text areas
const MAX_TASK = "650";
const MAX_REASON = "650";

const styles = {
  container: {
    maxHeight: "calc(100vh - 297px)",
    overflow: "auto",
    width: 500
  },
  header: {
    color: "#00565E",
    paddingTop: 12
  },
  textCounter: {
    width: "100%",
    textAlign: "right"
  },
  hrOne: {
    margin: "12px 0",
    borderColor: "#00565E"
  },
  hrTwo: {
    margin: "12px 0"
  },
  tasks: {
    title: {
      float: "left",
      marginRight: 6
    },
    icon: {
      color: "#00565E",
      marginTop: "4px",
      width: 15,
      cursor: "pointer"
    },
    tooltipContainer: {
      marginLeft: 6,
      padding: 6,
      maxWidth: 550,
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
      marginTop: "4px",
      cursor: "pointer"
    },
    tooltipContainer: {
      marginLeft: 6,
      padding: 8,
      maxWidth: 360,
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
          <hr style={styles.hrOne} />
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
                        {LOCALIZE.emibTest.inboxPage.taskContent.taskTooltipPart2}
                      </p>
                    </div>
                  </Popover>
                }
              >
                <i
                  id="task-tooltip"
                  aria-label={LOCALIZE.ariaLabel.taskTooltip}
                  tabIndex="0"
                  className="far fa-question-circle"
                  style={styles.tasks.icon}
                />
              </OverlayTrigger>
              <textarea
                id="your-tasks-text-area"
                maxLength={MAX_TASK}
                style={styles.tasks.textArea}
                value={task}
                onChange={this.onTaskContentChange}
              />
              <div style={styles.textCounter}>
                {this.state.task.length}/{MAX_TASK}
              </div>
            </div>
          </div>
          <hr style={styles.hrTwo} />
          <div>
            <div className="font-weight-bold form-group">
              <label htmlFor="reasons-for-action-text-area" style={styles.reasonsForAction.title}>
                {LOCALIZE.emibTest.inboxPage.addEmailTask.reasonsForAction}
              </label>
              <OverlayTrigger
                trigger="focus"
                placement="right"
                overlay={
                  <Popover
                    id="reasons-for-action-tooltip"
                    style={styles.reasonsForAction.tooltipContainer}
                  >
                    <div>
                      <p style={styles.reasonsForAction.tooltipContent}>
                        {LOCALIZE.emibTest.inboxPage.taskContent.reasonsForActionTooltip}
                      </p>
                    </div>
                  </Popover>
                }
              >
                <i
                  id="reasons-for-action-tooltip"
                  aria-label={LOCALIZE.ariaLabel.reasonsForActionTooltip}
                  tabIndex="0"
                  className="far fa-question-circle"
                  style={styles.reasonsForAction.icon}
                />
              </OverlayTrigger>
              <textarea
                id="reasons-for-action-text-area"
                maxLength={MAX_REASON}
                style={styles.reasonsForAction.textArea}
                value={reasonsForAction}
                onChange={this.onReasonsForActionChange}
              />
              <div style={styles.textCounter}>
                {this.state.reasonsForAction.length}/{MAX_REASON}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default EditTask;
