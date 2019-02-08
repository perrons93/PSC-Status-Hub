import React, { Component } from "react";
import Confirmation from "./Confirmation";
import HowTo from "./HowTo";
import TestTabs from "./TestTabs";
import LocalizedStrings from "react-localization";

const PAGES = {
  welcome: "welcome",
  howTo: "howTo",
  testTabs: "testTabs",
  confirm: "confirm"
};

const LANGUAGES = {
  english: "en",
  french: "fr"
};

let STRINGS = new LocalizedStrings({
  en: {
    //Home Page
    testTitle: "eMIB - Sample Test",
    welcomeMsg: "Welcome to the eMIB Sample Test",

    //HowTo Page
    howToPageTitle: "HowTo Page",
    emailInstructions: "Email Instuctions",
    taskInstructions: "Task Instuctions",
    howToNextButton: "Start timer and test",

    //Background Page
    backgroundPageTitle: "Background Page",
    orgChart: "Org Chart",
    Scenarios: "Scenarios",

    //Inbox
    inboxPageTitle: "Inbox",
    taskList: "Tasks List",
    notePad: "NotePad",
    textTools: "Text Tools",
    emailFeatures: "Email Features",
    progressSaved: "Progress Saved",
    timer: "Timer",

    //Confirmation Page
    submissionConfirmed: "Submission Confirmed",
    exitTest: "Exit Test",

    //Generic
    nextButton: "Next",
    submitTestButton: "Submit test"
  },

  fr: {
    //Home Page
    testTitle: "eMIB - Test Pratique",
    welcomeMsg: "Bienvenu dans le test pratique de eMIB",

    //HowTo Page
    howToPageTitle: "Page 'How To'",
    emailInstructions: "Instructions pour les courriel",
    taskInstructions: "Instuctions pour les tâches",
    howToNextButton: "FR Start timer and test",

    //Background Page
    backgroundPageTitle: "Page de contexte",
    orgChart: "Organigramme",
    Scenarios: "Scénarios",

    //Inbox
    inboxPageTitle: "Boîte de réception",
    taskList: "Liste des tâches",
    notePad: "bloc-notes",
    textTools: "Outils de texte",
    emailFeatures: "Fonctions de messagerie",
    progressSaved: "Progression enregistrée",
    timer: "Minuteur",

    //Confirmation Page
    submissionConfirmed: "Soumission Confirmée",
    exitTest: "Quitter le test",

    //Generic
    nextButton: "Suivant",
    submitTestButton: "FR Submit test"
  }
});

class Emib extends Component {
  state = {
    curPage: PAGES.welcome,
    curLanguage: LANGUAGES.english
  };

  changePage = () => {
    switch (this.state.curPage) {
      case PAGES.welcome:
        this.setState({ curPage: PAGES.howTo });
        break;
      case PAGES.howTo:
        this.setState({ curPage: PAGES.testTabs });
        break;
      case PAGES.testTabs:
        this.setState({ curPage: PAGES.confirm });
        break;
      default:
        this.setState({ curPage: PAGES.welcome });
        break;
    }
  };

  onSetLanguageToFrench = () => {
    STRINGS.setLanguage(LANGUAGES.french);
    this.setState({ curLanguage: LANGUAGES.french });
  };

  onSetLanguageToEnglish = () => {
    STRINGS.setLanguage(LANGUAGES.english);
    this.setState({ curLanguage: LANGUAGES.english });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.curLanguage === LANGUAGES.english && (
            <div style={{ color: "blue" }} onClick={this.onSetLanguageToFrench}>
              Français
            </div>
          )}
          {this.state.curLanguage === LANGUAGES.french && (
            <div style={{ color: "blue" }} onClick={this.onSetLanguageToEnglish}>
              English
            </div>
          )}
        </div>
        <h2>{STRINGS.testTitle}</h2>
        {this.state.curPage === PAGES.welcome && <p>{STRINGS.welcomeMsg}</p>}
        {this.state.curPage === PAGES.howTo && <HowTo />}
        {this.state.curPage === PAGES.testTabs && <TestTabs lang={this.state.curLanguage} />}
        {this.state.curPage === PAGES.confirm && <Confirmation />}

        {this.state.curPage !== PAGES.confirm && (
          <div style={{ color: "blue" }} onClick={this.changePage}>
            {this.state.curPage === PAGES.welcome && <p>{STRINGS.nextButton}</p>}
            {this.state.curPage === PAGES.howTo && <p>{STRINGS.howToNextButton}</p>}
            {this.state.curPage === PAGES.testTabs && <p>{STRINGS.submitTestButton}</p>}
          </div>
        )}
      </div>
    );
  }
}

export default Emib;
export { PAGES, LANGUAGES, STRINGS };
