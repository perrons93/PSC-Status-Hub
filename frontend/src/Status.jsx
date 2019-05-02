import React, { Component } from "react";
import StatusCheck from "./components/status/StatusCheck";
import SystemCheck from "./components/status/SystemCheck";
import detectBrowser from "./helpers/detectBrowser";
import getIeVersion from "./helpers/getIeVersion";
import getScreenResolution from "./helpers/getScreenResolution";
import logo from "./images/logo.png";
import LOCALIZE from "./text_resources";
import ContentContainer from "./components/commons/ContentContainer";

const styles = {
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


const SCREEN_RESOLUTION = getScreenResolution();
const SCREEN_HEIGHT = SCREEN_RESOLUTION[0];
const SCREEN_WIDTH = SCREEN_RESOLUTION[1];

// This component is intended for internal use only and does not use styles or
// components of public facing CAT system.
class Status extends Component {
  /* Front end is always running successfully if this page loads so it will always be true */
  state = {
    oAuthStatus: false,
    oltfStatus: false,
  };

  
  checkOLTF = async () => {
    const test = await fetch("/api/oltf/", {
      method: "GET",
      headers,
      cache: "default"
    });
    const testJson = await test.json();
    if (testJson && testJson.status == 200) {
      this.setState({ oltfStatus: true });
    } else {
      this.setState({ oltfStatus: false });
    }
  };

  checkOAuth = async () => {
    const test = await fetch("/api/oauth/", {
      method: "GET",
      headers,
      cache: "default"
    });
    const testJson = await test.json();
    if (testJson && testJson.status == 200) {
      this.setState({ oAuthStatus: true });
    } else {
      this.setState({ oAuthStatus: false });
    }
  };

  checkStatus = async () => {
    this.checkOAuth();
    this.checkOLTF();
  };


  componentDidMount() {
    this.checkStatus();
    setInterval(this.checkStatus, 30000);
  }

  render() {
    const {
      oltfStatus,
      oAuthStatus,
    } = this.state;
    return (
      <ContentContainer>

        <div>
          <h3>{LOCALIZE.statusPage.serviceStatusTable.title}</h3>
          <div>
            <table className={"table"}>
              <thead>
                <tr>
                  <th scope="col">{LOCALIZE.statusPage.serviceStatusTable.headerLeft}</th>
                  <th scope="col">{LOCALIZE.statusPage.serviceStatusTable.headerRight}</th>
                </tr>
              </thead>
              <tbody>
                <StatusCheck
                  description={LOCALIZE.statusPage.serviceStatusTable.oauthDesc}
                  isPassing={oAuthStatus}
                />
                <StatusCheck
                  description={LOCALIZE.statusPage.serviceStatusTable.oltfDesc}
                  isPassing={oltfStatus}
                />
              </tbody>
            </table>
          </div>
        </div>
        <hr />
      </ContentContainer>
    );
  }
}

export default Status;
