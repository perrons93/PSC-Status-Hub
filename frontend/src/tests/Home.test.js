import React from "react";
import { shallow } from "enzyme";
import Home from "../Home";
import { LANGUAGES } from "../components/commons/Translation";
import LOCALIZE from "../text_resources";

it("renders Home Page Title in English", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = shallow(<Home />);
  const homePageTitle = <h2 id="home-page-paragraph">{LOCALIZE.homePage.welcomeMsg}</h2>;
  expect(wrapper.contains(homePageTitle)).toEqual(true);
});

it("renders Home Page Title in French", () => {
  LOCALIZE.setLanguage(LANGUAGES.french);
  const wrapper = shallow(<Home />);
  const homePageTitle = <h2 id="home-page-paragraph">{LOCALIZE.homePage.welcomeMsg}</h2>;
  expect(wrapper.contains(homePageTitle)).toEqual(true);
});
