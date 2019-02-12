import React, { Component } from "react";
import PropTypes from "prop-types";
import STRINGS from "../../text_resources";

const LANGUAGES = {
  english: "en",
  french: "fr"
};

class Translation extends Component {
  state = {
    curLanguage: LANGUAGES.english
  };

  static propTypes = {
    updateLanguageOnPage: PropTypes.func
  };

  onSetLanguageToFrench = async () => {
    STRINGS.setLanguage(LANGUAGES.french);
    this.setState({ curLanguage: LANGUAGES.french });
    this.props.updateLanguageOnPage();
  };

  onSetLanguageToEnglish = async () => {
    STRINGS.setLanguage(LANGUAGES.english);
    this.setState({ curLanguage: LANGUAGES.english });
    this.props.updateLanguageOnPage();
  };

  render() {
    return (
      <div>
        {this.state.curLanguage === LANGUAGES.english && (
          <button style={{ color: "blue" }} onClick={this.onSetLanguageToFrench}>
            Français
          </button>
        )}
        {this.state.curLanguage === LANGUAGES.french && (
          <button style={{ color: "blue" }} onClick={this.onSetLanguageToEnglish}>
            English
          </button>
        )}
      </div>
    );
  }
}

export default Translation;
export { LANGUAGES };
