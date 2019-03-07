import React from "react";
import { mount } from "enzyme";
import WarningMessage from "../../../components/commons/WarningMessage";

it("renders title and message", () => {
  const wrapper = mount(<WarningMessage title={"title"} message={"message"} />);
  const title = <h3>title</h3>;
  const message = <p>message</p>;
  expect(wrapper.contains(title)).toEqual(true);
  expect(wrapper.contains(message)).toEqual(true);
});
