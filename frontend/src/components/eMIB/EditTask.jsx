import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

const styles = {
  container: {
    maxHeight: "calc(100vh - 300px)",
    overflow: "auto",
    width: 500
  },
  header: {
    color: "#00565E"
  },
  hr: {
    margin: "6px 0",
    borderColor: "#00565E"
  },
  tasks: {
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
  render() {
    return (
      <div style={styles.container}>
        <form>
          <div>
            <label style={styles.header}>
              {LOCALIZE.formatString(
                LOCALIZE.emibTest.inboxPage.addEmailTask.header,
                //TODO: Add the right variables here
                "XX",
                "EMAIL TITLE"
              )}
            </label>
          </div>
          <hr style={styles.hr} />
          <div>
            <div className="font-weight-bold form-group">
              <label htmlFor="your-tasks-text-area">
                {LOCALIZE.emibTest.inboxPage.addEmailTask.task}
              </label>
              <textarea id="your-tasks-text-area" maxLength="100" style={styles.tasks.textArea} />
            </div>
          </div>
          <div>
            <div className="font-weight-bold form-group">
              <label htmlFor="your-tasks-text-area">
                {LOCALIZE.emibTest.inboxPage.addEmailTask.reasonsForAction}
              </label>
              <textarea
                id="your-tasks-text-area"
                maxLength="100"
                style={styles.reasonsForAction.textArea}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default EditTask;
