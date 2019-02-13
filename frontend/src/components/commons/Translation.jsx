import React, { Component } from "react";
import PropTypes from "prop-types";
import LOCALIZE from "../../text_resources";

const LANGUAGES = {
  english: "en",
  french: "fr"
};

class Translation extends Component {
  state = {
    currentLanguage: LANGUAGES.english
  };

  static propTypes = {
    updateLanguageOnPage: PropTypes.func
  };

  onSetLanguageToFrench = () => {
    LOCALIZE.setLanguage(LANGUAGES.french);
    this.setState({ currentLanguage: LANGUAGES.french });
    this.props.updateLanguageOnPage();
  };

  onSetLanguageToEnglish = () => {
    LOCALIZE.setLanguage(LANGUAGES.english);
    this.setState({ currentLanguage: LANGUAGES.english });
    this.props.updateLanguageOnPage();
  };

  render() {
    return (
      <div>
        {this.state.currentLanguage === LANGUAGES.english && (
          <button type="button" className="btn btn-secondary" onClick={this.onSetLanguageToFrench}>
            Français
          </button>
        )}
        {this.state.currentLanguage === LANGUAGES.french && (
          <button type="button" className="btn btn-secondary" onClick={this.onSetLanguageToEnglish}>
            English
          </button>
        )}
      </div>
    );
  }
}

export default Translation;
export { LANGUAGES };
