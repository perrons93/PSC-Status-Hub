import React from "react";
import { mount } from "enzyme";
import Emib, { PAGES } from "../../../components/eMIB/Emib";
import HowTo from "../../../components/eMIB/HowTo";
import Background from "../../../components/eMIB/Background";
import Confirmation from "../../../components/eMIB/Confirmation";
import { LANGUAGES } from "../../../components/commons/Translation";
import LOCALIZE from "../../../text_resources";

it("renders howToPage page", () => {
  const wrapper = mount(<Emib />);
  const emibTitle = <h1 className="progress-pane">{LOCALIZE.emibTest.homePage.testTitle}</h1>;
  expect(wrapper.contains(emibTitle)).toEqual(true);
  expect(wrapper.state("curPage")).toEqual(PAGES.howTo);
});

it("renders howTo page when state changed", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.howTo });
  const emibTitle = <h1 className="progress-pane">{LOCALIZE.emibTest.homePage.testTitle}</h1>;
  expect(wrapper.contains(emibTitle)).toEqual(true);
});

it("renders background page in test tabs", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.emibTabs });
  const backgroundComponent = <Background />;
  expect(wrapper.contains(backgroundComponent)).toEqual(true);
});

it("renders confirm page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.confirm });
  const confirmationComponent = <Confirmation />;
  expect(wrapper.contains(confirmationComponent)).toEqual(true);
});

it("renders Submit Test in English", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.confirm });
  const submitTest = (
    <button type="submit" className="btn btn-primary">
      Exit Test
    </button>
  );
  expect(wrapper.contains(submitTest)).toEqual(true);
});

it("renders Submit Test in French", () => {
  LOCALIZE.setLanguage(LANGUAGES.french);
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.confirm });
  const submitTest = (
    <button type="submit" className="btn btn-primary">
      Quitter le test
    </button>
  );
  expect(wrapper.contains(submitTest)).toEqual(true);
});
