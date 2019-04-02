import React from "react";
import { mount } from "enzyme";
import Inbox from "../../../components/eMIB/Inbox";
import { emailsJson } from "../../../modules/sampleEmibJson";

const INBOX_SPECS = emailsJson.emailsEN;

it("Shows only email 1", () => {
  testCore(0);
});

it("Shows only email 2", () => {
  testCore(1);
});

it("Shows only email 3", () => {
  testCore(2);
});

function testCore(selected) {
  const wrapper = mount(<Inbox inboxLength={3} />);
  wrapper.setState({ currentEmail: selected });
  for (let i = 0; i < 10; i++) {
    const currentEmail = INBOX_SPECS[i];
    const subjectHeader = <h3>{currentEmail.subject}</h3>;
    const checkBody = wrapper.contains(subjectHeader);
    if (i === selected) {
      // if the current one is selected
      expect(checkBody).toEqual(true);
    }
    if (i !== selected) {
      // if not
      expect(checkBody).toEqual(false);
    }
  }
}
