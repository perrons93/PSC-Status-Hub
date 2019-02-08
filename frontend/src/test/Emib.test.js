import React from "react";
import { shallow, mount } from "enzyme";
import Emib, { PAGES, STRINGS } from "../components/eMIB/Emib";

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

it("renders background page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.background });
  const initialMessage = <h2>{STRINGS.backgroundPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders inbox page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.inbox });
  const initialMessage = <h2>{STRINGS.inboxPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders confirm page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.confirm });
  const initialMessage = <p>{STRINGS.submissionConfirmed}</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
