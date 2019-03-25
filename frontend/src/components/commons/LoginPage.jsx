import React, { Component } from "react";
import Emib from "../eMIB/Emib";

const styles = {
  temp: {
    paddingTop: 100
  },
  loginBtn: {
    marginTop: 12
  }
};

class LoginPage extends Component {
  state = {
    // token: "",
    isLoaded: false
  };

  handleLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username);
    console.log(password);

    fetch("http://localhost/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then(json => {
        this.setState({
          isLoaded: true
          // token: json
        });
      })
      .catch(error => console.error(error));
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    // console.log(this.state.token);
    console.log(this.state.isLoaded);
    return (
      <div>
        {!this.state.isLoaded && (
          <div className="app">
            <div style={styles.temp}>
              <h1>Please Login</h1>
              <br />
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Username" id="username" />
                <br />
                <input type="password" placeholder="Password" id="password" />
                <br />
                <input
                  style={styles.loginBtn}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                  onClick={this.handleLogin}
                />
              </form>
            </div>
          </div>
        )}
        {this.state.isLoaded && (
          <div>
            <div>
              <Emib />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LoginPage;
