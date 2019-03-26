import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";
import TextareaAutosize from "react-textarea-autosize";
import "../../css/emib-tabs.css";

const styles = {
  windowPadding: {
    paddingTop: 43,
    order: 2
  },
  h4: {
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#00565e",
    padding: "0 0 8px 12px",
    borderBottom: "1.5px solid #88C800"
  },
  hideNotepadBtn: {
    float: "right",
    margin: "8px 12px 0 0",
    padding: "0 8px 0 8px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer"
  },
  hideNotepadBtnIcon: {
    paddingTop: 12,
    cursor: "pointer"
  },
  hideNotepadBtnZone: {
    float: "right"
  },
  content: {
    backgroundColor: "white",
    borderWidth: "1px 1px 0 3px",
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
    padding: "0 12px 6px 12px",
    width: "100%",
    resize: "none",
    border: "none"
  },
  openNotepadBtnLabel: {
    position: "absolute",
    paddingTop: 40,
    width: 60,
    fontSize: "13px",
    color: "white",
    cursor: "pointer"
  },
  openNotepadBtn: {
    width: 60,
    border: "none",
    backgroundColor: "#00565e",
    height: "calc(100vh - 238px)",
    cursor: "pointer",
    borderRadius: "0 5px 0 0"
  },
  openNotepadBtnIcon: {
    position: "absolute",
    padding: "16px 0 0 22px",
    cursor: "pointer",
    color: "white"
  },
  openNotepadBtnHeight: {
    height: "calc(100vh - 238px)"
  }
};

class Notepad extends Component {
  static propTypes = {
    notepadContent: PropTypes.string
  };

  state = {
    notepadHidden: false,
    notepadContent: ""
  };

  handleCollapse = arg => {
    switch (arg) {
      //When Closing the Notepad
      case "handleHide":
        this.setState({ notepadHidden: true });
        //Get current notepad content
        let x = document.getElementById("notepad-content");
        let txt = "";
        for (let i = 1; i < x.length; i++) {
          txt = txt + x.elements[i].value;
        }
        x.innerHTML = txt;
        //Update NOTEPAD_CONTENT
        this.setState({ notepadContent: txt });
        break;
      //When Opening the Notepad
      case "handleOpen":
        this.setState({ notepadHidden: false });
        break;
      default:
        this.setState({ notepadHidden: false });
    }
  };

  render() {
    const { notepadHidden } = this.state;
    return (
      <div style={styles.windowPadding}>
        {!notepadHidden && (
          <div style={styles.content}>
            <div style={styles.hideNotepadBtnZone}>
              <span
                onClick={() => this.handleCollapse("handleHide")}
                style={styles.hideNotepadBtnIcon}
                className="fas fa-minus-circle"
              />
              <button
                onClick={() => this.handleCollapse("handleHide")}
                style={styles.hideNotepadBtn}
              >
                {LOCALIZE.commons.notepad.hideButton}
              </button>
            </div>
            <div>
              <h4 style={styles.h4}>{LOCALIZE.commons.notepad.title}</h4>
            </div>
            <div style={styles.notepadSection}>
              <form id="notepad-content">
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
                    defaultValue={this.state.notepadContent}
                  />
                </fieldset>
              </form>
            </div>
          </div>
        )}
        {notepadHidden && (
          <div style={styles.openNotepadBtnHeight}>
            <span
              onClick={this.handleOpen}
              style={styles.openNotepadBtnIcon}
              className="fas fa-external-link-alt"
            />
            <label
              onClick={() => this.handleCollapse("handleOpen")}
              style={styles.openNotepadBtnLabel}
            >
              {LOCALIZE.commons.notepad.openButton}
            </label>
            <button
              className="btn btn-primary"
              onClick={() => this.handleCollapse("handleOpen")}
              style={styles.openNotepadBtn}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Notepad;
