import React from "react";
import LOCALIZE from "./text_resources";

const Experiment = () => {
  return (
    <div>
      <h2>{LOCALIZE.prototypePage.title}</h2>
      <p>{LOCALIZE.prototypePage.welcomeMsg}</p>
      <a href="/emib-sample">{LOCALIZE.prototypePage.startEmibSampleTest}</a>
    </div>
  );
};

export default Experiment;
