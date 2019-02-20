import React from "react";
import logo from "./images/logo.png";
import LOCALIZE from "./text_resources";

const Home = () => {
  return (
    <div className="app">
      <h2>{LOCALIZE.homePage.title}</h2>
      <p>{LOCALIZE.homePage.welcomeMsg}</p>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Home;
