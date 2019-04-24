import React from "react";
import { shallow } from "enzyme";
import { UnconnectedActionViewEmail } from "../../../components/eMIB/ActionViewEmail";
import { EMAIL_TYPE, ACTION_TYPE } from "../../../components/eMIB/constants";
import { transformContactName } from "../../../helpers/transformations";

const addressBook = [
  { id: 0, name: "Joe", role: "Developer" },
  { id: 1, name: "Bob", role: "Developer" },
  { id: 2, name: "Smithers", role: "Butler" },
  { id: 3, name: "Arthur", role: "King of Britain" },
  { id: 4, name: "Richard", role: "Lionheart" },
  { id: 5, name: "Robert", role: "The Bruce" }
];
const ccValue = addressBook[3].id;
const ccText = transformContactName(addressBook[3]);

describe("Response types", () => {
  const reply = <i className="fas fa-reply" />;
  const replyAll = <i className="fas fa-reply-all" />;
  const forward = <i className="fas fa-share-square" />;

  it("renders reply response", () => {
    const wrapper = genWrapper(EMAIL_TYPE.reply, ccValue);

    expect(wrapper.containsMatchingElement(reply)).toEqual(true);
    expect(wrapper.containsMatchingElement(replyAll)).toEqual(false);
    expect(wrapper.containsMatchingElement(forward)).toEqual(false);
  });

  it("renders reply all response", () => {
    const wrapper = genWrapper(EMAIL_TYPE.replyAll, ccValue);

    expect(wrapper.containsMatchingElement(reply)).toEqual(false);
    expect(wrapper.containsMatchingElement(replyAll)).toEqual(true);
    expect(wrapper.containsMatchingElement(forward)).toEqual(false);
  });

  it("renders forward response", () => {
    const wrapper = genWrapper(EMAIL_TYPE.forward, ccValue);

    expect(wrapper.containsMatchingElement(reply)).toEqual(false);
    expect(wrapper.containsMatchingElement(replyAll)).toEqual(false);
    expect(wrapper.containsMatchingElement(forward)).toEqual(true);
  });
});

describe("Email header", () => {
  const headerWithCc = <span>{ccText}</span>;

  it("renders email's header with cc)", () => {
    const wrapper = genWrapper(EMAIL_TYPE.reply, ccValue);

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
    emailTo: ["to"],
    emailCc: [cc],
    emailBody: "reasons"
  };

  return shallow(
    <UnconnectedActionViewEmail
      actionId={0}
      action={actionStub}
      emailId={1}
      deleteEmail={deleteEmail}
      addressBook={addressBook}
    />
  );
}
