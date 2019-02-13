import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

class Background extends Component {
  render() {
    return (
      <div>
        <h2>{LOCALIZE.emibTest.backgroundPage.title}</h2>
        <h3>{LOCALIZE.emibTest.backgroundPage.orgChart}</h3>
        <h3>{LOCALIZE.emibTest.backgroundPage.Scenarios}</h3>
      </div>
    );
  }
}

export default Background;
