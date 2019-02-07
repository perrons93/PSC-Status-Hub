import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Emib from "../components/eMIB/Emib";

it("renders initial message", () => {
  const wrapper = shallow(<Emib />);
  const initialMessage = <p>Welcome to the eMIB Sample Test</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
