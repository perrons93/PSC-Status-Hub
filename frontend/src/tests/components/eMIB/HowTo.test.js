import React from "react";
import { shallow } from "enzyme";
import HowTo from "../../../components/eMIB/HowTo";
import { LANGUAGES } from "../../../components/commons/Translation";
import LOCALIZE from "../../../text_resources";

it("renders HowTo Page Title in English", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = shallow(<HowTo />);
  const howToPageTitle = <h2>{LOCALIZE.emibTest.howToPage.title}</h2>;
  expect(wrapper.contains(howToPageTitle)).toEqual(true);
});

it("renders HowTo Page Title in French", () => {
  LOCALIZE.setLanguage(LANGUAGES.french);
  const wrapper = shallow(<HowTo />);
  const howToPageTitle = <h2>{LOCALIZE.emibTest.howToPage.title}</h2>;
  expect(wrapper.contains(howToPageTitle)).toEqual(true);
});
