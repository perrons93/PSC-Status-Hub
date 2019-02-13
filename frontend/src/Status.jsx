import React, { Component } from "react";
import { Jumbotron, Button, Panel } from "react-bootstrap";
import StatusCheck from "./components/status/StatusCheck";
import SystemCheck from "./components/status/SystemCheck";
import detectBrowser from "./helpers/detectBrowser";
import getIeVersion from "./helpers/getIeVersion";
import getScreenResolution from "./helpers/getScreenResolution";
import logo from "./logo.png";
import LOCALIZE from "./text_resources";

const styles = {
  container: {
    width: "50%",
    margin: "0 auto"
  },
  panel: {
    padding: 0
  },
  table: {
    width: "100%"
  },
  td: {
    border: "0.5px solid #dddddd"
  },
  logo: {
    margin: 20,
    width: 30,
    height: 30
  }
};

const headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json"
});

// Valid browser other than IE
const VALID_BROWSERS = ["chrome", "firefox"];
const IE_STRING = "IE";

const BROWSER_STRING = detectBrowser();
const IE_VERSION = getIeVersion();

const SCREEN_RESOLUTION = getScreenResolution();
const SCREEN_HEIGHT = SCREEN_RESOLUTION[0];
const SCREEN_WIDTH = SCREEN_RESOLUTION[1];

// This component is intended for internal use only and does not use styles or
// components of public facing CAT system.
class Status extends Component {
  /* Front end is always running successfully if this page loads so it will always be true */
  state = {
    backendStatus: false,
    databaseStatus: false,
    frontendStatus: true,
    javascriptStatus: false,
    browserStatus: false,
    screenResolutionStatus: false
  };

  componentWillMount() {
    this.checkBackend();
    this.checkDatabase();
    this.checkJavascriptEnabled();
    this.validateBrowser();
    this.checkResolution();
  }

  checkBackend = async () => {
    const test = await fetch("http://localhost:80/api/", {
      method: "GET",
      headers,
      cache: "default"
    });
    const testJson = await test.json();
    if (testJson && testJson.status) {
      this.setState({ backendStatus: true });
    }
  };

  checkDatabase = async () => {
    const test = await fetch("http://localhost:80/database_check/", {
      method: "GET",
      headers,
      cache: "default"
    });
    const testJson = await test.json();
    if (testJson) {
      this.setState({ databaseStatus: true });
    }
  };

  // You must have JavaScript enabled to be able to run the app at all
  checkJavascriptEnabled = () => {
    if (<script type="javascript" />) {
      this.setState({ javascriptStatus: true });
    }
  };

  // Validates that the browser is IE 9+, Chrome or Firefox
  // TODO(fnormand): test with IE 8 and make sure it fails
  validateBrowser = () => {
    if (BROWSER_STRING === IE_STRING) {
      if (IE_VERSION >= 9) {
        this.setState({ browserStatus: true });
      }
    } else if (VALID_BROWSERS.indexOf(BROWSER_STRING) >= 0) {
      this.setState({ browserStatus: true });
    }
  };

  // Validates that screen resolution is at least 800 x 600
  checkResolution = () => {
    if (SCREEN_WIDTH >= 800 && SCREEN_HEIGHT >= 600) {
      this.setState({ screenResolutionStatus: true });
    }
  };

  render() {
    const {
      frontendStatus,
      backendStatus,
      databaseStatus,
      javascriptStatus,
      browserStatus,
      screenResolutionStatus
    } = this.state;
    return (
      <div style={styles.container}>
        <div className={"jumbotron"}>
          <h1>{LOCALIZE.statusPage.title}</h1>
          <p>{LOCALIZE.statusPage.welcomeMsg}</p>
          <hr />
          <p>
            <a href="https://github.com/code-for-canada/project-thundercat">
              <Button bsStyle="primary">{LOCALIZE.statusPage.gitHubRepoBtn}</Button>
            </a>
            <img src={logo} className="App-logo" style={styles.logo} alt="logo" />
          </p>
        </div>

        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">
              {LOCALIZE.statusPage.serviceStatusTable.title}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <StatusCheck
              description={LOCALIZE.statusPage.serviceStatusTable.frontendDesc}
              isPassing={frontendStatus}
            />
            <StatusCheck
              description={LOCALIZE.statusPage.serviceStatusTable.backendDesc}
              isPassing={backendStatus}
            />
            <StatusCheck
              description={LOCALIZE.statusPage.serviceStatusTable.databaseDesc}
              isPassing={databaseStatus}
            />
          </Panel.Body>
        </Panel>
        <hr />
        <Panel style={styles.panel}>
          <Panel.Heading>
            <Panel.Title componentClass="h3">
              {LOCALIZE.statusPage.systemStatusTable.title}
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <table style={styles.table}>
              <tbody>
                <tr>
                  {javascriptStatus === true && (
                    <td style={styles.td}>
                      <SystemCheck
                        description={LOCALIZE.statusPage.systemStatusTable.javaScript}
                        isPassing={javascriptStatus}
                        currentSettingsDetails={`(${LOCALIZE.commons.enabled})`}
                      />
                    </td>
                  )}
                  {javascriptStatus === false && (
                    <td style={styles.td}>
                      <SystemCheck
                        description={LOCALIZE.statusPage.systemStatusTable.javaScript}
                        isPassing={javascriptStatus}
                        currentSettingsDetails={`(${LOCALIZE.commons.disabled})`}
                      />
                    </td>
                  )}
                </tr>
                <tr>
                  {BROWSER_STRING === IE_STRING && (
                    <td style={styles.td}>
                      <SystemCheck
                        description={LOCALIZE.statusPage.systemStatusTable.browsers}
                        isPassing={browserStatus}
                        currentSettingsDetails={`(${BROWSER_STRING} v${IE_VERSION})`}
                      />
                    </td>
                  )}
                  {BROWSER_STRING !== IE_STRING && (
                    <td style={styles.td}>
                      <SystemCheck
                        description={LOCALIZE.statusPage.systemStatusTable.browsers}
                        isPassing={browserStatus}
                        currentSettingsDetails={`(${BROWSER_STRING})`}
                      />
                    </td>
                  )}
                </tr>
                <tr>
                  <td style={styles.td}>
                    <SystemCheck
                      description={LOCALIZE.statusPage.systemStatusTable.screenResolution}
                      isPassing={screenResolutionStatus}
                      currentSettingsDetails={`(${SCREEN_WIDTH} X ${SCREEN_HEIGHT})`}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Status;
