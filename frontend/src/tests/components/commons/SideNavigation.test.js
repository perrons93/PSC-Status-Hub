import React from "react";
import { mount } from "enzyme";
import SideNavigation from "../../../components/commons/SideNavigation";

const BODY1 = <div>Body 1</div>;
const BODY2 = <div>Body 2</div>;
const BODY3 = <div>Body 3</div>;
const BODY4 = <div>Body 4</div>;
const TEXT1 = "test1";
const TEXT2 = "test2";
const TEXT3 = "test3";
const TEXT4 = "test4";

window.HTMLElement.prototype.scrollIntoView = function() {}; // dummy for the scrollIntoView call within SideNavigation's changeNode function

it("renders 2 buttons", () => {
  const SPECS = [{ id: 0, text: TEXT1, body: BODY1 }, { id: 1, text: TEXT2, body: BODY2 }];
  const wrapper = mount(<SideNavigation navSpecs={SPECS} currentNode={1} />);
  expect(wrapper.state("currentNode")).toEqual(1);
  expect(wrapper.find(".btn-primary")).toHaveLength(1);
  expect(wrapper.find(".btn-secondary")).toHaveLength(1);
});

it("renders 3 buttons", () => {
  const SPECS = [
    { id: 0, text: TEXT1, body: BODY1 },
    { id: 1, text: TEXT2, body: BODY2 },
    { id: 2, text: TEXT3, body: BODY3 }
  ];
  const wrapper = mount(<SideNavigation navSpecs={SPECS} currentNode={1} />);
  expect(wrapper.state("currentNode")).toEqual(1);
  expect(wrapper.find(".btn-primary")).toHaveLength(1);
  expect(wrapper.find(".btn-secondary")).toHaveLength(2);
});

it("renders 4 buttons", () => {
  const SPECS = [
    { id: 0, text: TEXT1, body: BODY1 },
    { id: 1, text: TEXT2, body: BODY2 },
    { id: 2, text: TEXT3, body: BODY3 },
    { id: 3, text: TEXT4, body: BODY4 }
  ];
  const wrapper = mount(<SideNavigation navSpecs={SPECS} currentNode={1} />);
  expect(wrapper.state("currentNode")).toEqual(1);
  expect(wrapper.find(".btn-primary")).toHaveLength(1);
  expect(wrapper.find(".btn-secondary")).toHaveLength(3);
});

it("changes page to test1", () => {
  const SPECS = [
    { id: 0, text: TEXT1, body: BODY1 },
    { id: 1, text: TEXT2, body: BODY2 },
    { id: 2, text: TEXT3, body: BODY3 }
  ];
  const wrapper = mount(<SideNavigation navSpecs={SPECS} currentNode={1} />);
  wrapper
    .find(".btn-secondary")
    .first()
    .simulate("click");
  expect(wrapper.state("currentNode")).toEqual(0);
  expect(wrapper.find(".btn-primary")).toHaveLength(1);
  expect(wrapper.find(".btn-secondary")).toHaveLength(2);
});

it("changes page to test2", () => {
  const SPECS = [
    { id: 0, text: TEXT1, body: BODY1 },
    { id: 1, text: TEXT2, body: BODY2 },
    { id: 2, text: TEXT3, body: BODY3 }
  ];
  const wrapper = mount(<SideNavigation navSpecs={SPECS} currentNode={1} />);
  wrapper
    .find(".btn-secondary")
    .last()
    .simulate("click");
  expect(wrapper.state("currentNode")).toEqual(2);
  expect(wrapper.find(".btn-primary")).toHaveLength(1);
  expect(wrapper.find(".btn-secondary")).toHaveLength(2);
});
