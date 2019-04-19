import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { instructionStyles } from "./constants.js";

class BackgroundInformation extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{LOCALIZE.emibTest.background.backgroundInformation.title}</h2>
          <div>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.background.backgroundInformation.paragraph1}
            </p>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.background.backgroundInformation.paragraph2}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BackgroundInformation;
