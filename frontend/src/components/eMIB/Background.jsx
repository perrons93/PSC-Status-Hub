import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

class Background extends Component {
  render() {
    return (
      <div>
        <h2>{LOCALIZE.backgroundPageTitle}</h2>
        <h3>{LOCALIZE.orgChart}</h3>
        <h3>{LOCALIZE.Scenarios}</h3>
      </div>
    );
  }
}

export default Background;
