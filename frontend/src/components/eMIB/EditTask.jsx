import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import { actionShape } from "./constants";
import ReactTooltip from "react-tooltip";
import "../../css/inbox.css";
import detectBrowser from "../../helpers/detectBrowser";
import { IE_STRING } from "../../Status";

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
      marginTop: "4px"
    },
    tooltip: {
      margin: 0
    },
    tooltipContainer: {
      width: 395
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
    tooltip: {
      margin: 0
    },
    tooltipContainer: {
      width: 325
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
    let {
      taskTooltipContainerClass,
      taskTooltipContentClass,
      reasonsForActionTooltipContainerClass,
      reasonsForActionTooltipContentClass
    } = "";

    if (detectBrowser() === IE_STRING) {
      taskTooltipContainerClass = "task-tooltip-container-for-ie";
      taskTooltipContentClass = "task-tooltip-content-for-ie";
      reasonsForActionTooltipContainerClass = "reasons-for-action-tooltip-container-for-ie";
      reasonsForActionTooltipContentClass = "reasons-for-action-tooltip-content-for-ie";
    }

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
              <i
                className="fas fa-question-circle"
                style={styles.tasks.icon}
                tabIndex="0"
                data-tip
                data-for="task-tooltip"
                data-event="focus"
                data-event-off="blur"
                data-place="right"
              />
              <ReactTooltip
                className={taskTooltipContainerClass}
                id="task-tooltip"
                type="none"
                aria-haspopup="true"
              >
                <div className={taskTooltipContentClass} style={styles.tasks.tooltipContainer}>
                  <p style={styles.tasks.tooltip}>
                    {LOCALIZE.emibTest.inboxPage.taskContent.taskTooltipPart1}
                  </p>
                  <p style={styles.tasks.tooltip}>
                    {LOCALIZE.emibTest.inboxPage.taskContent.taskTooltipPart2}
                  </p>
                </div>
              </ReactTooltip>
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
              <i
                className="fas fa-question-circle"
                style={styles.reasonsForAction.icon}
                tabIndex="0"
                data-tip
                data-for="reasons-for-action-tooltip"
                data-event="focus"
                data-event-off="blur"
                data-place="right"
              />
              <ReactTooltip
                id="reasons-for-action-tooltip"
                className={reasonsForActionTooltipContainerClass}
                type="none"
                aria-haspopup="true"
              >
                <div
                  className={reasonsForActionTooltipContentClass}
                  style={styles.reasonsForAction.tooltipContainer}
                >
                  <p style={styles.reasonsForAction.tooltip}>
                    {LOCALIZE.emibTest.inboxPage.taskContent.reasonsForActionTooltip}
                  </p>
                </div>
              </ReactTooltip>
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
