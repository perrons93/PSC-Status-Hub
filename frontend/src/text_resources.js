import LocalizedStrings from "react-localization";

let LOCALIZE = new LocalizedStrings({
  en: {
    //Main Tabs
    mainTabs: {
      homeTabTitle: "Home",
      prototypeTabTitle: "Prototype",
      statusTabTitle: "Status"
    },


    //Status Page
    statusPage: {
      serviceStatusTable: {
        title: "Application Status",
        headerLeft: "Application Name",
        headerRight: "Status", 
        oauthDesc: "Oauth Provider", 
        oltfDesc: "OLTF", 
      },
    },


    //Screen Reader
    ariaLabel: {
      backgroundMenu: "Background Menu",
      mainMenu: "Main Menu",
      tabMenu: "eMIB Tab Menu",
      instructionsMenu: "Instructions Menu",
      languageToggleBtn: "language-toggle-button",
      authenticationMenu: "Authentication Menu",
      emailHeader: "email header",
      responseDetails: "response details",
      reasonsForActionDetails: "reasons for action details",
      taskDetails: "task details",
      emailOptions: "email options",
      taskOptions: "task options",
      taskTooltip: "task tooltip",
      reasonsForActionTooltip: "reasons for action tooltip"
    },

    //Commons
    commons: {
      psc: "Public Service Commission",
      nextButton: "Next",
      backButton: "Back",
      startTest: "Start test",
      confirmStartTest: {
        aboutToStart: "You are about to start the test.",
        timedTest: "This is a timed test.",
        timerWarning:
          "Once you start the timer will begin, and you can only leave the test by submitting or quitting.",
        instructionsAccess:
          "You will have access to the instructions from within the test. Good luck!"
      },
      submitTestButton: "Submit test",
      quitTest: "Quit Test",
      returnToTest: "Return to Test",
      returnToResponse: "Return to response",
      passStatus: "Pass",
      failStatus: "Fail",
      enabled: "Enabled",
      disabled: "Disabled",
      backToTop: "Back to top",
      notepad: {
        title: "notepad",
        placeholder: "Put your notes here...",
        hideButton: "hide",
        openButton: "open notes"
      },
      cancel: "Cancel",
      cancelResponse: "Cancel response",
      close: "Close"
    }
  },

  fr: {
    //Main Tabs
    mainTabs: {
      homeTabTitle: "Accueil",
      prototypeTabTitle: "Prototype",
      statusTabTitle: "Statut"
    },

    //authentication
    authentication: {
      login: {
        title: "SE CONNECTER",
        content: {
          title: "Connexion",
          description:
            "FR An account is required to proceed further. To log in, enter your credentials below.",
          inputs: {
            emailTitle: "Adresse courriel :",
            emailPlaceholder: "john.smith@outlook.ca",
            passwordTitle: "Mot de passe :",
            passwordPlaceholder: "Mot de passe"
          }
        },
        button: "Connexion"
      },
      createAccount: {
        title: "CRÉER UN COMPTE",
        content: {
          title: "Créer un compte",
          description:
            "FR An account is required to proceed further. To create an account, fill out the following.",
          inputs: {
            firstNameTitle: "Prénom :",
            firstNamePlaceholder: "John",
            lastNameTitle: "Nom de famille :",
            lastNamePlaceholder: "Smith",
            emailTitle: "Adresse courriel :",
            emailPlaceholder: "john.smith@outlook.ca",
            passwordTitle: "Mot de passe (doit contenir entre 5-15 caractères) :",
            passwordPlaceholder: "Mot de passe",
            passwordErrors: {
              description: "Votre mot de passe doit satisfaire les critères suivants :",
              upperCase: "Au moins une majuscule",
              lowerCase: "Au moins une minuscule",
              digit: "Au moins un chiffre",
              specialCharacter: "Au moins un caractère spécial",
              length: "Au moins 5 caractères et maximum 15"
            },
            passwordConfirmationTitle: "Confirmer le mot de passe :",
            passwordConfirmationPlaceholder: "Mot de passe",
            passwordConfirmationError: "Doit correspondre au mot de passe"
          }
        },
        button: "Créer compte"
      }
    },

    //Home Page
    homePage: {
      title:
        "Outil d'évaluation des compétences de la Commission de la fonction publique du Canada",
      welcomeMsg: "Bienvenue dans l'outil d'évaluation des compétences.",
      description:
        "FR Code for Canada and PSC are working on this tool to help assess managerial canadiates for the federal public service. It is in the alpha phase which means it is currently going through product testing and is subject to change."
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
      logo: "Logo Thunder CAT",
      welcomeMsg:
        "Page de statut interne afin de déterminer rapidement l'état / la santé de l'Outil d'Évaluation des Compétences.",
      gitHubRepoBtn: "Répertoire GitHub",
      serviceStatusTable: {
        title: "Statut des services",
        frontendDesc: "La Face avant de l'application est construite et utilisée avec succès",
        oauthDesc: "OAuth Provider", 
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
        testTitle: "La BRG-e",
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
            "La boîte de réception pour la gestion électronique (BRG-e) simule d’une boîte de courriel dans laquelle vous allez répondre à des courriels décrivant des situations qui sont typiquement vécues par les gestionnaires de la fonction publique. Ces situations vous donneront l’occasion de démontrer les compétences clés en leadership, décrit dans «Évaluation».",
          noteSection: {
            para1: "En complétant la BRG-e, vous aurez accès :",
            bullet1: "Aux directives du test (le présent document).",
            bullet2:
              "À de l’information contextuelle décrivant votre rôle en tant que gestionnaire et l’organisation fictive où vous travaillez.",
            bullet3:
              "À un bloc-notes pouvant servir de papier brouillon. Le contenu du bloc-notes ne sera pas évalué."
          },
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
          description:
            "La BRG-e vous présente des situations qui vous donneront l’occasion de démontrer les compétences clés en matière de leadership, décrit dans «Évaluation». Voici quelques conseils qui vous aideront à fournir aux évaluateurs l’information dont ils ont besoin pour évaluer votre rendement par rapport à ces compétences :",
          bullet1:
            "Répondez à toutes les questions posées dans les courriels que vous recevez. Vous profiterez ainsi de toutes les occasions de démontrer les compétences recherchées.",
          bullet2:
            "Présentez vos recommandations et réflexions préliminaires accompagnées d’une justification, s’il y a lieu. Vous pouvez ensuite noter les autres renseignements dont vous auriez besoin pour en arriver à une décision.",
          bullet3:
            "Utilisez uniquement l’information fournie dans les courriels et les informations contextuelles. Ne tirez aucune conclusion fondée sur la culture de votre propre organisation. Évitez de faire des suppositions qui ne sont pas raisonnablement corroborées par l’information contextuelle ou les courriels.",
          bullet4: "Vous pouvez répondre aux courriels dans l’ordre que vous désirez.",
          bullet5: "Vous êtes responsable de la gestion de votre temps."
        },
        testInstructions: {
          title: "Instructions du test",
          para1:
            "Dans un premier temps, lisez l’information contextuelle, laquelle décrit votre poste et l’organisation fictive dans laquelle vous travaillez. Ensuite, passez à la boîte de réception pour lire les courriels que vous avez reçus et prendre des dispositions pour répondre à ces courriels comme si vous étiez un gestionnaire dans cette organisation fictive.",
          step1Section: {
            title: "Étape 1 — Répondre aux courriels",
            description:
              "Vous pouvez répondre aux courriels que vous avez reçus de deux façons : en envoyant un courriel ou en ajoutant une tâche à votre liste de tâches. Les deux méthodes de réponse sont décrites ci-dessous, suivies d’exemples.",
            part1: {
              title: "Envoyer un courriel",
              para1:
                "Vous pouvez envoyer un courriel pour répondre à celui que vous avez reçu dans votre boîte de réception. Vos réponses écrites devraient représenter ce que vous feriez en tant que gestionnaire.",
              para2:
                "Vous pouvez envoyer un courriel en utilisant les fonctions suivantes : répondre, répondre à tous, transférer ou rédiger un nouveau courriel. Si vous choisissez de rédiger un nouveau courriel, vous aurez accès à un répertoire de noms et d’adresses de courriel. Vous pouvez écrire autant de courriels que vous le souhaitez pour répondre à un courriel que vous avez reçu."
            },
            part2: {
              title: "Ajouter une tâche à la liste de tâches",
              para1:
                "En plus de répondre à un courriel, ou au lieu d’y répondre, vous pouvez ajouter des tâches à la liste de tâches. Une tâche représente une mesure que vous comptez prendre pour gérer une situation présentée dans les courriels. Voici des exemples de tâches : planifier une rencontre ou communiquer avec un collègue afin d’obtenir de l’information. Assurez-vous de fournir suffisamment d’information dans votre description de la tâche pour que nous sachions à quelle situation vous répondez. Vous devez également préciser quelles mesures vous envisagez prendre et qui devra participer à cette tâche. Vous pouvez ajouter, supprimer ou modifier vos tâches dans la liste des tâches."
            },
            part3: {
              title: "Comment choisir une méthode de réponse",
              para1:
                "Il n’y a pas de bonne ou de mauvaise façon de répondre. En répondant à un courriel, vous pouvez :",
              bullet1: "envoyer un ou des courriels, ou",
              bullet2: "ajouter une ou des tâches à votre liste de tâches, ou",
              bullet3: "faire les deux.",
              para2:
                "Vous serez évalué en fonction du contenu de vos réponses, et non en fonction des méthodes de réponses choisies (c.-à-d., envoi de courriels et ajout d’une tâche à une liste de tâches à accomplir). Cela dit, vos réponses doivent être suffisamment détaillées et claires pour permettre aux évaluateurs d’avoir une bonne compréhension des mesures que vous avez prises pour gérer la situation. Par exemple, si vous comptez organiser une réunion, vous devrez préciser les points qui y seront discutés.",
              para3:
                "Si vous décidez d’envoyer un courriel et d’ajouter une tâche à votre liste de tâches en répondant à un courriel que vous avez reçu, vous n’avez pas à répéter la même information aux deux endroits. Par exemple, si vous mentionnez dans un courriel que vous organiserez une réunion avec un collègue, vous n’avez pas à ajouter cette réunion à votre liste de tâches."
            }
          },
          step2Section: {
            title: "Étape 2 — Ajouter une justification des mesures prises (facultatif)",
            description:
              "Après avoir envoyé un courriel ou ajouté une tâche, vous avez la possibilité d’expliquer votre raisonnement dans la section « Justification des mesures prises ». Vous pouvez expliquer dans cette section pourquoi vous avez pris une ou des mesures pour gérer la situation présentée dans le courriel en question. Remplir la section « Justification des mesures prises » est facultatif. Notez que vous pouvez décider d’ajouter une « Justification des mesures prises » lorsque vous répondez à certains courriels, mais pas pour d’autres. Ceci est également vrai pour les tâches dans la liste de tâches. De plus, si vous ajoutez une « Justification des mesures prises », vous pouvez choisir de justifier certaines des mesures prises tandis que d’autres ne nécessitent pas d’explications supplémentaires."
          }
        },
        testExamples: {
          title: "FR Test examples",
          para1: "Exemple de courriel et façons de répondre",
          part1Title: "Courriel original",
          part1Description:
            "Vous trouverez ci-dessous deux façons différentes de répondre au courriel. Comme il est mentionné précédemment, vous pouvez choisir l’une ou l’autre des deux options présentées ou combiner les deux. Veuillez noter que les réponses fournies n’ont pas été évaluées pour déterminer la mesure dans laquelle elles démontrent la compétence ciblée dans le courriel. Elles sont présentées ici uniquement pour illustrer comment utiliser chacune des deux façons de répondre.",
          part2Title:
            "Option 1 – Envoyer un courriel renfermant une justification des mesures prises",
          part3Title:
            "Option 2 – Ajouter des tâches à la liste de tâches et l’accompagner d’une justification des mesures prises"
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
      background: {
        backgroundInformation: {
          title: "Contexte",
          paragraph1:
            "Dans cet exercice, vous jouez le rôle de Claude Huard, le nouveau gestionnaire de l’Équipe de l’assurance de la qualité (AQ). Vous remplacez Gary Severna, qui a récemment pris sa retraite. Votre équipe fait partie de l’Unité des services et communications (SC) d’un organisme de la fonction publique appelé Conseil du développement organisationnel (CDO). Il est 9 h 30 le lundi 7 novembre.",
          paragraph2:
            "Dans les sections suivantes, vous trouverez de l’information sur le CDO et l’Équipe d’AQ. Vous serez en mesure d’y accéder tout au long du test."
        },
        organizationalInformation: {
          title: "Renseignements sur le Conseil du Développement Organisationnel  (CDO)",
          description:
            "Le CDO est un organisme gouvernemental indépendant qui œuvre à la promotion du développement organisationnel au sein de la fonction publique. Le mandat du CDO est d’offrir de la formation à tous les employés de la fonction publique afin de maintenir une main-d’œuvre productive et digne d’éloges. L’organisme est responsable de : (1) la création et l’évaluation des programmes de formation; (2) la recherche et l’innovation dans les domaines de l’apprentissage, du transfert de formation et de la technologie; (3) la réalisation de vérifications en matière de comportements en milieu de travail, conformément aux normes d’éthique et de conduite professionnelle de la fonction publique. Le CDO, dont l’administration centrale est située dans la région de la capitale nationale, compte actuellement environ 100 employés.",
          prioritiesSection: {
            title: "Priorités",
            bullet1:
              "Veiller à ce que l’organisme continue d’améliorer les comportements productifs au travail par la mise en place de politiques en matière de comportement éthique et professionnel.",
            bullet2:
              "Évaluer de façon continue l’efficacité et l’utilité des programmes de formation au sein de la fonction publique.",
            bullet3:
              "Offrir à l’échelle de la fonction publique des programmes de qualité supérieure qui appuient les priorités du gouvernement du Canada.",
            bullet4:
              "Gérer la documentation et la communication des activités de formation des clients."
          },
          risksSection: {
            title: "Risques",
            bullet1:
              "La portée et la complexité des programmes de formation posent des défis continuels quant à : (1) leur livraison dans les délais prévus et leur efficacité à répondre aux priorités stratégiques nouvelles ou émergentes; (2) le maintien de partenariats essentiels à l’élaboration, à la livraison et à l’évaluation de programmes de formation de haute qualité; (3) la capacité de suivre le rythme des demandes changeantes des clients et la nouvelle technologie d’apprentissage."
          }
        },
        organizationalStructure: {
          title: "Structure organisationnelle",
          description:
            "Le CDO a une structure organisationnelle qui comporte les quatre unités suivantes : Affaires ministérielles, Recherche et innovations, Développement de programmes, et Services et communications.",
          para1Title: "Affaires ministérielles (AM) ",
          para1:
            "L’Unité des AM est composée de l’Équipe des ressources humaines, l’Équipe des finances et l’Équipe de la technologie de l’information. Ensemble, ces équipes sont responsables de la gestion de la main-d’œuvre, de l’environnement de travail, des finances, ainsi que de la technologie et de l’information à l’intérieur du CDO.",
          para2Title: "Recherche et innovations (RI). ",
          para2:
            "Les principaux objectifs de l’Unité de RI sont de mener des initiatives de recherche en apprentissage, en transfert de formation et en technologie; et de contribuer à l’élaboration de techniques d’enseignement novatrices, afin de promouvoir la productivité et le bien-être général des employés.",
          para3Title: "Développement de programmes (DP). ",
          para3:
            "L’Unité du DP vise à planifier, à créer et à administrer les programmes de formation au sein de la fonction publique. Pour ce faire, l’unité établit et entretient des relations avec les clients et les partenaires, et analyse  leurs besoins de formation en développement organisationnel.",
          para4Title: "Services et communications (SC). ",
          para4:
            "Les principaux objectifs de l’Unité des SC sont d’évaluer de façon continue les programmes de formation offerts par les organisations de la fonction publique, effectuer des vérifications internes et externes pour les partenaires et les clients, et surveiller la diffusion de l’information (p. ex., évaluer le contenu des outils en ligne, rédiger les documents relatifs aux programmes de formation). L’Unité des SC est composée de l’Équipe de l’assurance de la qualité, l’Équipe du service et soutien, l’Équipe des vérifications et de l’Équipe des formations en ligne.",
          orgChart: {
            desciption: "Organigramme (CDO)",
            link: "Description de l'image"
          },
          dialog: {
            title: "FR The Organizational Chart of the ODC",
            description:
              "FR This is the organizational chart for the Organizational Development Council (ODC). At the top is the President: Jenna Icart. Under the president are 4 directors, one representing each unit of the council. These are presented left to right as: Amari Kinsler from Corporate Affairs, Geneviève Bédard from Research and Innovations, Bartosz Greco from Program Development, Nancy Ward from Services and Communications.  Corporate Affairs has 3 managers: Marc Sheridan from Human Resources, Bob McNutt from Finance, and Lana Hussad from Information Technology. Services and Communications has 4 managers: You are Claude Huard from Quality Assurance, Haydar Kalil from Services and Support, Geoffrey Hamma from Audits, and Lucy Trang from E-Training."
          }
        },
        teamInformation: {
          title: "Information sur l’Équipe de l’assurance de la qualité (AQ)",
          teamMembersSection: {
            title: "Membres de l’équipe",
            para1Title: "Directrice : Nancy Ward",
            para1:
              "Votre directrice est Nancy Ward. La directrice de l’Unité des services et communications veille à l’application des politiques et supervise la création, l’exécution et l’évaluation des programmes de formation ainsi que les vérifications. Elle a également la responsabilité de superviser tous les canaux de communication internes et externes, y compris le contenu Web en ligne.",
            para2Title: "Gestionnaire : Claude Huard (vous)",
            para2:
              "Votre rôle en tant que gestionnaire de l’Équipe de l’assurance de la qualité est de superviser la révision de contenu et de formuler des recommandations finales au sujet des manuels de formation, des spécifications de formation et d’autres documents de formation connexes. Votre rôle consiste également à formuler des recommandations en matière de dotation, gérer le rendement des membres de l’équipe ainsi que coordonner l’échange d’information et d’expertise avec les partenaires et les intervenants. Le gestionnaire est également responsable d’assurer la conformité à la politique et aux normes professionnelles et de présenter aux cadres des rapports, lesquels comprennent des mises à jour, des échéanciers et les incidences budgétaires des projets.",
            para3Title: "Analystes de l’assurance de la qualité",
            para3:
              "Les membres de votre équipe sont Danny McBride, Serge Duplessis, Marina Richter, Mary Woodside, Charlie Wang et Jack Laurier. Tous les membres de l’équipe sont des analystes de l’assurance de la qualité et, par conséquent, des experts en documentation qui formulent des recommandations sur les documents de formation et le contenu en ligne."
          },
          teamChart: {
            desciption: "Organigramme Équipe de l'assurance de la qualité (AQ) Team",
            link: "Description de l'image"
          },
          dialog: {
            title: "FR The Organizational Chart of the QA Team",
            description:
              "FR This is the organizational chart for the Quality Assurance (QA) Team at the Organizational Development Council. You, Claude Huard are the Manager of this unit, and are located at the top of the organizational chart. Under you, The Manager, are 6 Quality Assurance Analysts: Danny McBride, Serge Duplessis, Marina Richter, Mary Woodside, Charlie Wang, and Jack Laurier."
          },
          responsibilitiesSection: {
            title: "Responsabilités de l’Équipe de l’AQ",
            listDescription:
              "L’Équipe de l’assurance de la qualité doit s’acquitter de ce qui suit :",
            item1Title: "Fournir des services de gestion de l’information. ",
            item1:
              "L’équipe doit veiller à ce que les programmes en développement organisationnel au sein de la fonction publique soient bien documentés. Cette priorité comprend : synthétiser un grand volume de renseignements provenant de divers organismes gouvernementaux, s’assurer que les politiques sur la sécurité de l’information sont respectées et donner un accès approprié aux documents archivés.",
            item2Title: "Examiner le contenu en ligne. ",
            item2:
              "Les responsabilités de l’équipe comprennent les suivantes : Examiner un grand volume d’information sur les programmes de formation organisationnels de divers clients et partenaires, s’assurer que les politiques sur les communications internes et les communications externes sont respectées et formuler des recommandations aux cadres supérieurs aux fins d’approbation définitive avant la diffusion de l’information.",
            item3Title: "Examiner les documents de formation. ",
            item3:
              "L’équipe doit s’assurer de l’intégralité et de la qualité du contenu de tous les documents liés à la formation en développement organisationnel. Cette priorité inclut l’examen des instructions de formation, des guides de correction, des spécifications de la formation, des rapports statistiques et d’autres documents de formation connexes.",
            para1Title: "Nouvelles initiatives",
            para1:
              "Vous avez reçu le mandat de formuler une recommandation au sujet de l’adoption d’un système commercial de traitement des demandes en ligne. Le système proposé, appelé Serv, offre des fonctionnalités qui faciliteraient la gestion des demandes des clients et des partenaires qui cherchent à obtenir des services de révision du contenu et de gestion de la documentation. Cela inclut l’amélioration du processus de catégorisation et de suivi des demandes en attente, la personnalisation des formulaires de demande et divers générateurs de rapports. L’Équipe de la technologie de l’information (TI) du CDO a récemment fait un essai pilote de Serv auquel a participé Danny McBride, un des membres de l’Équipe de l’assurance de la qualité. Danny a donné des commentaires positifs sur son expérience avec le système Serv. Votre équipe discute actuellement de la proposition visant à introduire cette nouvelle technologie afin d’améliorer vos services."
          }
        }
      },

      //Inbox Page
      inboxPage: {
        emailId: " courriel # ",
        to: "À",
        from: "Expéditeur",
        date: "Date",
        addReply: "FR Add email Response",
        addTask: "FR Create a task",
        yourActions: `FR You responded with {0} emails and {1} tasks`,
        editActionDialog: {
          addEmail: "FR Add email response",
          editEmail: "FR Edit email response",
          addTask: "FR Add task",
          editTask: "FR Edit task",
          save: "FR Save response"
        },
        emailCommons: {
          to: "À :",
          cc: "Cc :",
          reply: "répondre",
          replyAll: "répondre à tous",
          forward: "transmettre",
          editButton: "Modifier réponse",
          deleteButton: "Supprimer résponse",
          originalEmail: "FR Original email",
          yourResponse: "FR Your response"
        },
        addEmailResponse: {
          selectResponseType:
            "FR Please select how you would like to respond to the original email:",
          headerFieldPlaceholder: "JohnSmith",
          response: "FR Your response:",
          reasonsForAction: "FR Add reasons for actions here (optional)"
        },
        emailResponse: {
          description: "FR For this response, you've chosen to:",
          response: "FR Your response:",
          reasonsForAction: "FR Your reasons for action:"
        },
        addEmailTask: {
          header: "FR Email ID #{0}: {1}",
          task: "FR Your task(s):",
          reasonsForAction: "FR Add reasons for actions here (optional)"
        },
        taskContent: {
          task: "FR Your task(s):",
          taskTooltipPart1: "FR An action you intend to take to address a situation in the emails.",
          taskTooltipPart2: "FR Example: Planning a meeting, asking a colleague for information.",
          reasonsForAction: "FR Your reasons for action:",
          reasonsForActionTooltip:
            "FR Here, you can explain why you took a specific action in response to a situation if you feel you need to provide additional information"
        },
        deleteResponseConfirmation: {
          title: "FR Are you sure you want to delete this response?",
          systemMessageTitle: "Avertissement!",
          systemMessageDescription:
            "FR This reply will be removed from your test responses. You will not be able to recover your response or reasons for action.",
          description:
            'FR If you are certain that you want to delete your response, click the "Delete response" button.'
        },
        cancelResponseConfirmation: {
          title: "FR Are you sure you want to cancel this response?",
          systemMessageTitle: "Avertissement!",
          systemMessageDescription:
            "FR Your response will not be saved if you proceed. If you wish to save your answer, you may return to the response. All of your responses can be edited or deleted before submission.",
          description:
            'FR If you do not wish to save the response, click the "Cancel response" button.'
        }
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
      },

      //Test Footer
      testFooter: {
        submitTestPopupBox: {
          title: "Confirmer l’envoi du test?",
          warning: {
            title: "Avertissement : your notebook will not be saved.",
            message:
              "FR Anything written in the notepad will not be submitted with the test for scoring. Ensure that you have reviewed all of your responses before submitting the test as you will not be able to go back to make changes."
          },
          description:
            "Si vous êtes prêt(e) à envoyer votre test pour la notation, cliquez sur le bouton « Envoyer le test ». La séance de test sera fermée et vous recevrez d’autres instructions."
        },
        quitTestPopupBox: {
          title: "Souhaitez-vous mettre fin à cette séance de test?",
          warning: {
            title:
              "Avertissement : une fois la séance de test terminée, vous ne pourrez plus y retourner.",
            message:
              "Vous ne pourrez pas récupérer vos réponses et n’aurez plus accès à la séance de test. Vous pourrez reprendre le test à une date ultérieure."
          },
          descriptionPart1:
            "Vous êtes sur le point de mettre fin à la séance de test. Ce faisant, vous affirmez et reconnaissez :",
          checkboxOne: "je me retire volontairement de ce test;",
          checkboxTwo: "mon test ne sera pas noté;",
          checkboxThree:
            "je suis conscient(e) que la période d'attente pour ce test peut s’appliquer, si je veux écrire ce test de nouveau dans le futur.",
          descriptionPart2:
            "Si vous êtes certain(e) de vouloir mettre fin à cette séance, cliquez sur le bouton « Quitter la séance test ». La séance de test sera fermée et vous recevrez des instructions sur la façon de vous retirer.",
          descriptionPart3: "Souhaitez-vous mettre fin à cette séance de test?"
        }
      }
    },

    //Screen Reader
    ariaLabel: {
      backgroundMenu: "FR Background Menu",
      mainMenu: "Menu Principal",
      tabMenu: "Menu des onglets de la BRG-e",
      instructionsMenu: "Menu des instructions",
      languageToggleBtn: "bouton-de-langue-a-bascule",
      authenticationMenu: "Menu d'authentification",
      emailHeader: "en-tête du courriel",
      responseDetails: "détails de la réponse",
      reasonsForActionDetails: "motifs de l'action",
      taskDetails: "détails sur la ou les tâches",
      emailOptions: "options de messagerie",
      taskOptions: "options de tâche",
      taskTooltip: "infobulle de tâche",
      reasonsForActionTooltip: "infobulle des motifs de l'action"
    },

    //Commons
    commons: {
      psc: "Commission de la fonction publique",
      nextButton: "Suivant",
      backButton: "Retour",
      startTest: "Commencer le test",
      confirmStartTest: {
        aboutToStart: "FR You are about to start the test.",
        timedTest: "FR This is a timed test.",
        timerWarning:
          "FR Once you start the timer will begin, and you can only leave the test by submitting or quitting.",
        instructionsAccess:
          "FR You will have access to the instructions from within the test. Good luck!"
      },
      submitTestButton: "Envoyer le test",
      quitTest: "Quitter la séance de test",
      returnToTest: "Retourner à la séance",
      returnToResponse: "Retourner à la réponse",
      passStatus: "Réussi",
      failStatus: "Échoue",
      enabled: "Activé",
      disabled: "Désactivé",
      backToTop: "Haut de la page",
      notepad: {
        title: "bloc-notes",
        placeholder: "Mettez vos notes ici...",
        hideButton: "cacher",
        openButton: "ouvrir notes"
      },
      cancel: "Annuler",
      cancelResponse: "Annuler la réponse",
      close: "Fermer"
    }
  }
});

export default LOCALIZE;
