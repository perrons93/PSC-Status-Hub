import React from "react";
import { mount } from "enzyme";
import TabNavigation from "../components/common/TabNavigation";
import Tab, { SELECTED, UNSELECTED } from "../components/common/Tab";

it("renders 3 tabs", () => {
  let TABS = [
    { id: 0, tabName: "test1", selected: "false" },
    { id: 1, tabName: "test2", selected: "true" },
    { id: 2, tabName: "test3", selected: "false" }
  ];
  const wrapper = mount(<TabNavigation tabSpecs={TABS} selected={1} />);
  const initialMessage = <Tab tabName={"test1"} selected={"false"} />;
  //<span style={{ color: "blue", cursor: "pointer" }}>test3</span>;
  /*const initialMessage = (
    <div>
      <span key={0}>
        <span>
          <span style={{ color: "blue", cursor: "pointer" }}>"test1"</span>
        </span>
      </span>
      <span key={1}>
        <span>
          <span style={{ color: "black", cursor: "pointer" }}>"test2"</span>
        </span>
      </span>
      <span key={2}>
        <span>
          <span style={{ color: "blue", cursor: "pointer" }}>"test3"</span>
        </span>
      </span>
    </div>
  );*/
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
