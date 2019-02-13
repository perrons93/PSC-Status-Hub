import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

class Inbox extends Component {
  render() {
    return (
      <div>
        <h2>{LOCALIZE.emibTest.inboxPage.title}</h2>
        <h3>{LOCALIZE.emibTest.inboxPage.taskList}</h3>
        <h3>{LOCALIZE.emibTest.inboxPage.notePad}</h3>
        <h3>{LOCALIZE.emibTest.inboxPage.textTools}</h3>
        <h3>{LOCALIZE.emibTest.inboxPage.emailFeatures}</h3>
        <h3>{LOCALIZE.emibTest.inboxPage.progressSaved}</h3>
        <h3>{LOCALIZE.emibTest.inboxPage.timer}</h3>
      </div>
    );
  }
}

export default Inbox;
