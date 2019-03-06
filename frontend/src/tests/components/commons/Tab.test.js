import React from "react";
import { shallow } from "enzyme";
import Tab, { styles } from "../../../components/commons/Tab";

it("renders selected tab", () => {
  const wrapper = shallow(<Tab tabName="Tab1" selected={true} />);
  const initialMessage = (
    <span>
      <li role="menuitem" style={styles.li} aria-current="page">
        <button style={{ ...styles.button, ...styles.active }} className="side-navigation-button">
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
      <li role="menuitem" style={styles.li}>
        <button style={styles.button} className="side-navigation-button">
          Tab2
        </button>
      </li>
    </span>
  );
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
