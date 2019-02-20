import React from "react";
import big_welcome_banner from "./images/big_welcome_banner.png";
import LOCALIZE from "./text_resources";

const Home = () => {
  return (
    <div className="app">
      <h2 id="home-page-paragraph">{LOCALIZE.homePage.welcomeMsg}</h2>
      <img src={big_welcome_banner} alt="big welcome banner" />
    </div>
  );
};

export default Home;
