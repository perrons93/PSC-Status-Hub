import React from "react";
import big_welcome_banner from "./images/big_welcome_banner.png";
import LOCALIZE from "./text_resources";
import ContentContainer from "./components/commons/ContentContainer";

const Home = () => {
  return (
    <div className="app">
      <img src={big_welcome_banner} alt={LOCALIZE.homePage.welcomeMsg} />
      <ContentContainer>
        <h1 id="home-page-paragraph">{LOCALIZE.homePage.title}</h1>
      </ContentContainer>
    </div>
  );
};

export default Home;
