import React, { Component } from "react";
import Emib, { STRINGS } from "./Emib";

class Inbox extends Component {
  render() {
    return (
      <div>
        <h2>{STRINGS.inboxPageTitle}</h2>
        <h3>{STRINGS.taskList}</h3>
        <h3>{STRINGS.notePad}</h3>
        <h3>{STRINGS.textTools}</h3>
        <h3>{STRINGS.emailFeatures}</h3>
        <h3>{STRINGS.progressSaved}</h3>
        <h3>{STRINGS.timer}</h3>
      </div>
    );
  }
}

export default Inbox;
