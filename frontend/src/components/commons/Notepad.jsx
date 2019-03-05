import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import TextareaAutosize from "react-textarea-autosize";

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
    border: "1px solid #00565e",
    borderRadius: "5px 5px 0 0",
    width: 220
  },
  notepadSection: {
    overflow: "auto",
    height: "calc(100vh - 270px)"
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
    height: "3"
  };

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
                <TextareaAutosize
                  maxlength="3000"
                  className="textArea"
                  style={styles.textArea}
                  cols="22"
                  minRows={3}
                  maxRows={1000}
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
