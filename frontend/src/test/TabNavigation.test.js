import React from "react";
import { mount } from "enzyme";
import TabNavigation from "../components/common/TabNavigation";
import Tab, { SELECTED, UNSELECTED } from "../components/common/Tab";

it("renders 2 tabs", () => {
  let TABS = [
    { id: 0, tabName: "test1", selected: UNSELECTED },
    { id: 1, tabName: "test2", selected: SELECTED }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} curTab={1} />);
  const tab1 = <Tab tabName={"test1"} selected={UNSELECTED} />;
  const tab2 = <Tab tabName={"test2"} selected={SELECTED} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
});

it("renders 3 tabs", () => {
  let TABS = [
    { id: 0, tabName: "test1", selected: UNSELECTED },
    { id: 1, tabName: "test2", selected: SELECTED },
    { id: 2, tabName: "test3", selected: UNSELECTED }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} curTab={1} />);
  const tab1 = <Tab tabName={"test1"} selected={UNSELECTED} />;
  const tab2 = <Tab tabName={"test2"} selected={SELECTED} />;
  const tab3 = <Tab tabName={"test3"} selected={UNSELECTED} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
  expect(wrapper.contains(tab3)).toEqual(true);
});

it("renders 4 tabs", () => {
  let TABS = [
    { id: 0, tabName: "test1", selected: UNSELECTED },
    { id: 1, tabName: "test2", selected: SELECTED },
    { id: 2, tabName: "test3", selected: UNSELECTED },
    { id: 3, tabName: "test4", selected: UNSELECTED }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} curTab={1} />);
  const tab1 = <Tab tabName={"test1"} selected={UNSELECTED} />;
  const tab2 = <Tab tabName={"test2"} selected={SELECTED} />;
  const tab3 = <Tab tabName={"test3"} selected={UNSELECTED} />;
  const tab4 = <Tab tabName={"test4"} selected={UNSELECTED} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
  expect(wrapper.contains(tab3)).toEqual(true);
  expect(wrapper.contains(tab4)).toEqual(true);
});

it("changes tabs to tab 1", () => {
  let TABS = [
    { id: 0, tabName: "test1", selected: UNSELECTED },
    { id: 1, tabName: "test2", selected: SELECTED },
    { id: 2, tabName: "test3", selected: UNSELECTED }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} curTab={1} />);
  wrapper.find(".test1").simulate("click");
  const tab1 = <Tab tabName={"test1"} selected={SELECTED} />;
  const tab2 = <Tab tabName={"test2"} selected={UNSELECTED} />;
  const tab3 = <Tab tabName={"test3"} selected={UNSELECTED} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
  expect(wrapper.contains(tab3)).toEqual(true);
});

it("changes tabs to tab 2", () => {
  let TABS = [
    { id: 0, tabName: "test1", selected: UNSELECTED },
    { id: 1, tabName: "test2", selected: SELECTED },
    { id: 2, tabName: "test3", selected: UNSELECTED }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} curTab={1} />);
  wrapper.find(".test3").simulate("click");
  const tab1 = <Tab tabName={"test1"} selected={UNSELECTED} />;
  const tab2 = <Tab tabName={"test2"} selected={UNSELECTED} />;
  const tab3 = <Tab tabName={"test3"} selected={SELECTED} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
  expect(wrapper.contains(tab3)).toEqual(true);
});
