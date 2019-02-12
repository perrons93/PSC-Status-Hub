import React, { Component } from "react";
import STRINGS from "../../text_resources";

class Background extends Component {
  render() {
    return (
      <div>
        <h2>{STRINGS.backgroundPageTitle}</h2>
        <h3>{STRINGS.orgChart}</h3>
        <h3>{STRINGS.Scenarios}</h3>
      </div>
    );
  }
}

export default Background;
