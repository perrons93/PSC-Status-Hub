import React, { Component } from "react";
import TabNavigation from "../commons/TabNavigation";
import LoginPage from "./LoginForm";

const customStyles = {
  container: {
    width: 500,
    margin: "0px auto",
    paddingTop: 24,
    paddingRight: 20,
    paddingLeft: 20
  }
};

class LoginTabs extends Component {
  render() {
    const TABS = [
      {
        id: 0,
        tabName: "LOG IN",
        body: <LoginPage />
      },
      {
        id: 1,
        tabName: "CREATE AN ACCOUNT",
        body: "Coming Soon!"
      }
    ];
    return (
      <div style={customStyles.container}>
        <TabNavigation
          tabSpecs={TABS}
          currentTab={0}
          menuName="Login Menu"
          style={{
            height: "100%",
            backgroundColor: "white",
            borderWidth: "1px 1px 1px 1px",
            borderStyle: "solid",
            borderColor: "#00565e",
            borderTopColor: "white"
          }}
        />
      </div>
    );
  }
}

export default LoginTabs;
