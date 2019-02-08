import React from "react";
import { shallow } from "enzyme";
import Inbox from "../components/eMIB/Inbox";
import Emib, { STRINGS } from "../components/eMIB/Emib";

it("renders initial message", () => {
  const wrapper = shallow(<Inbox />);
  const initialMessage = <h2>{STRINGS.inboxPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
