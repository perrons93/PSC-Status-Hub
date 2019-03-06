import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";

class BackgroundInformation extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{LOCALIZE.emibTest.background.backgroundInformation.title}</h2>
          <div>
            <p>{LOCALIZE.emibTest.background.backgroundInformation.paragraph1}</p>
            <p>{LOCALIZE.emibTest.background.backgroundInformation.paragraph2}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BackgroundInformation;
