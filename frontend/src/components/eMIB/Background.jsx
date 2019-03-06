import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

const styles = {
  padding: {
    padding: 20
  }
};

class Background extends Component {
  render() {
    return (
      <div style={styles.padding}>
        <h2>{LOCALIZE.emibTest.backgroundPage.title}</h2>
        <h3>{LOCALIZE.emibTest.backgroundPage.orgChart}</h3>
        <h3>{LOCALIZE.emibTest.backgroundPage.Scenarios}</h3>
      </div>
    );
  }
}

export default Background;
