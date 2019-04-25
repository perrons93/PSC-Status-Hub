import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { styleConstants } from "./styleConstants.js";
import Email from "./Email";
import ActionViewEmail from "./ActionViewEmail";
import ActionViewTask from "./ActionViewTask";

class TestExamples extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{LOCALIZE.emibTest.howToPage.testExamples.title}</h2>
          <div>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testExamples.para1}
            </p>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testExamples.part1Title}
            </h4>
            <div style={styleConstants.instuctions.disabledExampleComponentNoPadding}>
              <Email
                email={LOCALIZE.emibTest.howToPage.testExamples.exampleEmail}
                disabled={true}
              />
            </div>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testExamples.part1Description}
            </p>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testExamples.part2Title}
            </h4>
            <div style={styleConstants.instuctions.disabledExampleComponent}>
              <ActionViewEmail
                action={LOCALIZE.emibTest.howToPage.testExamples.exampleEmailResponse}
                actionId={1}
                email={LOCALIZE.emibTest.howToPage.testExamples.exampleEmail}
                disabled={true}
              />
            </div>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testExamples.part3Title}
            </h4>
            <div style={styleConstants.instuctions.disabledExampleComponent}>
              <ActionViewTask
                action={LOCALIZE.emibTest.howToPage.testExamples.exampleTaskResponse}
                actionId={1}
                email={LOCALIZE.emibTest.howToPage.testExamples.exampleEmail}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TestExamples;
