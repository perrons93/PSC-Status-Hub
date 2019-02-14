import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/lib/aurora.min.css";
import "./css/App.css";
import Status from "./Status";
import Home from "./Home";
import Experiment from "./Experiment";
import Emib from "./components/eMIB/Emib";
import Translation, { LANGUAGES } from "./components/commons/Translation";
import LOCALIZE from "./text_resources";
import psc_header from "./psc_header.png";

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
      <header className="fixed-top bg-white" role="banner">
        <div>
          <div className="pscHeader">
            <img src={psc_header} alt="psc_header" />
          </div>
          <nav
            aria-label="Main Navigation"
            className="main-nav navbar navbar-expand bg-white"
            role="navigation"
          >
            <div className="fixed-top" role="banner">
              <div className="translationButton">
                <Translation updateLanguageOnPage={this.updateLanguage} />
              </div>
              <Router>
                <div>
                  <div className="mx-auto nav-site scroll nav nav-tabs">
                    <ul className="mx-auto nav-site scroll nav nav-tabs">
                      <li className="nav-item bg-white">
                        <Link className="nav-link active-header-tab" to="/">
                          {LOCALIZE.mainTabs.homeTabTitle}
                        </Link>
                      </li>
                      <li className="nav-item bg-white">
                        <Link className="nav-link active-header-tab" to="/experiment">
                          {LOCALIZE.mainTabs.prototypeTabTitle}
                        </Link>
                      </li>
                      <li className="nav-item bg-white">
                        <Link className="nav-link active-header-tab" to="/status">
                          {LOCALIZE.mainTabs.statusTabTitle}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <br />
                  <Route exact path="/" component={Home} />
                  <Route path="/experiment" component={Experiment} />
                  <Route path="/status" component={Status} />
                  <Route path="/emib-sample" component={Emib} />
                </div>
              </Router>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default App;
