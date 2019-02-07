import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Status from "./Status";
import Home from "./Home";
import Experiment from "./Experiment";
import E_MIB from "./components/eMIB/E_MIB";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/experiment">Prototype</Link>
            <Link to="/status">Status</Link>
          </div>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/experiment" component={Experiment} />
          <Route path="/status" component={Status} />
          <Route path="/eMIB-Sample" component={E_MIB} />
        </div>
      </Router>
    </div>
  );
};

export default App;
