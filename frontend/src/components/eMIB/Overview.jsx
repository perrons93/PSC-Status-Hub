import React, { Component } from "react";
import "../../css/lib/aurora.min.css";
import LOCALIZE from "../../text_resources";
import "../../css/App.css";

const styles = {
  h2: {
    color: "#137991"
  }
};

class Overview extends Component {
  render() {
    return (
      <div className="text-zone">
        <div>
          <h2 style={styles.h2}>{LOCALIZE.emibTest.howToPage.overview.title}</h2>
          <p>
            {LOCALIZE.emibTest.howToPage.overview.description}
            <a href="">{LOCALIZE.emibTest.howToPage.overview.descriptionLink}</a>.
          </p>
        </div>
        <div>
          <h3>{LOCALIZE.emibTest.howToPage.overview.aboutSection.title}</h3>
          <p>{LOCALIZE.emibTest.howToPage.overview.aboutSection.para1}</p>
          <ul>
            <li>{LOCALIZE.emibTest.howToPage.overview.aboutSection.bullet1}</li>
            <li>{LOCALIZE.emibTest.howToPage.overview.aboutSection.bullet2}</li>
            <li>{LOCALIZE.emibTest.howToPage.overview.aboutSection.bullet3}</li>
          </ul>
          <p>{LOCALIZE.emibTest.howToPage.overview.aboutSection.para2}</p>
        </div>
      </div>
    );
  }
}

export default Overview;
