import React from "react";
import { mount } from "enzyme";
import EmibTabs from "../../../components/eMIB/EmibTabs";
import LOCALIZE from "../../../text_resources";

it("renders emibTabs page", () => {
  const wrapper = mount(<EmibTabs submitTest={() => {}} />);
  const pageTitle = <h2>{LOCALIZE.emibTest.backgroundPage.title}</h2>;
  expect(wrapper.contains(pageTitle)).toEqual(true);
});
