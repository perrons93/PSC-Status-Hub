import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Background from "../components/eMIB/Background";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Background />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders initial message", () => {
  const wrapper = shallow(<Background />);
  const initialMessage = <h2>Background Page</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
