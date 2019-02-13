import React from "react";
import { mount } from "enzyme";
import EmibTabs from "../../../components/eMIB/EmibTabs";
import { STRINGS } from "../../../components/eMIB/Emib";

it("renders emibTabs page", () => {
  const wrapper = mount(<EmibTabs />);
  const backgroundMessage = <h2>{STRINGS.backgroundPageTitle}</h2>;
  expect(wrapper.contains(backgroundMessage)).toEqual(true);
});
