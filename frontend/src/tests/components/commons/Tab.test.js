import React from "react";
import { shallow } from "enzyme";
import Tab, { styles } from "../../../components/commons/Tab";

it("renders selected tab", () => {
  const wrapper = shallow(<Tab tabName="Tab1" selected={true} />);
  const initialMessage = (
    <span>
      <li role="presentation" className="active">
        <button id="Tab1" role="tab" aria-selected="true">
          Tab1
        </button>
      </li>
    </span>
  );
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders unselected tab", () => {
  const wrapper = shallow(<Tab tabName="Tab2" selected={false} />);
  const initialMessage = (
    <span>
      <li role="presentation">
        <button id="Tab2" role="tab" aria-selected="false">
          Tab2
        </button>
      </li>
    </span>
  );
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
