import React from "react";
import { shallow } from "enzyme";
import Background from "../components/eMIB/Background";

it("renders initial message", () => {
  const wrapper = shallow(<Background />);
  const initialMessage = <h2>Background Page</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
