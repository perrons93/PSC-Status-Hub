import LocalizedStrings from "react-localization";

let LOCALIZE = new LocalizedStrings({
  en: {
    //Main Tabs
    mainTabs: {
      homeTabTitle: "Home",
      prototypeTabTitle: "Prototype",
      statusTabTitle: "Status"
    },

    //Home Page
    homePage: {
      title: "The Public Service Commission's Competency Assessment Tool",
      welcomeMsg: "Welcome to the Compotency Assessment Tool."
    },

    //Prototype Page
    prototypePage: {
      title: "Prototype",
      welcomeMsg: "This page will be used to test out experimental UIs.",
      startEmibSampleTest: "Start eMIB Sample Test"
    },

    //Status Page
    statusPage: {
      title: "CAT Status",
      welcomeMsg:
        "Internal status page to quickly determine the status / health of the Compotency Assessment Tool.",
      gitHubRepoBtn: "GitHub Repository",
      serviceStatusTable: {
        title: "Service Status",
        frontendDesc: "Front end application built and serving successfully",
        backendDesc: "Back end application completing API requests successfully",
        databaseDesc: "Database completing API requests sccessfully"
      },
      systemStatusTable: {
        title: "System Status",
        javaScript: "JavaScript",
        browsers: "IE 9+, Chrome, Firefox",
        screenResolution: "Screen resolution minimum of 800 x 600"
      }
    },

    //eMIB Test
    emibTest: {
      //Home Page
      homePage: {
        testTitle: "eMIB - Sample Test",
        welcomeMsg: "Welcome to the eMIB Sample Test"
      },

      //HowTo Page
      howToPage: {
        title: "HowTo Page",
        emailInstructions: "Email Instuctions",
        taskInstructions: "Task Instuctions",
        overview: {
          title: "Overview",
          description:
            "The electronic managerial Inbox (e-MIB) simulates an email inbox in which you will respond to a series of emails depicting situations typically encountered by managers in the federal public service. These situations will provide you with the opportunity to demonstrate the ",
          descriptionLink: "Key Leadership Competencies",
          aboutSection: {
            title: "About the sample test",
            para1:
              "The sample test has been designed to provide you with the opportunity to familiarize yourself with:",
            bullet1:
              "the components of the test (e.g., instructions, background information, email inbox, notepad);",
            bullet2: "the features of the test interface (e.g., menu bars, buttons); and",
            bullet3: "examples of emails.",
            para2:
              "The background information, which includes a description of the organisation, your role, your employees, colleagues and management team, as well as the emails presented are examples. They are not intended to reflect the length nor the level of difficulty of the real test. The background information and the number of emails presented are more extensive in the real test."
          }
        }
      },

      //Background Page
      backgroundPage: {
        title: "Background Page",
        orgChart: "Org Chart",
        Scenarios: "Scenarios"
      },

      //Inbox Page
      inboxPage: {
        title: "Inbox",
        taskList: "Tasks List",
        notePad: "NotePad",
        textTools: "Text Tools",
        emailFeatures: "Email Features",
        progressSaved: "Progress Saved",
        timer: "Timer"
      },

      //Confirmation Page
      confirmationPage: {
        submissionConfirmed: "Submission Confirmed"
      },

      //Test tabs
      tabs: {
        instructionsTabTitle: "Instructions",
        backgroundTabTitle: "Background",
        inboxTabTitle: "Inbox"
      }
    },

    //Commons
    commons: {
      psc: "Public Service Commission",
      nextButton: "Next",
      startTest: "Start test",
      submitTestButton: "Submit test",
      exitTest: "Exit Test",
      passStatus: "Pass",
      failStatus: "Fail",
      enabled: "Enabled",
      disabled: "Disabled"
    }
  },

  fr: {
    //Main Tabs
    mainTabs: {
      homeTabTitle: "Accueil",
      prototypeTabTitle: "Prototype",
      statusTabTitle: "Statut"
    },

    //Home Page
    homePage: {
      title:
        "Outil d'évaluation des compétences de la Commission de la fonction publique du Canada",
      welcomeMsg: "Bienvenue dans l'outil d'évaluation des compétences."
    },

    //Prototype Page
    prototypePage: {
      title: "Prototype",
      welcomeMsg: "Cette page sera utilisée pour tester des interfaces utilisateur expérimentales.",
      startEmibSampleTest: "Démarrer le test pratique eMIB"
    },

    //Status Page
    statusPage: {
      title: "Statut de OEC",
      welcomeMsg:
        "Page de statut interne afin de déterminer rapidement l'état / la santé de l'Outil d'Évaluation des Compétences.",
      gitHubRepoBtn: "Répertoire GitHub",
      serviceStatusTable: {
        title: "Statut des services",
        frontendDesc: "La Face avant de l'application est construite et utilisée avec succès",
        backendDesc: "La Face arrière de l'application réussit les demandes API avec succès",
        databaseDesc: "La Base de données réussit les demandes API avec succès"
      },
      systemStatusTable: {
        title: "Statut du système",
        javaScript: "JavaScript",
        browsers: "IE 9+, Firefox, Chrome",
        screenResolution: "Résolution d'écran minimum de 800 x 600"
      }
    },

    //eMIB Test
    emibTest: {
      //Home Page
      homePage: {
        testTitle: "eMIB - Test Pratique",
        welcomeMsg: "Bienvenu dans le test pratique de eMIB"
      },

      //HowTo Page
      howToPage: {
        title: "Page 'How To'",
        emailInstructions: "Instructions pour les courriel",
        taskInstructions: "Instuctions pour les tâches",
        overview: {
          title: "Aperçu général",
          description:
            "La boîte de réception pour la gestion électronique (BRG-e) simule d’une boîte de courriel dans laquelle vous allez répondre à des courriels décrivant des situations qui sont typiquement vécues par les gestionnaires de la fonction publique. Ces situations vous donneront l’occasion de démontrer les ",
          descriptionLink: "compétences clés en leadership",
          aboutSection: {
            title: "À propos de l’échantillon de test",
            para1:
              "Cet échantillon de test a été conçu pour vous donner l’occasion de vous familiariser avec :",
            bullet1:
              "les volets du test (p. ex., instructions, information contextuelle, boîte de réception de courriel, bloc-notes) ;",
            bullet2:
              "les fonctionnalités de l’interface du test (p. ex., barres de menu, boutons) ; et",
            bullet3: "des exemples de courriels.",
            para2:
              "L’information contextuelle, laquelle inclut une description de l’organisation, de votre rôle de vos employées, de vos collègues et de l’équipe de gestion ainsi que les courriels auxquels vous devez répondre sont présentés à titre d’exemples. Ils ne sont pas destinés à refléter la longueur ou le niveau de difficulté du test réel. L’information contextuelle et le nombre de courriels présentés sont plus vastes dans le test réel."
          }
        }
      },

      //Background Page
      backgroundPage: {
        title: "Page de contexte",
        orgChart: "Organigramme",
        Scenarios: "Scénarios"
      },

      //Inbox Page
      inboxPage: {
        title: "Boîte de réception",
        taskList: "Liste des tâches",
        notePad: "bloc-notes",
        textTools: "Outils de texte",
        emailFeatures: "Fonctions de messagerie",
        progressSaved: "Progression enregistrée",
        timer: "Minuteur"
      },

      //Confirmation Page
      confirmationPage: {
        submissionConfirmed: "Soumission Confirmée"
      },

      //Test tabs
      tabs: {
        instructionsTabTitle: "Instructions",
        backgroundTabTitle: "Contexte",
        inboxTabTitle: "Boîte de réception"
      }
    },

    //Commons
    commons: {
      psc: "Commission de la fonction publique",
      nextButton: "Suivant",
      startTest: "Commencer le test",
      submitTestButton: "Soumettre le test",
      exitTest: "Quitter le test",
      passStatus: "Réussi",
      failStatus: "Échoue",
      enabled: "Activé",
      disabled: "Désactivé"
    }
  }
});

export default LOCALIZE;
