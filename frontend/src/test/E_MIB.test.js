import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import E_MIB from "../components/eMIB/E_MIB";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<E_MIB />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders initial message", () => {
  const wrapper = shallow(<E_MIB />);
  const initialMessage = <p>Welcome to the eMIB Sample Test</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
