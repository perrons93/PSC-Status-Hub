import React from "react";
import { shallow } from "enzyme";
import Experiment from "../Experiment";
import { LANGUAGES } from "../components/commons/Translation";
import LOCALIZE from "../text_resources";

it("renders initial message in English", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = shallow(<Experiment />);
  const initialMessage = <p>{LOCALIZE.prototypePage.welcomeMsg}</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders initial message in French", () => {
  LOCALIZE.setLanguage(LANGUAGES.french);
  const wrapper = shallow(<Experiment />);
  const initialMessage = <p>{LOCALIZE.prototypePage.welcomeMsg}</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
