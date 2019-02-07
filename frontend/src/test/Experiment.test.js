import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Experiment from "../Experiment";

it("renders initial message", () => {
  const wrapper = shallow(<Experiment />);
  const initialMessage = <p>This page will be used to test out experimental UIs.</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
