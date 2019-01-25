import React, { Component } from 'react';
import { Jumbotron, Button, Panel } from 'react-bootstrap';
import StatusCheck from './components/status/StatusCheck.jsx';
import SystemCheck from './components/status/SystemCheck.jsx';
import detectBrowser from './helpers/DetectBrowser';
import getIeVersion from './helpers/GetIeVersion';
import getScreenResolution from './helpers/GetScreenResolution';

const styles = {
  container: {
    width: '50%',
    margin: '0 auto',
  },
  panel: {
    padding: '0px',
  },
  table: {
    width: '100%',
  },
  td: {
    border: '0.5px solid #dddddd',
  },
};

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

// Valid browser other than IE
const validBrowser = ['chrome', 'firefox'];
const internetExplorerString = 'IE';

const browserString = detectBrowser();
const ieVersion = getIeVersion();

const screenResolution = getScreenResolution();
const screenHeight = screenResolution[0];
const screenWidth = screenResolution[1];

// This component is intended for internal use only and does not use styles or
// components of public facing CAT system.
class Status extends Component {
  componentWillMount() {
    this.checkBackend();
    this.checkDatabase();
    this.checkJavascriptEnabled();
    this.validateBrowser();
    this.checkResolution();
  }

  /* Front end is always running successfully if this page loads so it will always be true */
  state = {
    backendStatus: false,
    databaseStatus: false,
    frontendStatus: true,
    javascriptStatus: false,
    browserStatus: false,
    screenResolutionStatus: false,
  }

  checkBackend = async () => {
    const test = await fetch('http://localhost:80/api/', {
      method: 'GET',
      headers,
      cache: 'default',
    });
    const testJson = await test.json();
    if (testJson && testJson.status) {
      this.setState({ backendStatus: true });
    }
  }

  checkDatabase = () => {
    // TODO(caleybrock): expose an endpoint to check database.
    this.setState({ databaseStatus: false });
  }

  // You must have JavaScript enabled to be able to run the app at all
  checkJavascriptEnabled = () => {
    if (<script type="javascript"></script>) {
      this.setState({ javascriptStatus: true });
    }
  }

  // Validates that the browser is IE 9+, Chrome or Firefox
  // TODO(fnormand): test with IE 8 and make sure it fails
  validateBrowser = () => {
    if (browserString === internetExplorerString) {
      if (ieVersion >= 9) {
        this.setState({ browserStatus: true });
      }
    } else if (validBrowser.indexOf(browserString) >= 0) {
      this.setState({ browserStatus: true });
    }
  }

  // Validates that screen resolution is at least 800 x 600
  checkResolution = () => {
    if (screenWidth >= 800 && screenHeight >= 600) {
      this.setState({ screenResolutionStatus: true });
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <Jumbotron>
          <h1>CAT Health</h1>
          <p>
            Internal status page to quickly determine the status / health
            of the Compotency Assessment Tool.
          </p>
          <p>
            <a href="https://github.com/code-for-canada/project-thundercat">
              <Button bsStyle="primary">GitHub Repository</Button>
            </a>
          </p>
        </Jumbotron>

        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Service Status</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <StatusCheck
              description={'Front end application built and serving successfully'}
              isPassing={this.state.frontendStatus}
            />
            <StatusCheck
              description={'Back end application completing API requests successfully'}
              isPassing={this.state.backendStatus}
            />
            <StatusCheck
              description={'Database check not currently setup'}
              isPassing={this.state.databaseStatus}
            />
          </Panel.Body>
        </Panel>
        <Panel style={styles.panel}>
          <Panel.Heading>
            <Panel.Title componentClass="h3">System Status</Panel.Title>
          </Panel.Heading>
          <Panel.Body style={styles.panel}>
            <table style={styles.table}>
              <tbody>
                <tr>
                  {this.state.javascriptStatus === true
                    && <td style={styles.td}>
                      <SystemCheck
                        description={'JavaScript'}
                        isPassing={this.state.javascriptStatus}
                        javaScriptEnabled={'(Enabled)'}
                      />
                    </td>}
                  {this.state.javascriptStatus === false
                     && <td style={styles.td}>
                       <SystemCheck
                         description={'JavaScript'}
                         isPassing={this.state.javascriptStatus}
                         javaScriptEnabled={'(Disabled)'}
                       />
                     </td>}
                </tr>
                <tr>
                  {browserString === internetExplorerString
                    && <td style={styles.td}>
                      <SystemCheck
                        description={'IE 9+, Chrome, Firefox'}
                        isPassing={this.state.browserStatus}
                        browserDetected={`(${browserString} v${ieVersion})`}
                      />
                    </td>}
                  {browserString !== internetExplorerString
                    && <td style={styles.td}>
                      <SystemCheck
                        description={'IE 9+, Chrome, Firefox'}
                        isPassing={this.state.browserStatus}
                        browserDetected={`(${browserString})`}
                      />
                    </td>}
                </tr>
                <tr>
                  <td style={styles.td}>
                    <SystemCheck
                      description={'Screen resolution minimum of 800 x 600'} 
                      isPassing={this.state.screenResolutionStatus} 
                      screenResolutionDetected={`(${screenWidth} X ${screenHeight})`}
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
