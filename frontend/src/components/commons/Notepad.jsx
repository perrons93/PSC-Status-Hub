import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import TextareaAutosize from "react-textarea-autosize";
import { BROWSER_STRING, IE_STRING, VALID_BROWSERS } from "../../Status";
import "../../css/emib-tabs.css";

const styles = {
  windowPadding: {
    paddingTop: 43,
    paddingLeft: 20
  },
  h4: {
    color: "white"
  },
  title: {
    paddingLeft: 15,
    paddingTop: 0.1,
    height: 55,
    backgroundColor: "#00565e",
    borderRadius: "5px 5px 0 0"
  },
  content: {
    backgroundColor: "white",
    borderWidth: "1px 1px 0px 1px",
    borderStyle: "solid",
    borderColor: "#00565e",
    borderRadius: "5px 5px 0 0",
    width: 220,
    height: "calc(100vh - 268px)"
  },
  notepadSection: {
    overflow: "auto",
    height: "calc(100vh - 330px)"
  },
  textArea: {
    resize: "none",
    border: "none"
  },
  center: {
    textAlign: "center"
  }
};

class Notepad extends Component {
  state = {
    columnWidth: 0
  };

  /*
  Adjust the notepad text zone width depending on the browser
  Each browser has its own interpretation of the notepad text zone width
  */
  detectBrowser = () => {
    switch (BROWSER_STRING) {
      case IE_STRING:
        this.setState({ columnWidth: 20 });
        break;
      case VALID_BROWSERS[0]:
        this.setState({ columnWidth: 22 });
        break;
      case VALID_BROWSERS[1]:
        this.setState({ columnWidth: 18 });
        break;
      default:
        this.setState({ columnWidth: 18 });
    }
  };

  componentDidMount() {
    this.detectBrowser();
  }

  render() {
    return (
      <div style={styles.windowPadding}>
        <div style={styles.content}>
          <div style={styles.title}>
            <h4 style={styles.h4}>{LOCALIZE.commons.notepad.title}</h4>
          </div>
          <div style={styles.notepadSection}>
            <form>
              <fieldset style={styles.center}>
                <label htmlFor="text-area-zone" className="invisible position-absolute">
                  {LOCALIZE.commons.notepad.title}
                </label>
                <TextareaAutosize
                  id="text-area-zone"
                  maxLength="3000"
                  className="text-area"
                  style={styles.textArea}
                  cols={this.state.columnWidth}
                  minRows={5}
                  placeholder={LOCALIZE.commons.notepad.placeholder}
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Notepad;
