import React from "react";
import { shallow } from "enzyme";
import TestFooter from "../../../components/commons/TestFooter";

describe("displays and calls the right buttons depending on the testIsStarted state", () => {
  const submitMock1 = jest.fn();
  const submitMock2 = jest.fn();
  const submitMock3 = jest.fn();

  it("test is not started - calls start test when the buttons is clicked", () => {
    const wrapper = shallow(<TestFooter startTest={submitMock1} testIsStarted={false} />);
    wrapper.find("#unit-test-start-btn").simulate("click");
    expect(wrapper.find("#unit-test-start-btn").exists()).toEqual(true);
    expect(wrapper.find("#unit-test-submit-btn").exists()).toEqual(false);
    expect(wrapper.find("#unit-test-quit-btn").exists()).toEqual(false);
    expect(submitMock1).toHaveBeenCalledTimes(1);
  });

  it("test is started - calls submit test and quit test when the buttons are clicked", () => {
    const wrapper = shallow(
      <TestFooter submitTest={submitMock2} quitTest={submitMock3} testIsStarted={true} />
    );
    wrapper.find("#unit-test-submit-btn").simulate("click");
    wrapper.find("#unit-test-quit-btn").simulate("click");
    expect(wrapper.find("#unit-test-start-btn").exists()).toEqual(false);
    expect(wrapper.find("#unit-test-submit-btn").exists()).toEqual(true);
    expect(wrapper.find("#unit-test-quit-btn").exists()).toEqual(true);
    expect(submitMock2).toHaveBeenCalledTimes(1);
    expect(submitMock3).toHaveBeenCalledTimes(1);
  });
});
