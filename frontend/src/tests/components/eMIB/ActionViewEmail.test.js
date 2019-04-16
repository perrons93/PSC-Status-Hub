import React from "react";
import { shallow } from "enzyme";
import { UnconnectedActionViewEmail } from "../../../components/eMIB/ActionViewEmail";
import { EMAIL_TYPE, ACTION_TYPE } from "../../../components/eMIB/constants";

describe("Response types", () => {
  const reply = <i className="fas fa-reply" />;
  const replyAll = <i className="fas fa-reply-all" />;
  const forward = <i className="fas fa-share-square" />;

  it("renders reply response", () => {
    const wrapper = genWrapper(EMAIL_TYPE.reply, "cc");

    expect(wrapper.containsMatchingElement(reply)).toEqual(true);
    expect(wrapper.containsMatchingElement(replyAll)).toEqual(false);
    expect(wrapper.containsMatchingElement(forward)).toEqual(false);
  });

  it("renders reply all response", () => {
    const wrapper = genWrapper(EMAIL_TYPE.replyAll, "cc");

    expect(wrapper.containsMatchingElement(reply)).toEqual(false);
    expect(wrapper.containsMatchingElement(replyAll)).toEqual(true);
    expect(wrapper.containsMatchingElement(forward)).toEqual(false);
  });

  it("renders forward response", () => {
    const wrapper = genWrapper(EMAIL_TYPE.forward, "cc");

    expect(wrapper.containsMatchingElement(reply)).toEqual(false);
    expect(wrapper.containsMatchingElement(replyAll)).toEqual(false);
    expect(wrapper.containsMatchingElement(forward)).toEqual(true);
  });
});

describe("Email header", () => {
  const headerWithCc = <span>cc</span>;

  it("renders email's header with cc)", () => {
    const wrapper = genWrapper(EMAIL_TYPE.reply, "cc");

    expect(wrapper.containsMatchingElement(headerWithCc)).toEqual(true);
  });

  it("renders email's header without cc)", () => {
    const wrapper = genWrapper(EMAIL_TYPE.reply, null);

    expect(wrapper.containsMatchingElement(headerWithCc)).toEqual(false);
  });
});

function genWrapper(responseType, cc) {
  return createWrapper(responseType, cc, () => {});
}

function createWrapper(responseType, cc, deleteEmail) {
  const actionStub = {
    actionType: ACTION_TYPE.email,
    reasonsForAction: "reasons",
    emailType: responseType,
    emailTo: "to",
    emailCc: cc,
    emailBody: "reasons"
  };

  return shallow(
    <UnconnectedActionViewEmail
      actionId={0}
      action={actionStub}
      emailId={1}
      deleteEmail={deleteEmail}
    />
  );
}
