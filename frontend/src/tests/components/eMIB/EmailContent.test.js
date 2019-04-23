import React from "react";
import { shallow } from "enzyme";
import EmailContent from "../../../components/eMIB/EmailContent";

describe("email body renders the proper number of <p> tags in the body", () => {
  it("renders only 1 p with a short body", () => {
    testParagraphTags("I am a one line email", 1);
  });

  it("renders only 2 p's with a single \n body", () => {
    testParagraphTags("I am a one line\nI am the next", 2);
  });

  it("renders only 2 p's with a body split by \n\n", () => {
    testParagraphTags("I am a one line\n\nI am the next", 2);
  });

  it("renders only 4 p's despite varying  \n's", () => {
    testParagraphTags("Dear Joe\nHow are you?\n\n\n\n\n\n\nSincerely,\n\nBob", 4);
  });

  function testParagraphTags(body, expectedCount) {
    const emailStub = {
      id: 0,
      to: "To 1",
      from: "From 1",
      subject: "Subject 1",
      date: "Date 1",
      body: body
    };
    const wrapper = shallow(<EmailContent email={emailStub} />);
    expect(wrapper.find("p").length).toEqual(expectedCount);
  }
});
