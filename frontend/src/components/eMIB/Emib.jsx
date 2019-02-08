import React, { Component } from "react";
import Confirmation from "./Confirmation";
import HowTo from "./HowTo";
import Background from "./Background";
import Inbox from "./Inbox";
import LocalizedStrings from "react-localization";

const PAGES = {
  welcome: "welcome",
  howTo: "howTo",
  background: "background",
  inbox: "inbox",
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
    nextButton: "Next"
  },

  fr: {
    //Home Page
    testTitle: "eMIB - Test Pratique",
    welcomeMsg: "Bienvenu dans le test pratique de eMIB",

    //HowTo Page
    howToPageTitle: "Page 'How To'",
    emailInstructions: "Instructions pour les courriel",
    taskInstructions: "Instuctions pour les tâches",

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
    nextButton: "Suivant"
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
        this.setState({ curPage: PAGES.background });
        break;
      case PAGES.background:
        this.setState({ curPage: PAGES.inbox });
        break;
      case PAGES.inbox:
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
        {this.state.curPage === PAGES.background && <Background />}
        {this.state.curPage === PAGES.inbox && <Inbox />}
        {this.state.curPage === PAGES.confirm && <Confirmation />}

        {this.state.curPage !== PAGES.confirm && (
          <div style={{ color: "blue" }} onClick={this.changePage}>
            Next
          </div>
        )}
      </div>
    );
  }
}

export default Emib;
export { PAGES, LANGUAGES, STRINGS };
