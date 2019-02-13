import React from "react";
import { shallow } from "enzyme";
import Background from "../components/eMIB/Background";
import { LANGUAGES } from "../components/commons/Translation";
import LOCALIZE from "../text_resources";

it("renders Background Page Title in English", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = shallow(<Background />);
  const pageTitle = <h2>{LOCALIZE.emibTest.backgroundPage.title}</h2>;
  expect(wrapper.contains(pageTitle)).toEqual(true);
});

it("renders Background Page Title in French", () => {
  LOCALIZE.setLanguage(LANGUAGES.french);
  const wrapper = shallow(<Background />);
  const pageTitle = <h2>{LOCALIZE.emibTest.backgroundPage.title}</h2>;
  expect(wrapper.contains(pageTitle)).toEqual(true);
});
