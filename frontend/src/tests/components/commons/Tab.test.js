import React from "react";
import { shallow } from "enzyme";
import Tab, { SELECTED, UNSELECTED } from "../../../components/commons/Tab";

it("renders selected tab", () => {
  const wrapper = shallow(<Tab tabName="Tab1" selected={SELECTED} />);
  const initialMessage = (
    <button className={"Tab1"} style={{ color: "black", cursor: "pointer" }}>
      Tab1
    </button>
  );
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders unselected tab", () => {
  const wrapper = shallow(<Tab tabName="Tab2" selected={UNSELECTED} />);
  const initialMessage = (
    <button className={"Tab2"} style={{ color: "blue", cursor: "pointer" }}>
      Tab2
    </button>
  );
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
