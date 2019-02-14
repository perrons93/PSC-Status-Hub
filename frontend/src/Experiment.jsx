import React from "react";
import LOCALIZE from "./text_resources";

const Experiment = () => {
  return (
    <div className="app">
      <h2>{LOCALIZE.prototypePage.title}</h2>
      <p>{LOCALIZE.prototypePage.welcomeMsg}</p>

      <form method="get" action="/emib-sample">
        <button type="submit" className="btn btn-primary">
          {LOCALIZE.prototypePage.startEmibSampleTest}
        </button>
      </form>
    </div>
  );
};

export default Experiment;
