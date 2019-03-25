import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import TextareaAutosize from "react-textarea-autosize";
import "../../css/emib-tabs.css";

const styles = {
  windowPadding: {
    paddingTop: 43.5,
    order: 2
  },
  h4: {
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#00565e",
    padding: "0 0 8px 12px",
    borderBottom: "1px solid green"
  },
  title: {
    paddingTop: 0.1,
    borderRadius: "0 5px 0 0"
  },
  content: {
    backgroundColor: "white",
    borderWidth: "1px 1px 0 1px",
    borderStyle: "solid",
    borderColor: "#00565e",
    borderRadius: "0 5px 0 0",
    width: "100%",
    height: "calc(100vh - 238px)"
  },
  notepadSection: {
    overflow: "auto",
    height: "calc(100vh - 291px)"
  },
  textArea: {
    padding: "0 6px 6px 6px",
    width: "100%",
    resize: "none",
    border: "none"
  }
};

class Notepad extends Component {
  render() {
    return (
      <div style={styles.windowPadding}>
        <div style={styles.content}>
          <div style={styles.title}>
            <h4 style={styles.h4}>{LOCALIZE.commons.notepad.title}</h4>
          </div>
          <div style={styles.notepadSection}>
            <form>
              <fieldset>
                <label htmlFor="text-area-zone" className="invisible position-absolute">
                  {LOCALIZE.commons.notepad.title}
                </label>
                <TextareaAutosize
                  id="text-area-zone"
                  maxLength="3000"
                  className="text-area"
                  style={styles.textArea}
                  cols="45"
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
