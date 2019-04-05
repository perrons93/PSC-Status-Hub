import React from "react";
import { shallow } from "enzyme";
import ActionViewEmail, { EMAIL_TYPE } from "../../../components/eMIB/ActionViewEmail";

describe("Response types", () => {
  const reply = <i className="fas fa-reply" />;
  const replyAll = <i className="fas fa-reply-all" />;
  const forward = <i className="fas fa-share-square" />;

  it("renders reply response", () => {
    const wrapper = shallow(
      <ActionViewEmail
        responseType={EMAIL_TYPE.reply}
        to={"to"}
        cc={"cc"}
        response={"response"}
        reasonsForAction={"reasons"}
      />
    );

    expect(wrapper.containsMatchingElement(reply)).toEqual(true);
    expect(wrapper.containsMatchingElement(replyAll)).toEqual(false);
    expect(wrapper.containsMatchingElement(forward)).toEqual(false);
  });

  it("renders reply all response", () => {
    const wrapper = shallow(
      <ActionViewEmail
        responseType={EMAIL_TYPE.replyAll}
        to={"to"}
        cc={"cc"}
        response={"response"}
        reasonsForAction={"reasons"}
      />
    );

    expect(wrapper.containsMatchingElement(reply)).toEqual(false);
    expect(wrapper.containsMatchingElement(replyAll)).toEqual(true);
    expect(wrapper.containsMatchingElement(forward)).toEqual(false);
  });

  it("renders forward response", () => {
    const wrapper = shallow(
      <ActionViewEmail
        responseType={EMAIL_TYPE.forward}
        to={"to"}
        cc={"cc"}
        response={"response"}
        reasonsForAction={"reasons"}
      />
    );

    expect(wrapper.containsMatchingElement(reply)).toEqual(false);
    expect(wrapper.containsMatchingElement(replyAll)).toEqual(false);
    expect(wrapper.containsMatchingElement(forward)).toEqual(true);
  });
});

describe("Email header", () => {
  const headerWithCc = <span>cc</span>;

  it("renders email's header with cc)", () => {
    const wrapper = shallow(
      <ActionViewEmail
        responseType={EMAIL_TYPE.reply}
        to={"to"}
        cc={"cc"}
        response={"response"}
        reasonsForAction={"reasons"}
      />
    );

    expect(wrapper.containsMatchingElement(headerWithCc)).toEqual(true);
  });

  it("renders email's header without cc)", () => {
    const wrapper = shallow(
      <ActionViewEmail
        responseType={EMAIL_TYPE.reply}
        to={"to"}
        response={"response"}
        reasonsForAction={"reasons"}
      />
    );

    expect(wrapper.containsMatchingElement(headerWithCc)).toEqual(false);
  });
});
