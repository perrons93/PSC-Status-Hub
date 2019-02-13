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
      <div>
        <Translation updateLanguageOnPage={this.updateLanguage} />
        <div>
          <Router>
            <div>
              <div>
                <Link to="/">{LOCALIZE.mainTabs.homeTabTitle}</Link>
                <Link to="/experiment">{LOCALIZE.mainTabs.prototypeTabTitle}</Link>
                <Link to="/status">{LOCALIZE.mainTabs.statusTabTitle}</Link>
              </div>
              <hr />
              <Route exact path="/" component={Home} />
              <Route path="/experiment" component={Experiment} />
              <Route path="/status" component={Status} />
              <Route path="/emib-sample" component={Emib} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
