import React from "react";
import { mount } from "enzyme";
import Inbox from "../../../components/eMIB/Inbox";
import InboxButton from "../../../components/commons/InboxButton";
import InboxEmail from "../../../components/commons/InboxEmail";
import { LANGUAGES } from "../../../components/commons/Translation";
import LOCALIZE from "../../../text_resources";
import { getInboxContent } from "../../../components/eMIB/Emib";

const INBOX_SPECS = getInboxContent();

it("Shows only email 1", () => {
  testCore(0);
});

it("Shows only email 2", () => {
  testCore(1);
});

it("Shows only email 3", () => {
  testCore(2);
});

it("Shows only email 4", () => {
  testCore(3);
});

it("Shows only email 5", () => {
  testCore(4);
});

it("Shows only email 6", () => {
  testCore(5);
});

it("Shows only email 7", () => {
  testCore(6);
});

it("Shows only email 8", () => {
  testCore(7);
});

it("Shows only email 9", () => {
  testCore(8);
});

it("Shows only email 10", () => {
  testCore(9);
});

function testCore(selected) {
  const wrapper = mount(<Inbox inboxSpecs={INBOX_SPECS} />);
  wrapper.setState({ currentEmail: selected });
  for (let i = 0; i < 10; i++) {
    const currentEmail = INBOX_SPECS[i];
    const emailBody = <InboxEmail email={currentEmail} />;
    const checkBody = wrapper.contains(emailBody);
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
