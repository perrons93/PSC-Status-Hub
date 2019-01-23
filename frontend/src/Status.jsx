import React, { Component } from 'react';
import { Jumbotron, Button, Panel } from 'react-bootstrap';
import StatusCheck from './components/status/StatusCheck.jsx';

const styles = {
  container: {
    width: '50%',
    margin: '0 auto',
  },
};

const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

// This component is intended for internal use only and does not use styles or
// components of public facing CAT system.
class Status extends Component {
  componentWillMount() {
    this.checkBackend();
    this.checkDatabase();
  }

  /* Front end is always running successfully if this page loads so it will always be true */
  state = {
    backendStatus: false,
    databaseStatus: false,
    frontendStatus: true,
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
      </div>
    );
  }
}

export default Status;
