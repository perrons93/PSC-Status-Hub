import React from "react";
import { shallow } from "enzyme";
import ProgressNode from "../../../components/commons/ProgressNode";

it("renders passed node", () => {
  const wrapper = shallow(<ProgressNode id={1} text={"Tab 1"} current={2} />);
  const passedNode = (
    <li className="complete">
      Tab 1<span className="sr-only">completed</span>
    </li>
  );
  expect(wrapper.contains(passedNode)).toEqual(true);
});

it("renders active node", () => {
  const wrapper = shallow(<ProgressNode id={2} text={"Tab 2"} current={2} />);
  const activeNode = (
    <li className="active" aria-current="true">
      Tab 2
    </li>
  );
  expect(wrapper.contains(activeNode)).toEqual(true);
});

it("renders future node", () => {
  const wrapper = shallow(<ProgressNode id={3} text={"Tab 3"} current={2} />);
  const futureNode = (
    <li>
      Tab 3<span className="sr-only">not completed</span>
    </li>
  );
  expect(wrapper.contains(futureNode)).toEqual(true);
});
