import React from "react";
import { shallow, mount } from "enzyme";
import Emib, { PAGES } from "../components/eMIB/Emib";
import { LANGUAGES } from "../components/commons/Translation";
import STRINGS from "../text_resources";

it("renders welcome page", () => {
  const wrapper = shallow(<Emib />);
  const initialMessage = <p>{STRINGS.welcomeMsg}</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
  expect(wrapper.state("curPage")).toEqual(PAGES.welcome);
});

it("renders howTo page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.howTo });
  const initialMessage = <h2>{STRINGS.howToPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders background page in test tabs", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.testTabs });
  const initialMessage = <h2>{STRINGS.backgroundPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders confirm page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.confirm });
  const initialMessage = <p>{STRINGS.submissionConfirmed}</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders Next in English", () => {
  const wrapper = mount(<Emib />);
  STRINGS.setLanguage(LANGUAGES.english);
  wrapper.setState({ curPage: PAGES.welcome });
  const initialMessage = "Next";
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders Next in French", () => {
  const wrapper = mount(<Emib />);
  STRINGS.setLanguage(LANGUAGES.french);
  wrapper.setState({ curPage: PAGES.welcome });
  const initialMessage = "Suivant";
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
