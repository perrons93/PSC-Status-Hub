import React from "react";
import { mount } from "enzyme";
import ErrorMessage from "../../../components/commons/ErrorMessage";

it("renders title and message", () => {
  const wrapper = mount(<ErrorMessage title={"title"} message={"message"} />);
  const title = <h3>title</h3>;
  const message = <p>message</p>;
  expect(wrapper.contains(title)).toEqual(true);
  expect(wrapper.contains(message)).toEqual(true);
});
