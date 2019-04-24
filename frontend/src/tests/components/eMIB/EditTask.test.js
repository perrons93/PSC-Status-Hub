import React from "react";
import { shallow } from "enzyme";
import EditTask from "../../../components/eMIB/EditTask";

describe("check that the disabled prop works as expected", () => {
  it("inputs are not disabled if flag is not present", () => {
    const wrapper = shallow(<EditTask onChange={() => {}} />);
    expect(wrapper.find("#your-tasks-text-area").prop("disabled")).toEqual(false);
    expect(wrapper.find("#reasons-for-action-text-area").prop("disabled")).toEqual(false);
  });

  it("inputs are not disabled if flag is set to false", () => {
    const wrapper = shallow(<EditTask onChange={() => {}} disabled={false} />);
    expect(wrapper.find("#your-tasks-text-area").prop("disabled")).toEqual(false);
    expect(wrapper.find("#reasons-for-action-text-area").prop("disabled")).toEqual(false);
  });

  it("inputs are disabled if flag is set to true", () => {
    const wrapper = shallow(<EditTask onChange={() => {}} disabled={true} />);
    expect(wrapper.find("#your-tasks-text-area").prop("disabled")).toEqual(true);
    expect(wrapper.find("#reasons-for-action-text-area").prop("disabled")).toEqual(true);
  });
});
