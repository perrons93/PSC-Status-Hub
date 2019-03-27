import React from "react";
import { shallow } from "enzyme";
import EmailPreview from "../../../components/eMIB/EmailPreview";

const emailStub = {
  id: 1,
  to: "To 1",
  from: "From 1",
  subject: "Subject 1",
  date: "Date 1",
  body: "Body 1"
};

it("renders title, description, left button and right button titles", () => {
  const wrapper = shallow(<EmailPreview email={emailStub} clickFunction={() => {}} />);
  const subject = <div>Subject 1</div>;
  const from = <div>From 1</div>;
  expect(wrapper.contains(subject)).toEqual(true);
  expect(wrapper.contains(from)).toEqual(true);
});
