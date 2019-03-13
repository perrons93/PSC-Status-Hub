import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/cat-theme.css";
import { LANGUAGES } from "../commons/Translation";
import PopupBox, { BUTTON_TYPE } from "../commons/PopupBox";
import emib_sample_test_example_team_chart_en from "../../images/emib_sample_test_example_team_chart_en.png";
import emib_sample_test_example_team_chart_fr from "../../images/emib_sample_test_example_team_chart_fr.png";

const styles = {
  testImage: {
    maxWidth: 600
  }
};

class TeamInformation extends Component {
  state = {
    showPopupBox: false
  };

  openPopup = () => {
    this.setState({ showPopupBox: true });
  };

  closePopup = () => {
    this.setState({ showPopupBox: false });
  };

  render() {
    return (
      <div>
        <PopupBox
          show={this.state.showPopupBox}
          handleClose={this.closePopup}
          title={LOCALIZE.emibTest.background.teamInformation.dialog.title}
          description={<div>{LOCALIZE.emibTest.background.teamInformation.dialog.description}</div>}
          rightButtonType={BUTTON_TYPE.secondary}
          rightButtonTitle={LOCALIZE.commons.close}
        />
        <div>
          <h2>{LOCALIZE.emibTest.background.teamInformation.title}</h2>
          <div>
            <h3>{LOCALIZE.emibTest.background.teamInformation.teamMembersSection.title}</h3>
            <div>
              <h4>{LOCALIZE.emibTest.background.teamInformation.teamMembersSection.para1Title}</h4>
              <p>{LOCALIZE.emibTest.background.teamInformation.teamMembersSection.para1}</p>
              <h4>{LOCALIZE.emibTest.background.teamInformation.teamMembersSection.para2Title}</h4>
              <p>{LOCALIZE.emibTest.background.teamInformation.teamMembersSection.para2}</p>
              <h4>{LOCALIZE.emibTest.background.teamInformation.teamMembersSection.para3Title}</h4>
              <p>{LOCALIZE.emibTest.background.teamInformation.teamMembersSection.para3}</p>
            </div>
          </div>
          <div>
            <p>
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example
                .conditionToDisplayImage === LANGUAGES.english && (
                <img
                  src={emib_sample_test_example_team_chart_en}
                  alt={LOCALIZE.emibTest.background.teamInformation.teamChart.desciption}
                  style={styles.testImage}
                />
              )}
              {LOCALIZE.emibTest.howToPage.testInstructions.step2Section.example
                .conditionToDisplayImage === LANGUAGES.french && (
                <img
                  src={emib_sample_test_example_team_chart_fr}
                  alt={LOCALIZE.emibTest.background.teamInformation.teamChart.desciption}
                  style={styles.testImage}
                />
              )}
            </p>
            <button onClick={this.openPopup} className="btn btn-secondary">
              {LOCALIZE.emibTest.background.teamInformation.teamChart.link}
            </button>
          </div>
          <div>
            <h3>{LOCALIZE.emibTest.background.teamInformation.responsibilitiesSection.title}</h3>
            <div>
              <div>
                <p>
                  {
                    LOCALIZE.emibTest.background.teamInformation.responsibilitiesSection
                      .listDescription
                  }
                </p>
                <ol>
                  <li>
                    <span className="font-weight-bold">
                      {
                        LOCALIZE.emibTest.background.teamInformation.responsibilitiesSection
                          .item1Title
                      }
                    </span>
                    {LOCALIZE.emibTest.background.teamInformation.responsibilitiesSection.item1}
                  </li>
                  <li>
                    <span className="font-weight-bold">
                      {
                        LOCALIZE.emibTest.background.teamInformation.responsibilitiesSection
                          .item2Title
                      }
                    </span>
                    {LOCALIZE.emibTest.background.teamInformation.responsibilitiesSection.item2}
                  </li>
                  <li>
                    <span className="font-weight-bold">
                      {
                        LOCALIZE.emibTest.background.teamInformation.responsibilitiesSection
                          .item3Title
                      }
                    </span>
                    {LOCALIZE.emibTest.background.teamInformation.responsibilitiesSection.item3}
                  </li>
                </ol>
                <h4>
                  {LOCALIZE.emibTest.background.teamInformation.responsibilitiesSection.para1Title}
                </h4>
                <p>{LOCALIZE.emibTest.background.teamInformation.responsibilitiesSection.para1}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamInformation;
