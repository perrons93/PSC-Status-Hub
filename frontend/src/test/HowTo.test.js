import React from "react";
import { shallow } from "enzyme";
import HowTo from "../components/eMIB/HowTo";
import LOCALIZE from "../text_resources";

it("renders initial message", () => {
  const wrapper = shallow(<HowTo />);
  const initialMessage = <h2>{LOCALIZE.howToPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
