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
        },
        tipsOnTest: {
          title: "Tips on taking the e-MIB",
          descriptionPart1:
            "The e-MIB presents you with situations that will give you the opportunity to demonstrate the ",
          descriptionLink: "Key Leadership Competencies",
          descriptionPart2:
            ". Here are some tips that will help you provide assessors with the information they need to evaluate your performance on those competencies:",
          bullet1:
            "Answer all the questions asked in the emails you receive. This will ensure that you have used all the opportunities designed to allow you to demonstrate the competencies.",
          bullet2:
            "Provide initial thoughts and recommendations supported by your rationale where appropriate. You can then note other information you would need to reach a final decision.",
          bullet3:
            "Use only the information provided in the emails and the background information. Do not make any inferences based on the culture of your own organization. Avoid making assumptions that are not reasonably supported by either the background information or the emails.",
          bullet4: "You can answer the emails in any order you want.",
          bullet5: "You are responsible for managing your own time."
        },
        evaluation: {
          title: "Evaluation",
          bullet1:
            "You will be scored on the responses contained in your emails, task list and Reasons for Action. Information left in your Notepad will not be evaluated.",
          bullet2:
            "Both the actions you take and the explanations you give will be considered when evaluating your performance on each of the Key Leadership Competencies (described below). You will be assessed on the extent to which your actions demonstrate the ",
          bullet2Link: "Key Leadership Competencies",
          bullet3:
            "Your actions will be rated on effectiveness. Effectiveness is measured by whether your actions would have a positive or a negative impact in resolving the situations presented, and how widespread that impact would be.",
          bullet4:
            "Your responses will also be evaluated for how well they meet the organizational objectives presented in the background information.",
          bullet5:
            "You will not be scored on your writing. No points will be deducted for spelling, grammar, punctuation errors or for incomplete sentences. However, your writing will need to be clear enough to ensure that the assessors understand which situation you are responding to and your main points.",
          keyLeadershipCompetenciesSection: {
            title: "Key Leadership Competencies",
            para1Title: "Create Vision and Strategy: ",
            para1:
              "Managers help to define the future and chart a path forward. To do so, they take into account context. They leverage their knowledge and seek and integrate information from diverse sources to implement concrete activities. They consider different perspectives and consult as needed. Managers balance organizational priorities and improve outcomes.",
            para2Title: "Mobilize People: ",
            para2:
              "Managers inspire and motivate the people they lead. They manage their employee’s performance, provide constructive and respectful feedback to encourage and enable performance excellence. They lead by example, setting goals for themselves that are more demanding than those that they set for others.",
            para3Title: "Uphold Integrity and Respect: ",
            para3:
              "Managers exemplify ethical practices, professionalism and personal integrity, acting in the interest of Canada and Canadians. They create respectful, inclusive and trusting work environments where sound advice is valued. They encourage the expression of diverse opinions and perspectives, while fostering collegiality.",
            para4Title: "Collaborate with Partners and Stakeholders: ",
            para4:
              "Managers are deliberate and resourceful about seeking a wide spectrum of perspectives. In building partnerships, they manage expectations and aim to reach consensus. They demonstrate openness and flexibility to improve outcomes and bring a whole-of-organization perspective to their interactions. Managers acknowledge the role of partners in achieving outcomes.",
            para5Title: "Promote Innovation and Guide Change: ",
            para5:
              "Managers create an environment that supports bold thinking, experimentation and intelligent risk taking. When implementing change, managers maintain momentum, address resistance and anticipate consequences. They use setbacks as a valuable source of insight and learning.",
            para6Title: "Achieve Results: ",
            para6:
              "Managers ensure that they meet team objectives by managing resources. They anticipate, plan, monitor progress and adjust as needed. They demonstrate awareness of the context when making decisions. Managers take personal responsibility for their actions and outcomes of their decisions."
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
        },
        tipsOnTest: {
          title: "Conseils pour répondre à la BRG-e",
          descriptionPart1:
            "La BRG-e vous présente des situations qui vous donneront l’occasion de démontrer les ",
          descriptionLink: "compétences clés en matière de leadership",
          descriptionPart2:
            ". Voici quelques conseils qui vous aideront à fournir aux évaluateurs l’information dont ils ont besoin pour évaluer votre rendement par rapport à ces compétences :",
          bullet1:
            "Répondez à toutes les questions posées dans les courriels que vous recevez. Vous profiterez ainsi de toutes les occasions de démontrer les compétences recherchées.",
          bullet2:
            "Présentez vos recommandations et réflexions préliminaires accompagnées d’une justification, s’il y a lieu. Vous pouvez ensuite noter les autres renseignements dont vous auriez besoin pour en arriver à une décision.",
          bullet3:
            "Utilisez uniquement l’information fournie dans les courriels et les informations contextuelles. Ne tirez aucune conclusion fondée sur la culture de votre propre organisation. Évitez de faire des suppositions qui ne sont pas raisonnablement corroborées par l’information contextuelle ou les courriels.",
          bullet4: "Vous pouvez répondre aux courriels dans l’ordre que vous désirez.",
          bullet5: "Vous êtes responsable de la gestion de votre temps."
        },
        evaluation: {
          title: "Évaluation",
          bullet1:
            "Vous serez évalués en fonction des réponses aux courriels, des tâches et des justifications des mesures prises. Le contenu du bloc-notes ne sera pas évalué.",
          bullet2:
            "Les mesures que vous prenez et les explications que vous donnez seront prises en compte dans l’évaluation de votre rendement pour chacune des compétences clés en leadership (décrites ci-dessous). Vous serez évalué sur la façon dont les mesures que vous avez prises démontrent les ",
          bullet2Link: "compétences clés en leadership",
          bullet3:
            "Les mesures que vous avez prises seront évaluées quant à leur efficacité. Le niveau d’efficacité d’une mesure prise est déterminé par l’effet, positif ou négatif, que cette mesure aura sur la résolution des situations présentées dans les courriels de même que par l’étendue de cet effet.",
          bullet4:
            "Vos réponses seront également évaluées en fonction de leur contribution à l’atteinte des objectifs organisationnels, lesquels sont présentés dans l’information contextuelle.",
          bullet5:
            "Vous ne serez pas évalué sur votre rédaction. Aucun point ne sera enlevé pour les fautes d’orthographe, de grammaire, de ponctuation ou pour les phrases incomplètes. Votre rédaction devra toutefois être suffisamment claire pour que les évaluateurs comprennent la situation que vous traitez et vos principaux arguments.",
          keyLeadershipCompetenciesSection: {
            title: "Compétences clés en leadership",
            para1Title: "Créer une vision et une stratégie : ",
            para1:
              "Les gestionnaires contribuent à définir l’avenir et à tracer la voie à suivre. Pour ce faire, ils tiennent compte du contexte. Ils tirent parti de leurs connaissances. Ils obtiennent et intègrent de l’information provenant de diverses sources pour la mise en œuvre d’activités concrètes. Ils considèrent divers points de vue et consultent d’autres personnes, au besoin. Les gestionnaires assurent l’équilibre entre les priorités organisationnelles et contribuent à améliorer les résultats.",
            para2Title: "Mobiliser les personnes : ",
            para2:
              "Les gestionnaires inspirent et motivent les personnes qu’ils dirigent. Ils gèrent le rendement de leurs employés et leur offrent de la rétroaction constructive et respectueuse pour encourager et rendre possible l’excellence en matière de rendement. Ils dirigent en donnant l’exemple et se fixent des objectifs personnels qui sont plus exigeants que ceux qu’ils établissent pour les autres.",
            para3Title: "Préserver l’intégrité et le respect : ",
            para3:
              "Les gestionnaires donnent l’exemple sur le plan des pratiques éthiques, du professionnalisme et de l’intégrité personnelle, en agissant dans l’intérêt du Canada, des Canadiens et des Canadiennes. Ils créent des environnements de travail inclusifs, empreints de respect et de confiance, où les conseils judicieux sont valorisés. Ils encouragent les autres à faire part de leurs points de vue, tout en encourageant la collégialité.",
            para4Title: "Collaborer avec les partenaires et les intervenants : ",
            para4:
              "Les gestionnaires cherchent à obtenir, de façon délibérée et ingénieuse, un grand éventail de perspectives. Lorsqu’ils établissent des partenariats, ils gèrent les attentes et tentent de trouver un consensus. Ils font preuve d’ouverture et de souplesse afin d’améliorer les résultats et apportent une perspective globale de l’organisation à leurs interactions. Les gestionnaires reconnaissent le rôle des partenaires dans l’obtention des résultats.",
            para5Title: "Promouvoir l’innovation et orienter le changement : ",
            para5:
              "Les gestionnaires créent un environnement propice aux idées audacieuses, à l’expérimentation et à la prise de risques en toute connaissance de cause. Lors de la mise en œuvre d’un changement, ils maintiennent l’élan, surmontent la résistance et anticipent les conséquences. Ils perçoivent les revers comme une bonne occasion de comprendre et d’apprendre.",
            para6Title: "Obtenir des résultats : ",
            para6:
              "Les gestionnaires s’assurent de répondre aux objectifs de l’équipe en gérant les ressources. Ils prévoient, planifient et surveillent les progrès, et font des ajustements au besoin. Ils démontrent leur connaissance du contexte lors de la prise de décisions. Les gestionnaires assument la responsabilité personnelle à l’égard de leurs actions et des résultats de leurs décisions."
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
