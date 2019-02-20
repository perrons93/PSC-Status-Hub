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
  const howToComponent = <HowTo inTest={false} />;
  expect(wrapper.contains(howToComponent)).toEqual(true);
  expect(wrapper.state("curPage")).toEqual(PAGES.howTo);
});

it("renders howTo page when state changed", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.howTo });
  const howToComponent = <HowTo inTest={false} />;
  expect(wrapper.contains(howToComponent)).toEqual(true);
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

it("renders Next in English", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.howTo });
  const startTest = <span>{LOCALIZE.commons.startTest}</span>;
  expect(wrapper.contains(startTest)).toEqual(true);
});

it("renders Next in French", () => {
  LOCALIZE.setLanguage(LANGUAGES.french);
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.howTo });
  const startTest = <span>{LOCALIZE.commons.startTest}</span>;
  expect(wrapper.contains(startTest)).toEqual(true);
});
