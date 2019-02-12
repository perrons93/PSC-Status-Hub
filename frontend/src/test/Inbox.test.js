import React from "react";
import { shallow } from "enzyme";
import Inbox from "../components/eMIB/Inbox";
import LOCALIZE from "../text_resources";

it("renders initial message", () => {
  const wrapper = shallow(<Inbox />);
  const initialMessage = <h2>{LOCALIZE.inboxPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
