import React from "react";
import { shallow } from "enzyme";
import InboxEmail from "../../../components/commons/InboxEmail";

const emailStub = {
  id: 1,
  to: "To 1",
  from: "From 1",
  subject: "Subject 1",
  date: "Date 1",
  body: "Body 1"
};

it("renders title, description, left button and right button titles", () => {
  const wrapper = shallow(<InboxEmail email={emailStub} />);
  const subject = <div>Subject 1</div>;
  const from = <div>From 1</div>;
  const to = <div>To 1</div>;
  const date = <div>Date 1</div>;
  const body = <div>Body 1</div>;
  expect(wrapper.contains(subject)).toEqual(true);
  expect(wrapper.contains(from)).toEqual(true);
  expect(wrapper.contains(to)).toEqual(true);
  expect(wrapper.contains(date)).toEqual(true);
  expect(wrapper.contains(body)).toEqual(true);
});
