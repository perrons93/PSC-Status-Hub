import React from "react";
import { mount } from "enzyme";
import TabNavigation from "../../../components/commons/TabNavigation";
import Tab from "../../../components/commons/Tab";

it("renders 2 tabs", () => {
  const TABS = [{ id: 0, tabName: "test1" }, { id: 1, tabName: "test2" }];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} currentTab={1} />);
  const tab1 = <Tab tabName={"test1"} selected={false} />;
  const tab2 = <Tab tabName={"test2"} selected={true} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
});

it("renders 3 tabs", () => {
  const TABS = [
    { id: 0, tabName: "test1" },
    { id: 1, tabName: "test2" },
    { id: 2, tabName: "test3" }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} currentTab={1} />);
  const tab1 = <Tab tabName={"test1"} selected={false} />;
  const tab2 = <Tab tabName={"test2"} selected={true} />;
  const tab3 = <Tab tabName={"test3"} selected={false} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
  expect(wrapper.contains(tab3)).toEqual(true);
});

it("renders 4 tabs", () => {
  const TABS = [
    { id: 0, tabName: "test1" },
    { id: 1, tabName: "test2" },
    { id: 2, tabName: "test3" },
    { id: 3, tabName: "test4" }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} currentTab={1} />);
  const tab1 = <Tab tabName={"test1"} selected={false} />;
  const tab2 = <Tab tabName={"test2"} selected={true} />;
  const tab3 = <Tab tabName={"test3"} selected={false} />;
  const tab4 = <Tab tabName={"test4"} selected={false} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
  expect(wrapper.contains(tab3)).toEqual(true);
  expect(wrapper.contains(tab4)).toEqual(true);
});

it("changes tabs to tab 1", () => {
  const TABS = [
    { id: 0, tabName: "test1" },
    { id: 1, tabName: "test2" },
    { id: 2, tabName: "test3" }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} currentTab={1} />);
  wrapper.find("#test1").simulate("click");
  const tab1 = <Tab tabName={"test1"} selected={true} />;
  const tab2 = <Tab tabName={"test2"} selected={false} />;
  const tab3 = <Tab tabName={"test3"} selected={false} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
  expect(wrapper.contains(tab3)).toEqual(true);
});

it("changes tabs to tab 2", () => {
  const TABS = [
    { id: 0, tabName: "test1" },
    { id: 1, tabName: "test2" },
    { id: 2, tabName: "test3" }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} currentTab={1} />);
  wrapper.find("#test3").simulate("click");
  const tab1 = <Tab tabName={"test1"} selected={false} />;
  const tab2 = <Tab tabName={"test2"} selected={false} />;
  const tab3 = <Tab tabName={"test3"} selected={true} />;
  expect(wrapper.contains(tab1)).toEqual(true);
  expect(wrapper.contains(tab2)).toEqual(true);
  expect(wrapper.contains(tab3)).toEqual(true);
});
