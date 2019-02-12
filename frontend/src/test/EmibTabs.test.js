import React from "react";
import { mount } from "enzyme";
import EmibTabs, { TABS } from "../components/eMIB/EmibTabs";
import { STRINGS } from "../components/eMIB/Emib";

it("renders emibTabs page", () => {
  const wrapper = mount(<EmibTabs />);
  expect(wrapper.state("curTab")).toEqual(TABS.background);
  const backgroundMessage = <h2>{STRINGS.backgroundPageTitle}</h2>;
  expect(wrapper.contains(backgroundMessage)).toEqual(true);
});

it("renders instructions tab", () => {
  const wrapper = mount(<EmibTabs />);
  wrapper.setState({ curTab: TABS.instructions });
  const initialMessage = <h2>{STRINGS.howToPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders background tab", () => {
  const wrapper = mount(<EmibTabs />);
  wrapper.setState({ curTab: TABS.background });
  const initialMessage = <h2>{STRINGS.backgroundPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders inbox tab", () => {
  const wrapper = mount(<EmibTabs />);
  wrapper.setState({ curTab: TABS.inbox });
  const initialMessage = <h2>{STRINGS.inboxPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
