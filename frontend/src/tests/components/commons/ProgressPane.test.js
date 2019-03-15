import React from "react";
import { mount } from "enzyme";
import ProgressPane from "../../../components/commons/ProgressPane";
import ProgressNode from "../../../components/commons/ProgressNode";

const emptyFunc = function(arg) {};

const PROGRESS = [
  { id: 0, text: "node 1", body: <div>Body 1</div> },
  { id: 1, text: "node 2", body: <div>Body 2</div> },
  { id: 2, text: "node 3", body: <div>Body 3</div> },
  { id: 3, text: "node 4", body: <div>Body 4</div> }
];

it("renders when first node selected", () => {
  generateAndTestCore(0);
});

it("renders when second node selected", () => {
  generateAndTestCore(1);
});

it("renders when third node selected", () => {
  generateAndTestCore(2);
});

it("renders when fourth node selected", () => {
  generateAndTestCore(3);
});

function generateAndTestCore(selected) {
  const wrapper = mount(<ProgressPane progressSpecs={PROGRESS} currentNode={selected} />);
  testCore(selected, wrapper);
}

function testCore(selected, wrapper) {
  console.log(selected);
  const node1 = (
    <ProgressNode id={0} text={"node 1"} current={selected} clickFunction={emptyFunc} />
  );
  const node2 = (
    <ProgressNode id={1} text={"node 2"} current={selected} clickFunction={emptyFunc} />
  );
  const node3 = (
    <ProgressNode id={2} text={"node 3"} current={selected} clickFunction={emptyFunc} />
  );
  const node4 = (
    <ProgressNode id={3} text={"node 4"} current={selected} clickFunction={emptyFunc} />
  );
  expect(wrapper.contains(node1)).toEqual(true);
  expect(wrapper.contains(node2)).toEqual(true);
  expect(wrapper.contains(node3)).toEqual(true);
  expect(wrapper.contains(node4)).toEqual(true);
}

it("can change nodes by clicking on them", () => {
  const wrapper = mount(<ProgressPane progressSpecs={PROGRESS} currentNode={1} />);
  testCore(1, wrapper);
  wrapper
    .find(".progress-node")
    .first()
    .simulate("click");
  testCore(0, wrapper);
  wrapper
    .find(".progress-node")
    .last()
    .simulate("click");
  testCore(3, wrapper);
});
