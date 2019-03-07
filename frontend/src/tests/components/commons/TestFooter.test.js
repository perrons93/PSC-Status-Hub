import React from "react";
import { mount } from "enzyme";
import TestFooter from "../../../components/commons/TestFooter";
import { LANGUAGES } from "../../../components/commons/Translation";
import LOCALIZE from "../../../text_resources";

it("renders Submit Test in English", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = mount(<TestFooter />);
  const submitTest = (
    <button type="button" className="btn btn-primary">
      {LOCALIZE.commons.submitTestButton}
    </button>
  );
  expect(wrapper.contains(submitTest)).toEqual(true);
});

it("renders Submit Test in French", () => {
  LOCALIZE.setLanguage(LANGUAGES.french);
  const wrapper = mount(<TestFooter />);
  const submitTest = (
    <button type="button" className="btn btn-primary">
      {LOCALIZE.commons.submitTestButton}
    </button>
  );
  expect(wrapper.contains(submitTest)).toEqual(true);
});

it("renders Quit Test in English", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = mount(<TestFooter />);
  const submitTest = (
    <button type="button" className="btn btn-danger">
      {LOCALIZE.commons.exitTest}
    </button>
  );
  expect(wrapper.contains(submitTest)).toEqual(true);
});

it("renders Submit Test in French", () => {
  LOCALIZE.setLanguage(LANGUAGES.french);
  const wrapper = mount(<TestFooter />);
  const submitTest = (
    <button type="button" className="btn btn-danger">
      {LOCALIZE.commons.exitTest}
    </button>
  );
  expect(wrapper.contains(submitTest)).toEqual(true);
});
