import React, { Component } from "react";
import LOCALIZE from "../../text_resources";
import validateName, { validateEmail, validatePassword } from "../../helpers/regexValidator";
import "../../css/create-account-form.css";

const styles = {
  createAccountContent: {
    padding: "12px 32px 0 32px"
  },
  inputTitle: {
    padding: "12px 0 6px 0",
    fontWeight: "bold"
  },
  inputs: {
    width: "100%",
    padding: "3px 6px 3px 6px",
    borderRadius: 4
  },
  inputForNames: {
    width: 190,
    padding: "3px 6px 3px 6px",
    borderRadius: 4
  },
  iconForNames: {
    color: "#278400",
    position: "absolute",
    margin: "8px 0 0 170px"
  },
  iconForOtherFields: {
    color: "#278400",
    position: "absolute",
    margin: "8px 0 0 370px"
  },
  loginBtn: {
    width: 150,
    display: "block",
    margin: "24px auto"
  },
  validationError: {
    color: "red",
    marginTop: 6
  }
};

let SUBMIT_BTN_DISABLED;

class CreateAccountForm extends Component {
  state = {
    isFirstLoad: true,
    isValidFirstName: false,
    isValidLastName: false,
    isValidEmail: false,
    isValidPassword: false,
    isFirstPasswordLoad: true,
    isValidPasswordConfirmation: false
  };

  firstNameValidation = () => {
    const firstName = document.getElementById("first-name").value;
    const isValide = validateName(firstName);
    this.setState({ isFirstLoad: false });
    if (isValide) {
      this.setState({ isValidFirstName: true });
    } else {
      this.setState({ isValidFirstName: false });
    }
  };

  lastNameValidation = () => {
    const lastName = document.getElementById("last-name").value;
    const isValide = validateName(lastName);
    this.setState({ isFirstLoad: false });
    if (isValide) {
      this.setState({ isValidLastName: true });
    } else {
      this.setState({ isValidLastName: false });
    }
  };

  emailValidation = () => {
    const email = document.getElementById("email").value;
    const isValide = validateEmail(email);
    this.setState({ isFirstLoad: false });
    if (isValide) {
      this.setState({ isValidEmail: true });
    } else {
      this.setState({ isValidEmail: false });
    }
  };

  passwordValidation = () => {
    this.setState({ isFirstPasswordLoad: false, isFirstLoad: false });
    const password = document.getElementById("password").value;
    const isValide = validatePassword(password);
    const passwordConfirmation = document.getElementById("password-confirmation").value;
    //Password valid?
    if (isValide) {
      this.setState({ isValidPassword: true });
    } else {
      this.setState({ isValidPassword: false });
    }
    //Password confirmation is the same?
    if (password === passwordConfirmation) {
      this.setState({
        isValidPasswordConfirmation: true
      });
    } else {
      this.setState({
        isValidPasswordConfirmation: false
      });
    }
  };

  areAllFieldsValid = () => {
    const {
      isValidFirstName,
      isValidLastName,
      isValidEmail,
      isValidPassword,
      isValidPasswordConfirmation
    } = this.state;

    if (
      isValidFirstName &&
      isValidLastName &&
      isValidEmail &&
      isValidPassword &&
      isValidPasswordConfirmation
    ) {
      //did not use state because of maximum update depth exeeded error
      SUBMIT_BTN_DISABLED = false;
    } else {
      SUBMIT_BTN_DISABLED = true;
    }
  };

  render() {
    const {
      isFirstLoad,
      isValidFirstName,
      isValidLastName,
      isValidEmail,
      isValidPassword,
      isFirstPasswordLoad,
      isValidPasswordConfirmation
    } = this.state;

    const validFieldClass = "valid-field";
    let invalidFieldClass = "";

    //if this is the first load of create account form, display all fields as 'valid-field'
    if (isFirstLoad) {
      invalidFieldClass = "valid-field";
    } else {
      invalidFieldClass = "invalid-field";
    }

    //check if all fields are valid
    this.areAllFieldsValid();
    return (
      <div>
        <div>
          <div style={styles.createAccountContent}>
            <h3>{LOCALIZE.authentication.createAccount.content.title}</h3>
            <span>{LOCALIZE.authentication.createAccount.content.description}</span>
            <form>
              <div className="names-grid">
                <div className="names-grid-first-name">
                  <div style={styles.inputTitle}>
                    <span>
                      {LOCALIZE.authentication.createAccount.content.inputs.firstNameTitle}
                    </span>
                  </div>
                  {isValidFirstName && (
                    <span className="far fa-check-circle" style={styles.iconForNames} />
                  )}

                  <input
                    aria-label={LOCALIZE.authentication.createAccount.content.inputs.firstNameTitle}
                    className={isValidFirstName ? validFieldClass : invalidFieldClass}
                    type="text"
                    placeholder={
                      LOCALIZE.authentication.createAccount.content.inputs.firstNamePlaceholder
                    }
                    id="first-name"
                    style={styles.inputForNames}
                    onChange={this.firstNameValidation}
                  />
                </div>
                <div className="names-grid-last-name">
                  <div style={styles.inputTitle}>
                    <span style={styles.inputTitle}>
                      {LOCALIZE.authentication.createAccount.content.inputs.lastNameTitle}
                    </span>
                  </div>
                  {isValidLastName && (
                    <span className="far fa-check-circle" style={styles.iconForNames} />
                  )}
                  <input
                    aria-label={LOCALIZE.authentication.createAccount.content.inputs.lastNameTitle}
                    className={isValidLastName ? validFieldClass : invalidFieldClass}
                    type="text"
                    placeholder={
                      LOCALIZE.authentication.createAccount.content.inputs.lastNamePlaceholder
                    }
                    id="last-name"
                    style={styles.inputForNames}
                    onChange={this.lastNameValidation}
                  />
                </div>
              </div>
              <div>
                <div style={styles.inputTitle}>
                  <span>{LOCALIZE.authentication.createAccount.content.inputs.emailTitle}</span>
                </div>
                {isValidEmail && (
                  <span className="far fa-check-circle" style={styles.iconForOtherFields} />
                )}
                <input
                  aria-label={LOCALIZE.authentication.createAccount.content.inputs.emailTitle}
                  className={isValidEmail ? validFieldClass : invalidFieldClass}
                  type="text"
                  placeholder={
                    LOCALIZE.authentication.createAccount.content.inputs.emailPlaceholder
                  }
                  id="email"
                  style={styles.inputs}
                  onChange={this.emailValidation}
                />
              </div>
              <div>
                <div style={styles.inputTitle}>
                  <span>{LOCALIZE.authentication.createAccount.content.inputs.passwordTitle}</span>
                </div>
                {isValidPassword && (
                  <span className="far fa-check-circle" style={styles.iconForOtherFields} />
                )}
                <input
                  aria-label={LOCALIZE.authentication.createAccount.content.inputs.passwordTitle}
                  className={isValidPassword ? validFieldClass : invalidFieldClass}
                  type="password"
                  placeholder={
                    LOCALIZE.authentication.createAccount.content.inputs.passwordPlaceholder
                  }
                  id="password"
                  style={styles.inputs}
                  onChange={this.passwordValidation}
                />
                {!isValidPassword && !isFirstPasswordLoad && (
                  <div>
                    <p style={styles.validationError}>
                      {
                        LOCALIZE.authentication.createAccount.content.inputs.passwordErrors
                          .description
                      }
                    </p>
                    <ul style={styles.validationError}>
                      <li>
                        {
                          LOCALIZE.authentication.createAccount.content.inputs.passwordErrors
                            .upperCase
                        }
                      </li>
                      <li>
                        {
                          LOCALIZE.authentication.createAccount.content.inputs.passwordErrors
                            .lowerCase
                        }
                      </li>
                      <li>
                        {LOCALIZE.authentication.createAccount.content.inputs.passwordErrors.digit}
                      </li>
                      <li>
                        {
                          LOCALIZE.authentication.createAccount.content.inputs.passwordErrors
                            .specialCharacter
                        }
                      </li>
                      <li>
                        {LOCALIZE.authentication.createAccount.content.inputs.passwordErrors.length}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div>
                <div style={styles.inputTitle}>
                  <span>
                    {LOCALIZE.authentication.createAccount.content.inputs.passwordConfirmationTitle}
                  </span>
                </div>
                {isValidPasswordConfirmation && (
                  <span className="far fa-check-circle" style={styles.iconForOtherFields} />
                )}
                <input
                  aria-label={
                    LOCALIZE.authentication.createAccount.content.inputs.passwordConfirmationTitle
                  }
                  className={isValidPasswordConfirmation ? validFieldClass : invalidFieldClass}
                  type="password"
                  placeholder={
                    LOCALIZE.authentication.createAccount.content.inputs
                      .passwordConfirmationPlaceholder
                  }
                  id="password-confirmation"
                  style={styles.inputs}
                  onChange={this.passwordValidation}
                />
                {!isValidPasswordConfirmation && !isFirstPasswordLoad && (
                  <p style={styles.validationError}>
                    {LOCALIZE.authentication.createAccount.content.inputs.passwordConfirmationError}
                  </p>
                )}
              </div>
              <button
                disabled={SUBMIT_BTN_DISABLED}
                style={styles.loginBtn}
                className="btn btn-primary"
                type="submit"
              >
                {LOCALIZE.authentication.createAccount.button}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccountForm;
