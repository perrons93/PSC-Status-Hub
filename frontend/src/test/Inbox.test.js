import React from "react";
import { shallow } from "enzyme";
import Inbox from "../components/eMIB/Inbox";

it("renders initial message", () => {
  const wrapper = shallow(<Inbox />);
  const initialMessage = <h2>Inbox</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
