import React from "react";
import { mount } from "enzyme";
import ProgressPane from "../../../components/commons/ProgressPane";

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
  for (let i = 0; i < 4; i++) {
    const check = wrapper
      .find(".progress-node")
      .at(i)
      .hasClass("active");
    if (i === selected) {
      // if the current one is selected
      expect(check).toEqual(true);
    }
    if (i !== selected) {
      // if not
      expect(check).toEqual(false);
    }
  }
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
