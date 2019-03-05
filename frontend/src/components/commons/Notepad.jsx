import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

const styles = {
  title: {
    paddingLeft: 15,
    paddingTop: 0.1,
    height: 55,
    backgroundColor: "#00565e",
    borderRadius: "5px 5px 0 0"
  },
  h4: {
    color: "white"
  },
  windowPadding: {
    paddingTop: 43,
    paddingLeft: 20
  },
  content: {
    backgroundColor: "white",
    border: "1px solid #00565e",
    borderRadius: "5px 5px 0 0",
    height: "calc(100vh - 210px)",
    width: 220
  },
  center: {
    textAlign: "center"
  },
  textArea: {
    resize: "none",
    border: "none",
    overflow: "auto",
    background: "red"
  },
  test: {
    overflow: "auto"
  }
};

class Notepad extends Component {
  state = {
    height: "3"
  };

  test = () => {
    let defaultHeight = 150,
      increment = 20,
      newValue = 0;
    let width = document.getElementById("notepad-window").offsetHeight;
    console.log(width);
    if (width > defaultHeight) {
      this.setState({ height: "3" });
      newValue = defaultHeight;
    }
    if (width > newValue + increment) {
      this.setState({ height: "4" });
      newValue += increment;
    }
    if (width > newValue + increment) {
      this.setState({ height: "5" });
      newValue += increment;
    }
    if (width > newValue + increment) {
      this.setState({ height: "6" });
      newValue += increment;
    }
    if (width > newValue + increment) {
      this.setState({ height: "7" });
      newValue += increment;
    }
    if (width > newValue + increment) {
      this.setState({ height: "8" });
      newValue += increment;
    }
    if (width > newValue + increment) {
      this.setState({ height: "9" });
      newValue += increment;
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.test, false);
  }

  render() {
    return (
      <div style={styles.windowPadding}>
        <div id="notepad-window" style={styles.content}>
          <div style={styles.title}>
            <h4 style={styles.h4}>{LOCALIZE.commons.notepad.title}</h4>
          </div>
          <div style={styles.test}>
            <form>
              <fieldset style={styles.center}>
                <textarea
                  className="textArea"
                  style={styles.textArea}
                  rows={this.state.height}
                  cols="23"
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
