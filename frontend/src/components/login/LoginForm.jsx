import React, { Component } from "react";

const styles = {
  loginContent: {
    padding: "12px 32px 0 32px"
  },
  inputTitles: {
    padding: "12px 0 6px 0",
    fontWeight: "bold"
  },
  inputs: {
    width: "100%",
    padding: "3px 6px 3px 6px",
    border: "1px solid #00565E",
    borderRadius: 4
  },
  loginBtn: {
    width: 150,
    display: "block",
    margin: "24px auto"
  },
  validationError: {
    color: "red",
    paddingTop: 8
  }
};

class LoginPage extends Component {
  state = {
    // token: "",
    isLoaded: false,
    validCredentials: true,
    validRequest: true
  };

  handleLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const pageStatus = {
      badRequest: 400,
      invalidCredentials: 404
    };

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
          this.setState({ validCredentials: true, validRequest: true });
          return res.json();
        } else {
          if (res.status === pageStatus.badRequest) {
            this.setState({ validRequest: false });
            console.log("Bad Request");
          } else if (res.status === pageStatus.invalidCredentials) {
            this.setState({ validCredentials: false });
            console.log("Invalid Credentials");
          }
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
    this.setState({ validCredentials: true, validRequest: true });
    event.preventDefault();
  };

  render() {
    // console.log(this.state.token);
    // console.log(this.state.isLoaded);
    return (
      <div>
        {!this.state.isLoaded && (
          <div>
            <div style={styles.loginContent}>
              <h3>Login</h3>
              <span>
                An account is required to proceed further. To log in, enter your credentials below
              </span>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <div style={styles.inputTitles}>
                    <span>Email Address:</span>
                  </div>
                  <input type="text" placeholder="Username" id="username" style={styles.inputs} />
                  <br />
                </div>
                <div>
                  <div style={styles.inputTitles}>
                    <span>Password:</span>
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    style={styles.inputs}
                  />
                </div>
                {!this.state.validCredentials && (
                  <div style={styles.validationError}>Invalid Credentials</div>
                )}
                {!this.state.validRequest && (
                  <div style={styles.validationError}>
                    Please provide both username and password
                  </div>
                )}
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
      </div>
    );
  }
}

export default LoginPage;
