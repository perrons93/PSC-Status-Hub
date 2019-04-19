import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { instructionStyles } from "./constants.js";

class TestInstructions extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 style={instructionStyles.h2}>{LOCALIZE.emibTest.howToPage.testInstructions.title}</h2>
          <div>
            <p style={instructionStyles.p}>{LOCALIZE.emibTest.howToPage.testInstructions.para1}</p>
          </div>
          <div>
            <h3 style={instructionStyles.h3}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.title}
            </h3>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.description}
            </p>
            <h4 style={instructionStyles.h4}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.title}
            </h4>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.para1}
            </p>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.para2}
            </p>
            <h4 style={instructionStyles.h4}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part2.title}
            </h4>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part2.para1}
            </p>
            <h4 style={instructionStyles.h4}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.title}
            </h4>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para1}
            </p>
            <ol>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet1}</li>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet2}</li>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet3}</li>
            </ol>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para2}
            </p>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para3}
            </p>
          </div>
          <div>
            <h3 style={instructionStyles.h3}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.title}
            </h3>
            <p style={instructionStyles.p}>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TestInstructions;
