import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { instructionStyles } from "./constants.js";

class TipsOnTest extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{LOCALIZE.emibTest.howToPage.tipsOnTest.title}</h2>
          <p style={instructionStyles.p}>{LOCALIZE.emibTest.howToPage.tipsOnTest.description}</p>
          <ul>
            <li>{LOCALIZE.emibTest.howToPage.tipsOnTest.bullet1}</li>
            <li>{LOCALIZE.emibTest.howToPage.tipsOnTest.bullet2}</li>
            <li>{LOCALIZE.emibTest.howToPage.tipsOnTest.bullet3}</li>
            <li>{LOCALIZE.emibTest.howToPage.tipsOnTest.bullet4}</li>
            <li>{LOCALIZE.emibTest.howToPage.tipsOnTest.bullet5}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TipsOnTest;
