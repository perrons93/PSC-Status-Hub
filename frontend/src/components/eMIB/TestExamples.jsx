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
import Email from "./Email";
import EditEmail from "./EditEmail";
import EditTask from "./EditTask";
import { ACTION_TYPE, EMAIL_TYPE } from "./constants";

const emailStubEN = {
  id: 0,
  to: "Claude Huard (Manager, Quality Assurance Team)",
  from: "Geneviève Bédard (Director, Research and Innovations Unit)",
  subject: "Preparing Mary for her assignment",
  date: "Friday, November 4",
  body:
    "Hello Claude,\nI was pleased to hear that one of your quality assurance analysts, Mary Woodside, has accepted a six-month assignment with my team, starting on January 2. I understand she has experience in teaching and using modern teaching tools from her previous work as a college professor. My team needs help to develop innovative teaching techniques that promote employee productivity and general well-being. Therefore I think Mary’s experience will be a good asset for the team.\nIn order to maximize the benefits of the assignment for both our teams, are there any areas in which you might want Mary to gain more experience that could be of value when she returns to your team?\nLooking forward to getting your input,\nGeneviève"
};

const emailStubFR = {
  id: 0,
  to: "Claude Huard (gestionnaire, Équipe de l’assurance de la qualité)",
  from: "Geneviève Bédard (directrice, Unité de recherche et innovations)",
  subject: "Préparation de Mary en vue de son affectation",
  date: "Le vendredi 4 novembre",
  body:
    "Bonjour Claude.\n\nJe suis ravie d’apprendre qu’une de vos analystes de l’assurance de la qualité, Mary Woodside, a accepté une affectation de six mois avec mon équipe, à compter du 2 janvier. Je crois savoir qu’elle a de l’expérience dans l’enseignement et l’utilisation d’outils pédagogiques modernes dans le cadre de son travail antérieur de professeure au niveau collégial. Mon équipe a besoin d’aide pour mettre au point des techniques d’enseignement novatrices qui favorisent la productivité et le bien-être général des employés. Je pense donc que l’expérience de Mary sera un bon atout pour l’équipe. \n\nAfin de maximiser les avantages de l’affectation pour nos deux équipes, y a-t-il des domaines dans lesquels tu aimerais que Mary acquière plus d’expérience et qui pourraient être utiles à son retour dans votre équipe?\n\nJ’attends avec impatience ta réponse.\n\nGeneviève"
};

const emailResponseEN = {
  actionType: ACTION_TYPE.email,
  emailType: EMAIL_TYPE.reply,
  emailTo: [8], // Geneviève Bédard in the address book
  emailCc: [],
  emailBody:
    "Hi Geneviève,\n\nI agree that we should plan Mary’s assignment so both our teams can benefit from it. I suggest that we plan to train Mary in the synthesis of data from multiple sources. Doing so could help her broaden her skill set and would be beneficial to our team when she comes back. Likewise, your team members could benefit from her past experience in teaching. I’ll consult her directly as I would like to have her input on this. I’ll get back to you later this week once I have more information to provide you on this matter.\n\nThat being said, what are your own expectations? Are there any current challenges or specific team dynamics that should be taken into account? I’d like to consider all factors, such as the current needs of your team, challenges and team dynamics before I meet with Mary to discuss her assignment.\n\nThanks,\n\nClaude",
  reasonsForAction:
    "I am planning to meet with Mary to discuss her own expectations regarding the assignment and to set clear objectives. I want to ensure she feels engaged and knows what is expected of her, to help her prepare accordingly. I will also look at her performance agreement to ensure that what I propose is consistent with her learning plan."
};

const emailResponseFR = {
  actionType: ACTION_TYPE.email,
  emailType: EMAIL_TYPE.reply,
  emailTo: [8], // Geneviève Bédard in the address book
  emailCc: [],
  emailBody:
    "Bonjour Geneviève,\n\nJe crois comme toi que nous devons planifier l’affectation de Mary afin que nos deux équipes en tirent parti. Je suggère que nous envisagions de former Mary à la synthèse de données provenant de sources multiples. Ceci l’aiderait à élargir ses compétences et serait utile à notre équipe à son retour. De même, les membres de ton équipe pourraient aussi bénéficier de son expérience en enseignement. Je la consulterai directement, car j’aimerais connaître son opinion à ce propos. Je te redonne des nouvelles au cours de la semaine, dès que j’ai plus d’information sur le sujet.\n\nCela dit, quelles sont tes attentes? Y a-t-il certains défis ou aspects particuliers de la dynamique de l’équipe dont il faut tenir compte? J’aimerais tenir compte de tous les facteurs, tels que les besoins actuels de ton équipe, les défis et la dynamique de l’équipe avant de rencontrer Mary pour discuter de son affectation.\n\nMerci.\n\nClaude",
  reasonsForAction:
    "Je prévois de rencontrer Mary pour discuter de ses attentes à l’égard de l’affectation et établir des objectifs clairs. Je veux qu’elle se sente incluse et qu’elle sache ce qu’on attend d’elle, afin de l’aider à se préparer en conséquence. Je prendrai également connaissance de son entente de rendement pour m’assurer que ma proposition cadre bien avec son plan d’apprentissage."
};

const taskResponseEN = {
  actionType: ACTION_TYPE.task,
  task:
    "Reply to Geneviève’s email:\nSuggest training Mary in synthesizing information from multiple sources so that she can broaden her skill set\nAsk what her expectations and challenges are on her team’s side so I can consider all factors in determining how her team could benefit from Mary’s experience in providing training.\nInform that I’m gathering more information from Mary and will respond with suggestions by the end of the week\nSchedule a meeting with Mary to discuss her assignment objectives and ensure she feels engaged and knows what is expected of her.\nRefer to Mary’s past and current performance agreements to ensure that what I propose is in line with her learning plan.",
  reasonsForAction:
    "Training Mary in synthesizing information from multiple sources would be beneficial to our team which needs to consolidate information gathered from many sources. Asking Geneviève for her own expectations and challenges will help me better prepare Mary and ensure that the assignment is beneficial to both our teams."
};

const taskResponseFR = {
  actionType: ACTION_TYPE.task,
  task:
    "Répondre au courriel de Geneviève :\nproposer de former Mary à la synthèse de l’information provenant de sources multiples afin qu’elle puisse élargir ses compétences ;\ndemander quels sont ses attentes et ses défis du côté de son équipe afin que je puisse tenir compte de tous les facteurs pour déterminer comment son équipe pourrait bénéficier de l’expérience de Mary dans la prestation de formation ;\nl’informer que je travaille à recueillir plus d’information auprès de Mary, et que je lui ferai part de mes suggestions d’ici la fin de la semaine.\nPlanifier une rencontre avec Mary pour discuter de ses objectifs d’affectation et s’assurer qu’elle se sent engagée et qu’elle sait ce qu’on attend d’elle.\nConsulter les ententes de rendement passées et actuelles de Mary pour vérifier que ce que je propose est conforme à son plan d’apprentissage.",
  reasonsForAction:
    "Former Mary à la synthèse de l’information provenant de sources multiples serait bénéfique pour notre équipe, lequel a besoin de consolider l’information recueillie auprès de nombreuses sources. Demander à Geneviève ses propres attentes et défis m’aidera à mieux préparer Mary et à m’assurer que la mission est bénéfique pour nos deux équipes."
};

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
                <Email email={emailStubEN} disabled={true} />
              )}
              {currentLanguage === LANGUAGES.french && (
                <Email email={emailStubFR} disabled={true} />
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
                <EditEmail onChange={() => {}} action={emailResponseEN} disabled={true} />
              )}
              {currentLanguage === LANGUAGES.french && (
                <EditEmail onChange={() => {}} action={emailResponseFR} disabled={true} />
              )}
            </p>
            <h4 style={styleConstants.instuctions.h4}>
              {LOCALIZE.emibTest.howToPage.testExamples.part3Title}
            </h4>
            <p style={styleConstants.instuctions.p}>
              {currentLanguage === LANGUAGES.english && (
                <EditTask onChange={() => {}} action={taskResponseEN} disabled={true} />
              )}
              {currentLanguage === LANGUAGES.french && (
                <EditTask onChange={() => {}} action={taskResponseFR} disabled={true} />
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
