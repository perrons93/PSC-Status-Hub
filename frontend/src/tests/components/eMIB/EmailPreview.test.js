import React from "react";
import { mount } from "enzyme";
import EmailPreview from "../../../components/eMIB/EmailPreview";

const emailStub = {
  id: 1,
  to: "To Stub",
  from: "From Stub",
  subject: "Subject Stub",
  date: "Date Stub",
  body: "Body Stub"
};

it("Email preview for isRead=true; isRepliedTo=true, isSelected=true", () => {
  testCore(true, true, true);
});

it("Email preview for isRead=true; isRepliedTo=true, isSelected=false", () => {
  testCore(true, true, false);
});

it("Email preview for isRead=true; isRepliedTo=false, isSelected=true", () => {
  testCore(true, false, true);
});

it("Email preview for isRead=true; isRepliedTo=false, isSelected=false", () => {
  testCore(true, false, false);
});

it("Email preview for isRead=false; isRepliedTo=true, isSelected=true", () => {
  testCore(false, true, true);
});

it("Email preview for isRead=false; isRepliedTo=true, isSelected=false", () => {
  testCore(false, true, false);
});

it("Email preview for isRead=false; isRepliedTo=false, isSelected=true", () => {
  testCore(false, false, true);
});

it("Email preview for isRead=false; isRepliedTo=false, isSelected=false", () => {
  testCore(false, false, false);
});

function testCore(isRead, isRepliedTo, isSelected) {
  const wrapper = mount(
    <EmailPreview
      email={emailStub}
      clickFunction={() => {}}
      isRead={isRead}
      isRepliedTo={isRepliedTo}
      isSelected={isSelected}
    />
  );
  const unread = <i className="fas fa-envelope" />;
  const read = <i className="far fa-envelope-open" />;
  const reply = <i className="fas fa-sign-out-alt" />;
  if (isRead) {
    expect(wrapper.contains(read)).toEqual(true);
    expect(wrapper.contains(unread)).toEqual(false);
  }
  if (!isRead) {
    expect(wrapper.contains(read)).toEqual(false);
    expect(wrapper.contains(unread)).toEqual(true);
  }
  if (isRepliedTo) {
    expect(wrapper.contains(reply)).toEqual(true);
  }
  if (!isRepliedTo) {
    expect(wrapper.contains(reply)).toEqual(false);
  }
  if (isSelected) {
    expect(wrapper.find("#unit-test-selected-email-preview").exists()).toEqual(true);
    expect(wrapper.find("#unit-test-unselected-email-preview").exists()).toEqual(false);
  }
  if (!isSelected) {
    expect(wrapper.find("#unit-test-selected-email-preview").exists()).toEqual(false);
    expect(wrapper.find("#unit-test-unselected-email-preview").exists()).toEqual(true);
  }
}
