import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

class Inbox extends Component {
  render() {
    return (
      <div>
        <h2>{LOCALIZE.inboxPageTitle}</h2>
        <h3>{LOCALIZE.taskList}</h3>
        <h3>{LOCALIZE.notePad}</h3>
        <h3>{LOCALIZE.textTools}</h3>
        <h3>{LOCALIZE.emailFeatures}</h3>
        <h3>{LOCALIZE.progressSaved}</h3>
        <h3>{LOCALIZE.timer}</h3>
      </div>
    );
  }
}

export default Inbox;
