import React from "react";
import { shallow } from "enzyme";
import Confirmation from "../components/eMIB/Confirmation";
import LOCALIZE from "../text_resources";

it("renders initial message", () => {
  const wrapper = shallow(<Confirmation />);
  const initialMessage = <p>{LOCALIZE.submissionConfirmed}</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
