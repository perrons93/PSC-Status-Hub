import React from "react";
import { mount } from "enzyme";
import TestTabs, { TABS } from "../components/eMIB/TestTabs";
import LOCALIZE from "../text_resources";

it("renders testTabs page", () => {
  const wrapper = mount(<TestTabs />);
  expect(wrapper.state("curTab")).toEqual(TABS.background);
  const backgroundPageTitle = <h2>{LOCALIZE.emibTest.backgroundPage.title}</h2>;
  expect(wrapper.contains(backgroundPageTitle)).toEqual(true);
});

it("renders instructions tab", () => {
  const wrapper = mount(<TestTabs />);
  wrapper.setState({ curTab: TABS.instructions });
  const howToPageTitle = <h2>{LOCALIZE.emibTest.howToPage.title}</h2>;
  expect(wrapper.contains(howToPageTitle)).toEqual(true);
});

it("renders background tab", () => {
  const wrapper = mount(<TestTabs />);
  wrapper.setState({ curTab: TABS.background });
  const backgroundPageTitle = <h2>{LOCALIZE.emibTest.backgroundPage.title}</h2>;
  expect(wrapper.contains(backgroundPageTitle)).toEqual(true);
});

it("renders inbox tab", () => {
  const wrapper = mount(<TestTabs />);
  wrapper.setState({ curTab: TABS.inbox });
  const inboxPageTitle = <h2>{LOCALIZE.emibTest.inboxPage.title}</h2>;
  expect(wrapper.contains(inboxPageTitle)).toEqual(true);
});
