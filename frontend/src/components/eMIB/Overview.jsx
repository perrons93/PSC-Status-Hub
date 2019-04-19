import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { instructionStyles } from "./constants.js";

class Overview extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{LOCALIZE.emibTest.howToPage.overview.title}</h2>
          <div>
            <p style={instructionStyles.p}>{LOCALIZE.emibTest.howToPage.overview.description}</p>
          </div>
          <div>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.overview.noteSection.para1}
            </p>
            <ul>
              <li>{LOCALIZE.emibTest.howToPage.overview.noteSection.bullet1}</li>
              <li>{LOCALIZE.emibTest.howToPage.overview.noteSection.bullet2}</li>
              <li>{LOCALIZE.emibTest.howToPage.overview.noteSection.bullet3}</li>
            </ul>
          </div>
          <div>
            <h3 style={instructionStyles.h3}>
              {LOCALIZE.emibTest.howToPage.overview.aboutSection.title}
            </h3>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.overview.aboutSection.para1}
            </p>
            <ul>
              <li>{LOCALIZE.emibTest.howToPage.overview.aboutSection.bullet1}</li>
              <li>{LOCALIZE.emibTest.howToPage.overview.aboutSection.bullet2}</li>
              <li>{LOCALIZE.emibTest.howToPage.overview.aboutSection.bullet3}</li>
            </ul>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.overview.aboutSection.para2}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
