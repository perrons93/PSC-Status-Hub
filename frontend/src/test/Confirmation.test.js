import React from "react";
import { shallow } from "enzyme";
import Confirmation from "../components/eMIB/Confirmation";
import Emib, { STRINGS } from "../components/eMIB/Emib";

it("renders initial message", () => {
  const wrapper = shallow(<Confirmation />);
  const initialMessage = <p>{STRINGS.submissionConfirmed}</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
