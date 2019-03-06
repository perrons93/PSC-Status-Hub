import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { LANGUAGES } from "../commons/Translation";
import emib_sample_test_example_org_chart_en from "../../images/emib_sample_test_example_org_chart_en.png";
import emib_sample_test_example_org_chart_fr from "../../images/emib_sample_test_example_org_chart_fr.png";

const styles = {
  testImage: {
    maxWidth: 600
  }
};

class OrganizationalStructure extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{LOCALIZE.emibTest.background.organizationalStructure.title}</h2>
          <div>
            <p>{LOCALIZE.emibTest.background.organizationalStructure.description}</p>
            <p>
              <span className="font-weight-bold">
                {LOCALIZE.emibTest.background.organizationalStructure.para1Title}
              </span>
              {LOCALIZE.emibTest.background.organizationalStructure.para1}
            </p>
            <p>
              <span className="font-weight-bold">
                {LOCALIZE.emibTest.background.organizationalStructure.para2Title}
              </span>
              {LOCALIZE.emibTest.background.organizationalStructure.para2}
            </p>
            <p>
              <span className="font-weight-bold">
                {LOCALIZE.emibTest.background.organizationalStructure.para3Title}
              </span>
              {LOCALIZE.emibTest.background.organizationalStructure.para3}
            </p>
            <p>
              <span className="font-weight-bold">
                {LOCALIZE.emibTest.background.organizationalStructure.para4Title}
              </span>
              {LOCALIZE.emibTest.background.organizationalStructure.para4}
            </p>
            <p>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example
                .conditionToDisplayImage === LANGUAGES.english && (
                <img
                  src={emib_sample_test_example_org_chart_en}
                  alt={LOCALIZE.emibTest.background.organizationalStructure.orgChart.desciption}
                  style={styles.testImage}
                />
              )}
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example
                .conditionToDisplayImage === LANGUAGES.french && (
                <img
                  src={emib_sample_test_example_org_chart_fr}
                  alt={LOCALIZE.emibTest.background.organizationalStructure.orgChart.desciption}
                  style={styles.testImage}
                />
              )}
            </p>
            <p>{LOCALIZE.emibTest.background.organizationalStructure.orgChart.link}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizationalStructure;
