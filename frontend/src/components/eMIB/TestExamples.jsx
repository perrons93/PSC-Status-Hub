import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { LANGUAGES } from "../../components/commons/Translation";
import original_email_emib_sample_test_example_en from "../../images/original_email_emib_sample_test_example_en.png";
import original_email_emib_sample_test_example_fr from "../../images/original_email_emib_sample_test_example_fr.png";
import option_1_emib_sample_test_example_en from "../../images/option_1_emib_sample_test_example_en.png";
import option_1_emib_sample_test_example_fr from "../../images/option_1_emib_sample_test_example_fr.png";
import option_2_emib_sample_test_example_en from "../../images/option_2_emib_sample_test_example_en.png";
import option_2_emib_sample_test_example_fr from "../../images/option_2_emib_sample_test_example_fr.png";

const styles = {
  testImage: {
    maxWidth: 600
  }
};

class TestExamples extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{LOCALIZE.emibTest.howToPage.testExamples.title}</h2>
          <div>
            <p>{LOCALIZE.emibTest.howToPage.testExamples.para1}</p>
            <h4>{LOCALIZE.emibTest.howToPage.testExamples.part1Title}</h4>
            <p>
              {LOCALIZE.emibTest.howToPage.testExamples.conditionToDisplayImage ===
                LANGUAGES.english && (
                <img
                  src={original_email_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part1Title}
                  style={styles.testImage}
                />
              )}
              {LOCALIZE.emibTest.howToPage.testExamples.conditionToDisplayImage ===
                LANGUAGES.french && (
                <img
                  src={original_email_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part1Title}
                  style={styles.testImage}
                />
              )}
            </p>
            <p>{LOCALIZE.emibTest.howToPage.testExamples.part1Description}</p>
            <h4>{LOCALIZE.emibTest.howToPage.testExamples.part2Title}</h4>
            <p>
              {LOCALIZE.emibTest.howToPage.testExamples.conditionToDisplayImage ===
                LANGUAGES.english && (
                <img
                  src={option_1_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part2Title}
                  style={styles.testImage}
                />
              )}
              {LOCALIZE.emibTest.howToPage.testExamples.conditionToDisplayImage ===
                LANGUAGES.french && (
                <img
                  src={option_1_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part2Title}
                  style={styles.testImage}
                />
              )}
            </p>
            <h4>{LOCALIZE.emibTest.howToPage.testExamples.part3Title}</h4>
            <p>
              {LOCALIZE.emibTest.howToPage.testExamples.conditionToDisplayImage ===
                LANGUAGES.english && (
                <img
                  src={option_2_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part3Title}
                  style={styles.testImage}
                />
              )}
              {LOCALIZE.emibTest.howToPage.testExamples.conditionToDisplayImage ===
                LANGUAGES.french && (
                <img
                  src={option_2_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part3Title}
                  style={styles.testImage}
                />
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TestExamples;
