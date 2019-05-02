import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./css/lib/aurora.min.css";
import "./css/cat-theme.css";
import Status from "./Status";
import Home from "./Home";
import Prototype from "./Prototype";
import Emib from "./components/eMIB/Emib";
import Translation from "./components/commons/Translation";
import LOCALIZE from "./text_resources";
import psc_header from "./images/psc_header.png";

const PATH = {
  home: "/",
  status: "/",
};

const styles = {
  navBarFull: {
    paddingBottom: 105
  },
  navBarHidden: {
    paddingBottom: 50
  },
  tabs: {
    paddingTop: 68
  },
  pscImage: {
    position: "fixed",
    top: 20,
    left: 20
  },
  languageButton: {
    position: "fixed",
    right: 15,
    top: 15,
    left: "auto"
  }
};

//Check if the home page is selected
const isHomeActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.home;
};


//Check if the Status page is selected
const isStatusActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.status;
};

class App extends Component {
  static propTypes = {
    // Props from Redux
    currentLanguage: PropTypes.string,
    isTestActive: PropTypes.bool.isRequired
  };

  render() {
    const hideNavBar = this.props.isTestActive;
    return (
      <Router>
        <div>
          <header role="heading" aria-level="1">
            <nav
              aria-label={LOCALIZE.ariaLabel.mainMenu}
              style={hideNavBar ? styles.navBarHidden : styles.navBarFull}
              className="fixed-top bg-white navbar navbar-expand"
              role="dialog"
            >
              <div style={styles.pscImage} id="psc-image">
                <img style={{ width: 390 }} src={psc_header} alt={LOCALIZE.commons.psc} />
              </div>
              {!hideNavBar && (
                <div style={styles.tabs} className="fixed-top nav nav-tabs">
                  <ul
                    id="navigation-tabs"
                    className="mx-auto nav-site nav nav-tabs nav-item"
                    role="menubar"
                  >
                    <li className="bg-white" role="menuitem">
                      <NavLink
                        aria-current="page"
                        isActive={isStatusActive}
                        className="nav-link"
                        to={PATH.status}
                      >
                        {LOCALIZE.mainTabs.statusTabTitle}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
              <div
                aria-label={LOCALIZE.ariaLabel.languageToggleBtn}
                className="fixed-top"
                style={styles.languageButton}
              >
                <Translation />
              </div>
            </nav>
          </header>
          <Route path={PATH.status} component={Status} />
        </div>
      </Router>
    );
  }
}
export { PATH };

const mapStateToProps = (state, ownProps) => {
  return {
    currentLanguage: state.localize.language,
    isTestActive: state.testStatus.isTestActive
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
