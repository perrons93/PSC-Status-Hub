import React, { Component } from "react";
import LOCALIZE from "../../text_resources";

const styles = {
  temp: {
    paddingTop: 100
  }
};

class LoginPage extends Component {
  // state = {};

  render() {
    return (
      <div className="app">
        <div style={styles.temp}>
          <h1>Please Login</h1>
          <br />
          <form action="api/login" method="post">
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <input class="btn btn-primary" type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
