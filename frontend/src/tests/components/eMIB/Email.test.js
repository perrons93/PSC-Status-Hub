import React from "react";
import { shallow, mount } from "enzyme";
import { UnconnectedEmail as Email } from "../../../components/eMIB/Email";

const emailStub = {
  id: 1,
  to: "To 1",
  from: "From 1",
  subject: "Subject 1",
  date: "Date 1",
  body: "Body 1"
};

const hasAction = <i className="fas fa-sign-out-alt" style={{ color: "#00565E" }} />;

it("default email renders with subject as an h3", () => {
  const wrapper = shallow(
    <Email email={emailStub} addEmail={() => {}} addTask={() => {}} emailCount={0} taskCount={0} />
  );
  const subject = <h3>Subject 1</h3>;
  expect(wrapper.contains(subject)).toEqual(true);
  expect(wrapper.contains(hasAction)).toEqual(false);
});

it("shows action when email count is non zero", () => {
  const wrapper = shallow(
    <Email email={emailStub} addEmail={() => {}} addTask={() => {}} emailCount={1} taskCount={0} />
  );
  const subject = <h3>Subject 1</h3>;
  expect(wrapper.contains(subject)).toEqual(true);
  expect(wrapper.contains(hasAction)).toEqual(true);
});

it("shows action when task count is non zero", () => {
  const wrapper = shallow(
    <Email email={emailStub} addEmail={() => {}} addTask={() => {}} emailCount={0} taskCount={2} />
  );
  const subject = <h3>Subject 1</h3>;
  expect(wrapper.contains(subject)).toEqual(true);
  expect(wrapper.contains(hasAction)).toEqual(true);
});
