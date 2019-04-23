import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
import { styleConstants } from "./styleConstants.js";

const styles = {
  testImage: {
    maxWidth: 600
  }
};

class TestExamples extends Component {
  static propTypes = {
    // Props from Redux
    currentLanguage: PropTypes.string
  };

  render() {
    const { currentLanguage } = this.props;
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
            <p style={styleConstants.instuctions.p}>
              {currentLanguage === LANGUAGES.english && (
                <img
                  src={original_email_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part1Title}
                  style={styles.testImage}
                />
              )}
              {currentLanguage === LANGUAGES.french && (
                <img
                  src={original_email_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part1Title}
                  style={styles.testImage}
                />
              )}
            </p>
            <p style={styleConstants.instuctions.p}>
              {LOCALIZE.emibTest.howToPage.testExamples.part1Description}
            </p>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testExamples.part2Title}
            </h4>
            <p style={styleConstants.instuctions.p}>
              {currentLanguage === LANGUAGES.english && (
                <img
                  src={option_1_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part2Title}
                  style={styles.testImage}
                />
              )}
              {currentLanguage === LANGUAGES.french && (
                <img
                  src={option_1_emib_sample_test_example_fr}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part2Title}
                  style={styles.testImage}
                />
              )}
            </p>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testExamples.part3Title}
            </h4>
            <p style={styleConstants.instuctions.p}>
              {currentLanguage === LANGUAGES.english && (
                <img
                  src={option_2_emib_sample_test_example_en}
                  alt={LOCALIZE.emibTest.howToPage.testExamples.part3Title}
                  style={styles.testImage}
                />
              )}
              {currentLanguage === LANGUAGES.french && (
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

const mapStateToProps = (state, ownProps) => {
  return {
    currentLanguage: state.localize.language
  };
};

export default connect(
  mapStateToProps,
  null
)(TestExamples);
