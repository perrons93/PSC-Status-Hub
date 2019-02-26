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

const BTN1_SELECTED = "#unit-test-sidenav-button0-selected";
const BTN1_UNSELECTED = "#unit-test-sidenav-button0-unselected";
const BTN2_SELECTED = "#unit-test-sidenav-button1-selected";
const BTN2_UNSELECTED = "#unit-test-sidenav-button1-unselected";
const BTN3_SELECTED = "#unit-test-sidenav-button2-selected";
const BTN3_UNSELECTED = "#unit-test-sidenav-button2-unselected";
const BTN4_SELECTED = "#unit-test-sidenav-button3-selected";
const BTN4_UNSELECTED = "#unit-test-sidenav-button3-unselected";

it("renders 2 buttons", () => {
  const SPECS = [{ id: 0, text: TEXT1, body: BODY1 }, { id: 1, text: TEXT2, body: BODY2 }];
  const wrapper = mount(<SideNavigation navSpecs={SPECS} currentNode={1} />);
  expect(wrapper.find("#" + TEXT2).exists()).toEqual(true);
  expect(wrapper.find(BTN1_UNSELECTED).exists()).toEqual(true);
  expect(wrapper.find(BTN2_SELECTED).exists()).toEqual(true);
});

it("renders 3 buttons", () => {
  const SPECS = [
    { id: 0, text: TEXT1, body: BODY1 },
    { id: 1, text: TEXT2, body: BODY2 },
    { id: 2, text: TEXT3, body: BODY3 }
  ];
  const wrapper = mount(<SideNavigation navSpecs={SPECS} currentNode={1} />);
  expect(wrapper.find("#" + TEXT2).exists()).toEqual(true);
  expect(wrapper.find(BTN1_UNSELECTED).exists()).toEqual(true);
  expect(wrapper.find(BTN2_SELECTED).exists()).toEqual(true);
  expect(wrapper.find(BTN3_UNSELECTED).exists()).toEqual(true);
});

it("renders 4 buttons", () => {
  const SPECS = [
    { id: 0, text: TEXT1, body: BODY1 },
    { id: 1, text: TEXT2, body: BODY2 },
    { id: 2, text: TEXT3, body: BODY3 },
    { id: 3, text: TEXT4, body: BODY4 }
  ];
  const wrapper = mount(<SideNavigation navSpecs={SPECS} currentNode={1} />);
  expect(wrapper.find("#" + TEXT2).exists()).toEqual(true);
  expect(wrapper.find(BTN1_UNSELECTED).exists()).toEqual(true);
  expect(wrapper.find(BTN2_SELECTED).exists()).toEqual(true);
  expect(wrapper.find(BTN3_UNSELECTED).exists()).toEqual(true);
  expect(wrapper.find(BTN4_UNSELECTED).exists()).toEqual(true);
});

it("changes page to test1", () => {
  const SPECS = [
    { id: 0, text: TEXT1, body: BODY1 },
    { id: 1, text: TEXT2, body: BODY2 },
    { id: 2, text: TEXT3, body: BODY3 }
  ];
  const wrapper = mount(<SideNavigation navSpecs={SPECS} currentNode={1} />);
  wrapper.find(BTN1_UNSELECTED).simulate("click");
  expect(wrapper.find("#" + TEXT1).exists()).toEqual(true);
  expect(wrapper.find(BTN1_SELECTED).exists()).toEqual(true);
  expect(wrapper.find(BTN2_UNSELECTED).exists()).toEqual(true);
  expect(wrapper.find(BTN3_UNSELECTED).exists()).toEqual(true);
});

it("changes page to test2", () => {
  const SPECS = [
    { id: 0, text: TEXT1, body: BODY1 },
    { id: 1, text: TEXT2, body: BODY2 },
    { id: 2, text: TEXT3, body: BODY3 }
  ];
  const wrapper = mount(<SideNavigation navSpecs={SPECS} currentNode={1} />);
  wrapper.find(BTN3_UNSELECTED).simulate("click");
  expect(wrapper.find("#" + TEXT3).exists()).toEqual(true);
  expect(wrapper.find(BTN1_UNSELECTED).exists()).toEqual(true);
  expect(wrapper.find(BTN2_UNSELECTED).exists()).toEqual(true);
  expect(wrapper.find(BTN3_SELECTED).exists()).toEqual(true);
});
