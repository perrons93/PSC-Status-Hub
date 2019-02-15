import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./css/lib/aurora.min.css";
import "./css/App.css";
import Status from "./Status";
import Home from "./Home";
import Experiment from "./Experiment";
import Emib from "./components/eMIB/Emib";
import Translation, { LANGUAGES } from "./components/commons/Translation";
import LOCALIZE from "./text_resources";
import psc_header from "./psc_header.png";

const PATH = {
  home: "/",
  experiment: "/experiment",
  status: "/status",
  emibSampleTest: "/emib-sample"
};

const isHomeActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.home;
};

const isExperimentActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  return pathname === PATH.experiment;
};

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
          <nav className="fixed-top bg-white navbar navbar-expand" role="banner">
            <div id="psc_image" className="pscHeader">
              <img src={psc_header} alt="psc_header" />
            </div>
            <div className="fixed-top nav nav-tabs">
              <ul className="mx-auto nav-site nav nav-tabs nav-item">
                <li className="bg-white">
                  <NavLink
                    isActive={isHomeActive}
                    className="nav-link"
                    activeClassName="selectedTab"
                    to="/"
                  >
                    {LOCALIZE.mainTabs.homeTabTitle}
                  </NavLink>
                </li>
                <li className="bg-white">
                  <NavLink
                    isActive={isExperimentActive}
                    className="nav-link"
                    activeClassName="selectedTab"
                    to="/experiment"
                  >
                    {LOCALIZE.mainTabs.prototypeTabTitle}
                  </NavLink>
                </li>
                <li className="bg-white">
                  <NavLink
                    isActive={isStatusActive}
                    className="nav-link"
                    activeClassName="selectedTab"
                    to="/status"
                  >
                    {LOCALIZE.mainTabs.statusTabTitle}
                  </NavLink>
                </li>
              </ul>
              <div id="translation_button" className="translationButton">
                <Translation updateLanguageOnPage={this.updateLanguage} />
              </div>
            </div>
            <br />
          </nav>
          <Route exact path={PATH.home} component={Home} />
          <Route path={PATH.experiment} component={Experiment} />
          <Route path={PATH.status} component={Status} />
          <Route path={PATH.emibSampleTest} component={Emib} />
        </div>
      </Router>
    );
  }
}

export default App;
