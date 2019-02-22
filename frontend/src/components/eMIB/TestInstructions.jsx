import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/App.css";
import original_email_emib_sample_test_example_en from "../../images/original_email_emib_sample_test_example_en.png";
import original_email_emib_sample_test_example_fr from "../../images/original_email_emib_sample_test_example_fr.png";
import option_1_emib_sample_test_example_en from "../../images/option_1_emib_sample_test_example_en.png";
import option_1_emib_sample_test_example_fr from "../../images/option_1_emib_sample_test_example_fr.png";
import option_2_emib_sample_test_example_en from "../../images/option_2_emib_sample_test_example_en.png";
import option_2_emib_sample_test_example_fr from "../../images/option_2_emib_sample_test_example_fr.png";

class TestInstructions extends Component {
  render() {
    return (
      <div className="emib-text-zone">
        <div>
          <h2 className="emib-section-titles">
            {LOCALIZE.emibTest.howToPage.testInstructions.title}
          </h2>
          <div>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.para1}</p>
          </div>
          <div>
            <p className="font-weight-bold">
              {LOCALIZE.emibTest.howToPage.testInstructions.step1Section.title}
            </p>
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
            <p className="font-weight-bold">
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.title}
            </p>
            <p>{LOCALIZE.emibTest.howToPage.testInstructions.step2Section.description}</p>
            <p className="font-weight-bold">
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.title}
            </p>
            <p className="font-weight-bold underline">
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Title}
            </p>
            {/* TODO: (fnormand01) Find a way to put the French image when we click on 'French' button */}
            <p>
              <img
                src={original_email_emib_sample_test_example_en}
                alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Title}
                className="test-instruction-image"
              />
            </p>
            <p>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part1Description}
            </p>
            <p className="font-weight-bold underline">
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part2Title}
            </p>
            <p>
              <img
                src={option_1_emib_sample_test_example_en}
                alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part2Title}
                className="test-instruction-image"
              />
            </p>
            <p className="font-weight-bold underline">
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part3Title}
            </p>
            <p>
              <img
                src={option_2_emib_sample_test_example_en}
                alt={LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example.part3Title}
                className="test-instruction-image"
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TestInstructions;
