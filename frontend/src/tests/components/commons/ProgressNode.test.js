import React from "react";
import { mount } from "enzyme";
import ProgressNode, { styles } from "../../../components/commons/ProgressNode";

it("renders passed node", () => {
  const wrapper = mount(
    <ProgressNode id={1} text={"Tab 1"} current={2} clickFunction={() => {}} />
  );
  expect(wrapper.find("#unit-test-passed-node").exists()).toEqual(true);
  expect(wrapper.find("#unit-test-active-node").exists()).toEqual(false);
  expect(wrapper.find("#unit-test-future-node").exists()).toEqual(false);
});

it("renders active node", () => {
  const wrapper = mount(
    <ProgressNode id={2} text={"Tab 2"} current={2} clickFunction={() => {}} />
  );
  expect(wrapper.find("#unit-test-passed-node").exists()).toEqual(false);
  expect(wrapper.find("#unit-test-active-node").exists()).toEqual(true);
  expect(wrapper.find("#unit-test-future-node").exists()).toEqual(false);
});

it("renders future node", () => {
  const wrapper = mount(
    <ProgressNode id={3} text={"Tab 3"} current={2} clickFunction={() => {}} />
  );
  expect(wrapper.find("#unit-test-passed-node").exists()).toEqual(false);
  expect(wrapper.find("#unit-test-active-node").exists()).toEqual(false);
  expect(wrapper.find("#unit-test-future-node").exists()).toEqual(true);
});
