import React from "react";
import { shallow } from "enzyme";
import { UnconnectedInbox as Inbox } from "../../../components/eMIB/Inbox";
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
  const wrapper = shallow(
    <Inbox
      emails={INBOX_SPECS}
      emailSummaries={[
        { isRead: false, taskCount: 0, emailCount: 0 },
        { isRead: false, taskCount: 0, emailCount: 0 },
        { isRead: false, taskCount: 0, emailCount: 0 }
      ]}
      readEmail={() => {}}
    />
  );
  wrapper.setState({ currentEmail: selected });
  for (let i = 0; i < 3; i++) {
    const currentEmail = INBOX_SPECS[i];
    const subjectHeader = <h3>{currentEmail.subject}</h3>;
    const checkBody = wrapper.contains(subjectHeader);
    if (i === selected) {
      // if the current email is selected, the body should be shown
      expect(checkBody).toEqual(true);
    }
    if (i !== selected) {
      expect(checkBody).toEqual(false);
    }
  }
}
