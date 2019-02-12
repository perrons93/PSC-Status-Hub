import React from "react";
import { shallow } from "enzyme";
import Background from "../components/eMIB/Background";
import STRINGS from "../text_resources";

it("renders initial message", () => {
  const wrapper = shallow(<Background />);
  const initialMessage = <h2>{STRINGS.backgroundPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
