import React from "react";
import logo from "./logo.png";
import LOCALIZE from "./text_resources";

const Home = () => {
  return (
    <div>
      <h2>{LOCALIZE.homePage.title}</h2>
      <p>{LOCALIZE.homePage.welcomeMsg}</p>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Home;
