import React from "react";
import { shallow } from "enzyme";
import Background from "../components/eMIB/Background";
import LOCALIZE from "../text_resources";

it("renders initial message", () => {
  const wrapper = shallow(<Background />);
  const initialMessage = <h2>{LOCALIZE.backgroundPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
