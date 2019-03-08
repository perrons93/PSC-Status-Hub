import React from "react";
import { mount } from "enzyme";
import SystemMessage, {
  MESSAGE_TYPE,
  UNIT_TEST_VALIDATION
} from "../../../components/commons/SystemMessage";

it("renders warning message", () => {
  const wrapper = mount(
    <SystemMessage messageType={MESSAGE_TYPE.warning} title={"title"} message={"message"} />
  );
  const msgTypeValidation = UNIT_TEST_VALIDATION.validation;
  const title = <h3>title</h3>;
  const message = <p>message</p>;
  expect(msgTypeValidation === MESSAGE_TYPE.warning).toEqual(true);
  expect(wrapper.contains(title)).toEqual(true);
  expect(wrapper.contains(message)).toEqual(true);
});

it("renders default message (warning)", () => {
  const wrapper = mount(
    <SystemMessage messageType={"hello world"} title={"title"} message={"message"} />
  );
  const msgTypeValidation = UNIT_TEST_VALIDATION.validation;
  const title = <h3>title</h3>;
  const message = <p>message</p>;
  expect(msgTypeValidation === MESSAGE_TYPE.warning).toEqual(true);
  expect(wrapper.contains(title)).toEqual(true);
  expect(wrapper.contains(message)).toEqual(true);
});

it("renders error message", () => {
  const wrapper = mount(
    <SystemMessage messageType={MESSAGE_TYPE.error} title={"title"} message={"message"} />
  );
  const msgTypeValidation = UNIT_TEST_VALIDATION.validation;
  const title = <h3>title</h3>;
  const message = <p>message</p>;
  expect(msgTypeValidation === MESSAGE_TYPE.error).toEqual(true);
  expect(wrapper.contains(title)).toEqual(true);
  expect(wrapper.contains(message)).toEqual(true);
});
