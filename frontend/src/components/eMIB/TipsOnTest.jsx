import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/App.css";

class TipsOnTest extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 className="emib-section-titles">{LOCALIZE.emibTest.howToPage.tipsOnTest.title}</h2>
          <p>
            {LOCALIZE.emibTest.howToPage.tipsOnTest.descriptionPart1}
            <a href="#keyLeadershipCompetencies">
              {LOCALIZE.emibTest.howToPage.tipsOnTest.descriptionLink}
            </a>
            {LOCALIZE.emibTest.howToPage.tipsOnTest.descriptionPart2}
          </p>
          <ul>
            <li>{LOCALIZE.emibTest.howToPage.tipsOnTest.bullet1}</li>
            <li>{LOCALIZE.emibTest.howToPage.tipsOnTest.bullet2}</li>
            <li>{LOCALIZE.emibTest.howToPage.tipsOnTest.bullet3}</li>
            <li>{LOCALIZE.emibTest.howToPage.tipsOnTest.bullet4}</li>
            <li>{LOCALIZE.emibTest.howToPage.tipsOnTest.bullet5}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TipsOnTest;
