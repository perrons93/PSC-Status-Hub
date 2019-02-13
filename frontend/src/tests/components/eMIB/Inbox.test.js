import React from "react";
import { shallow } from "enzyme";
import Inbox from "../../../components/eMIB/Inbox";
import { LANGUAGES } from "../../../components/commons/Translation";
import LOCALIZE from "../../../text_resources";

it("renders Inbox Page Title in English", () => {
  LOCALIZE.setLanguage(LANGUAGES.english);
  const wrapper = shallow(<Inbox />);
  const inboxPageTitle = <h2>{LOCALIZE.emibTest.inboxPage.title}</h2>;
  expect(wrapper.contains(inboxPageTitle)).toEqual(true);
});

it("renders Inbox Page Title in French", () => {
  LOCALIZE.setLanguage(LANGUAGES.french);
  const wrapper = shallow(<Inbox />);
  const inboxPageTitle = <h2>{LOCALIZE.emibTest.inboxPage.title}</h2>;
  expect(wrapper.contains(inboxPageTitle)).toEqual(true);
});
