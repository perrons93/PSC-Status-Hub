import React from "react";
import { shallow } from "enzyme";
import TestFooter from "../../../components/commons/TestFooter";

it("calls submit test when button clicked", () => {
  const submitMock = jest.fn();
  const wrapper = shallow(<TestFooter submitTest={submitMock} />);
  wrapper.find("#unit-test-submit-btn").simulate("click");
  expect(submitMock).toHaveBeenCalledTimes(1);
});
