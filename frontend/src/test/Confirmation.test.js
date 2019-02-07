import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Confirmation from "../components/eMIB/Confirmation";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Confirmation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders initial message", () => {
  const wrapper = shallow(<Confirmation />);
  const initialMessage = <p>Submission Confirmed</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
