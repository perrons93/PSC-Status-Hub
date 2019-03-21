import React, { Component } from "react";

const styles = {
  temp: {
    paddingTop: 100
  },
  loginBtn: {
    marginTop: 12
  }
};

class LoginPage extends Component {
  // state = {};

  // fetch = () => {
  //   fetch("http://localhost/api/login").then(response => console.log(response.status));
  // };

  render() {
    return (
      <div className="app">
        <div style={styles.temp}>
          <h1>Please Login</h1>
          <br />
          <form action="api/login" method="post">
            <input type="text" placeholder="Username" name="username" />
            <br />
            <input type="password" placeholder="Password" name="password" />
            <br />
            <input
              style={styles.loginBtn}
              className="btn btn-primary"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
