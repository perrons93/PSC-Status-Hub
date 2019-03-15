import React from "react";
import { shallow } from "enzyme";
import ProgressNode, { styles } from "../../../components/commons/ProgressNode";

const emptyFunc = function(arg) {};

it("renders passed node", () => {
  const wrapper = shallow(
    <ProgressNode id={1} text={"Tab 1"} current={2} clickFunction={emptyFunc} />
  );
  const passedNode = (
    <li style={styles.clickable} className="complete progress-node" onClick={emptyFunc}>
      Tab 1<span className="sr-only">completed</span>
    </li>
  );
  expect(wrapper.contains(passedNode)).toEqual(true);
});

it("renders active node", () => {
  const wrapper = shallow(
    <ProgressNode id={2} text={"Tab 2"} current={2} clickFunction={emptyFunc} />
  );
  const activeNode = (
    <li style={styles.clickable} className="active progress-node" aria-current="true">
      Tab 2
    </li>
  );
  expect(wrapper.contains(activeNode)).toEqual(true);
});

it("renders future node", () => {
  const wrapper = shallow(
    <ProgressNode id={3} text={"Tab 3"} current={2} clickFunction={emptyFunc} />
  );
  const futureNode = (
    <li className="progress-node" style={styles.clickable}>
      Tab 3<span className="sr-only">not completed</span>
    </li>
  );
  expect(wrapper.contains(futureNode)).toEqual(true);
});
