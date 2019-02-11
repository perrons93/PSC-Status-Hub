import React from "react";
import { shallow } from "enzyme";
import Tab, { SELECTED, UNSELECTED } from "../components/eMIB/Tab";

it("renders selected tab", () => {
  const wrapper = shallow(<Tab tabName="Tab1" selected={SELECTED} />);
  const initialMessage = <span style={{ color: "black" }}>Tab1</span>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders unselected tab", () => {
  const wrapper = shallow(<Tab tabName="Tab2" selected={UNSELECTED} />);
  const initialMessage = <span style={{ color: "blue" }}>Tab2</span>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
