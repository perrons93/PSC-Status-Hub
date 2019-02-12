import React from "react";
import { shallow } from "enzyme";
import HowTo from "../components/eMIB/HowTo";
import STRINGS from "../text_resources";

it("renders initial message", () => {
  const wrapper = shallow(<HowTo />);
  const initialMessage = <h2>{STRINGS.howToPageTitle}</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
