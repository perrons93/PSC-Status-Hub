import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Status from "./Status";
import Home from "./Home";
import Experiment from "./Experiment";
import Emib from "./components/eMIB/Emib";
import Translation, { LANGUAGES } from "./components/commons/Translation";
import LOCALIZE from "./text_resources";

class App extends Component {
  state = {
    curLanguage: LANGUAGES.english
  };

  updateLanguage = () => {
    if (this.state.curLanguage === LANGUAGES.english) {
      this.setState({ curLanguage: LANGUAGES.french });
    }

    if (this.state.curLanguage === LANGUAGES.french) {
      this.setState({ curLanguage: LANGUAGES.english });
    }
  };

  render() {
    return (
      <div>
        <Translation updateLanguageOnPage={this.updateLanguage} />
        <div className="app">
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
