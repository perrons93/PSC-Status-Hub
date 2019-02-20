import React from "react";
import big_welcome_banner from "./images/big_welcome_banner.png";
import LOCALIZE from "./text_resources";

const Home = () => {
  return (
    <div className="app">
      <h2>{LOCALIZE.homePage.title}</h2>
      <p>{LOCALIZE.homePage.welcomeMsg}</p>
      <img src={big_welcome_banner} alt="big welcome banner" />
    </div>
  );
};

export default Home;
