import React from "react";
import { shallow, mount } from "enzyme";
import Email from "../../../components/eMIB/Email";

const emailStub = {
  id: 1,
  to: "To 1",
  from: "From 1",
  subject: "Subject 1",
  date: "Date 1",
  body: "Body 1"
};

const hasAction = <i className="fas fa-sign-out-alt" style={{ color: "#00565E" }} />;

it("default email renders with jubject as an h3", () => {
  const wrapper = shallow(
    <Email email={emailStub} respondToEmail={() => {}} isRepliedTo={false} />
  );
  const subject = <h3>Subject 1</h3>;
  expect(wrapper.contains(subject)).toEqual(true);
  expect(wrapper.contains(hasAction)).toEqual(false);
});

it("shows action when set to true in props", () => {
  const wrapper = shallow(<Email email={emailStub} respondToEmail={() => {}} isRepliedTo={true} />);
  const subject = <h3>Subject 1</h3>;
  expect(wrapper.contains(subject)).toEqual(true);
  expect(wrapper.contains(hasAction)).toEqual(true);
});

it("reply and task buttons trigger the function", () => {
  const submitMock = jest.fn();
  const wrapper = mount(
    <Email email={emailStub} respondToEmail={submitMock} isRepliedTo={false} />
  );
  const subject = <h3>Subject 1</h3>;
  expect(wrapper.contains(subject)).toEqual(true);
  wrapper.find("#unit-test-email-reply-button").simulate("click");
  //Test also needs to triger the save response button in the modal to "save" the response
  wrapper
    .find("#unit-test-email-response-button")
    .first()
    .simulate("click");
  expect(submitMock).toHaveBeenCalledTimes(1);
  wrapper.find("#unit-test-email-task-button").simulate("click");
  //Test also needs to triger the save response button in the modal to "save" the response
  wrapper
    .find("#unit-test-email-response-button")
    .first()
    .simulate("click");
  expect(submitMock).toHaveBeenCalledTimes(2);
});
