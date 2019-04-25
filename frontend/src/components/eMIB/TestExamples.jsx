import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { styleConstants } from "./styleConstants.js";
import Email from "./Email";
import EditEmail from "./EditEmail";
import EditTask from "./EditTask";

class TestExamples extends Component {
  static propTypes = {
    // Props from Redux TODO drop this......
    currentLanguage: PropTypes.string
  };

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
            <div style={styleConstants.instuctions.disabledExampleComponent}>
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
              <EditEmail
                onChange={() => {}}
                action={LOCALIZE.emibTest.howToPage.testExamples.exampleEmailResponse}
                disabled={true}
              />
            </div>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testExamples.part3Title}
            </h4>
            <div style={styleConstants.instuctions.disabledExampleComponent}>
              <EditTask
                onChange={() => {}}
                action={LOCALIZE.emibTest.howToPage.testExamples.exampleTaskResponse}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentLanguage: state.localize.language
  };
};

export default connect(
  mapStateToProps,
  null
)(TestExamples);
