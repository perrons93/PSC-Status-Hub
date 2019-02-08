import React, { Component } from "react";
import Emib, { STRINGS } from "./Emib";

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
