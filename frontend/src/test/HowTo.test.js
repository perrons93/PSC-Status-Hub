import React from "react";
import { shallow } from "enzyme";
import HowTo from "../components/eMIB/HowTo";

it("renders initial message", () => {
  const wrapper = shallow(<HowTo />);
  const initialMessage = <h2>HowTo Page</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
