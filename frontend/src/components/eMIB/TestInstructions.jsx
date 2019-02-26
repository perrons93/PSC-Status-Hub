import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/App.css";
import { LANGUAGES } from "../../components/commons/Translation";
import original_email_emib_sample_test_example_en from "../../images/original_email_emib_sample_test_example_en.png";
import original_email_emib_sample_test_example_fr from "../../images/original_email_emib_sample_test_example_fr.png";
import option_1_emib_sample_test_example_en from "../../images/option_1_emib_sample_test_example_en.png";
import option_1_emib_sample_test_example_fr from "../../images/option_1_emib_sample_test_example_fr.png";
import option_2_emib_sample_test_example_en from "../../images/option_2_emib_sample_test_example_en.png";
import option_2_emib_sample_test_example_fr from "../../images/option_2_emib_sample_test_example_fr.png";

class TestInstructions extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className="emib-section-titles">
            {LOCALIZE.emibTest.howToPage.testInstructions.title}
          </h2>
          <div>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.para1}</p>
          </div>
          <div>
            <h3>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.title}</h3>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.description}</p>
            <p className="font-weight-bold underline">
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.title}
            </p>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.para1}</p>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part1.para2}</p>
            <p className="font-weight-bold underline">
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part2.title}
            </p>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part2.para1}</p>
            <p className="font-weight-bold underline">
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.title}
            </p>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para1}</p>
            <ol>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet1}</li>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet2}</li>
              <li>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.bullet3}</li>
            </ol>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para2}</p>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step1Section.part3.para3}</p>
          </div>
          <div>
            <h3>{LOCALIZE.emibTest.howToPage.testInstructions.step2Section.title}</h3>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step2Section.description}</p>
            <p className="font-weight-bold">
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.title}
            </p>
            <p className="font-weight-bold underline">
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Title}
            </p>
            <p>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example
                .conditionToDisplayImage === LANGUAGES.english && (
                <img
                  src={original_email_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Title}
                  className="test-instruction-image"
                />
              )}
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example
                .conditionToDisplayImage === LANGUAGES.french && (
                <img
                  src={original_email_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Title}
                  className="test-instruction-image"
                />
              )}
            </p>
            <p>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Description}
            </p>
            <p className="font-weight-bold underline">
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part2Title}
            </p>
            <p>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example
                .conditionToDisplayImage === LANGUAGES.english && (
                <img
                  src={option_1_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part2Title}
                  className="test-instruction-image"
                />
              )}
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example
                .conditionToDisplayImage === LANGUAGES.french && (
                <img
                  src={option_1_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part2Title}
                  className="test-instruction-image"
                />
              )}
            </p>
            <p className="font-weight-bold underline">
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part3Title}
            </p>
            <p>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example
                .conditionToDisplayImage === LANGUAGES.english && (
                <img
                  src={option_2_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part3Title}
                  className="test-instruction-image"
                />
              )}
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example
                .conditionToDisplayImage === LANGUAGES.french && (
                <img
                  src={option_2_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part3Title}
                  className="test-instruction-image"
                />
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TestInstructions;
