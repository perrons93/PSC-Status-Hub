import React from "react";
import { mount } from "enzyme";
import TabNavigation from "../components/common/TabNavigation";
import Tab, { SELECTED, UNSELECTED } from "../components/common/Tab";

it("renders 3 tabs", () => {
  let TABS = [
    { id: 0, tabName: "test1", selected: "false" },
    { id: 1, tabName: "test2", selected: "true" },
    { id: 2, tabName: "test3", selected: "false" }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} selected={1} />);
  const tab1 = <Tab tabName={"test1"} selected={UNSELECTED} />;
  const tab2 = <Tab tabName={"test2"} selected={SELECTED} />;
  const tab3 = <Tab tabName={"test3"} selected={UNSELECTED} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
  expect(wrapper.contains(tab3)).toEqual(true);
});

//TODO Render 2, render 4, change tab
