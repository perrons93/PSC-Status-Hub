import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./css/lib/aurora.min.css";
import "./css/App.css";
import Status from "./Status";
import Home from "./Home";
import Prototype from "./Prototype";
import Emib from "./components/eMIB/Emib";
import Translation, { LANGUAGES } from "./components/commons/Translation";
import LOCALIZE from "./text_resources";
import psc_header from "./psc_header.png";

const PATH = {
  home: "/",
  prototype: "/prototype",
  status: "/status",
  emibSampleTest: "/emib-sample"
};

const styles = {
  navBar: {
    paddingBottom: 15
  }
};

//Check if the home page is selected
const isHomeActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.home;
};

//Check if the Prototype page is selected even when you start the eMIB Sample Test
const isPrototypeActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  if (pathname === PATH.prototype || pathname === PATH.emibSampleTest) {
    return pathname === PATH.prototype || pathname === PATH.emibSampleTest;
  }
};

//Check if the Status page is selected
const isStatusActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.status;
};

class App extends Component {
  state = {
    currentLanguage: LANGUAGES.english
  };

  updateLanguage = () => {
    if (this.state.currentLanguage === LANGUAGES.english) {
      this.setState({ currentLanguage: LANGUAGES.french });
    }

    if (this.state.currentLanguage === LANGUAGES.french) {
      this.setState({ currentLanguage: LANGUAGES.english });
    }
  };

  render() {
    return (
      <Router>
        <div>
          <nav
            style={styles.navBar}
            className="fixed-top bg-white navbar navbar-expand"
            role="banner"
          >
            <div id="psc-image">
              <img src={psc_header} alt={LOCALIZE.commons.psc} />
            </div>
            <div className="fixed-top nav nav-tabs">
              <ul id="navigation-tabs" className="mx-auto nav-site nav nav-tabs nav-item">
                <li className="bg-white">
                  <NavLink isActive={isHomeActive} className="nav-link" to={PATH.home}>
                    {LOCALIZE.mainTabs.homeTabTitle}
                  </NavLink>
                </li>
                <li className="bg-white">
                  <NavLink isActive={isPrototypeActive} className="nav-link" to={PATH.prototype}>
                    {LOCALIZE.mainTabs.prototypeTabTitle}
                  </NavLink>
                </li>
                <li className="bg-white">
                  <NavLink isActive={isStatusActive} className="nav-link" to={PATH.status}>
                    {LOCALIZE.mainTabs.statusTabTitle}
                  </NavLink>
                </li>
              </ul>
              <div id="translation-button" className="translation-button">
                <Translation updateLanguageOnPage={this.updateLanguage} />
              </div>
            </div>
            <br />
          </nav>
          <Route exact path={PATH.home} component={Home} />
          <Route path={PATH.prototype} component={Prototype} />
          <Route path={PATH.status} component={Status} />
          <Route path={PATH.emibSampleTest} component={Emib} />
        </div>
      </Router>
    );
  }
}

export default App;
export { PATH };
