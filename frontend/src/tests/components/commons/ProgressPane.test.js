import React from "react";
import { mount } from "enzyme";
import ProgressPane from "../../../components/commons/ProgressPane";
import ProgressNode from "../../../components/commons/ProgressNode";

const PROGRESS = [
  { id: 1, text: "node 1", body: <div>Body 1</div> },
  { id: 2, text: "node 2", body: <div>Body 2</div> },
  { id: 3, text: "node 3", body: <div>Body 3</div> },
  { id: 4, text: "node 4", body: <div>Body 4</div> }
];

it("renders when first node selected", () => {
  testCore(1);
});

it("renders when second node selected", () => {
  testCore(2);
});

it("renders when third node selected", () => {
  testCore(3);
});

it("renders when fourth node selected", () => {
  testCore(4);
});

function testCore(selected) {
  const wrapper = mount(<ProgressPane progressSpecs={PROGRESS} currentNode={selected} />);
  const node1 = <ProgressNode id={1} text={"node 1"} current={selected} />;
  const node2 = <ProgressNode id={2} text={"node 2"} current={selected} />;
  const node3 = <ProgressNode id={3} text={"node 3"} current={selected} />;
  const node4 = <ProgressNode id={4} text={"node 4"} current={selected} />;
  expect(wrapper.contains(node1)).toEqual(true);
  expect(wrapper.contains(node2)).toEqual(true);
  expect(wrapper.contains(node3)).toEqual(true);
  expect(wrapper.contains(node4)).toEqual(true);
}
