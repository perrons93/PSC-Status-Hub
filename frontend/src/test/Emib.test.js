import React from "react";
import { shallow, mount } from "enzyme";
import Emib, { PAGES } from "../components/eMIB/Emib";
import { LANGUAGES } from "../components/commons/Translation";
import LOCALIZE from "../text_resources";

it("renders welcome page", () => {
  const wrapper = shallow(<Emib />);
  const welcomePageMsg = <p>{LOCALIZE.emibTest.homePage.welcomeMsg}</p>;
  expect(wrapper.contains(welcomePageMsg)).toEqual(true);
  expect(wrapper.state("curPage")).toEqual(PAGES.welcome);
});

it("renders howTo page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.howTo });
  const howToPageMsg = <h2>{LOCALIZE.emibTest.howToPage.title}</h2>;
  expect(wrapper.contains(howToPageMsg)).toEqual(true);
});

it("renders background page in test tabs", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.testTabs });
  const backgroundPageTitle = <h2>{LOCALIZE.emibTest.backgroundPage.title}</h2>;
  expect(wrapper.contains(backgroundPageTitle)).toEqual(true);
});

it("renders confirm page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.confirm });
  const confirmationMsg = <p>{LOCALIZE.emibTest.confirmationPage.submissionConfirmed}</p>;
  expect(wrapper.contains(confirmationMsg)).toEqual(true);
});

it("renders Next in English", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.welcome });
  const nextButton = <p>{LOCALIZE.commons.nextButton}</p>;
  expect(wrapper.contains(nextButton)).toEqual(true);
});

it("renders Next in French", () => {
  LOCALIZE.setLanguage(LANGUAGES.french);
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.welcome });
  const nextButton = <p>{LOCALIZE.commons.nextButton}</p>;
  expect(wrapper.contains(nextButton)).toEqual(true);
});
