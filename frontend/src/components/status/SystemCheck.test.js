import React from "react";
import { shallow } from "enzyme";
import { Label } from "react-bootstrap";
import SystemCheck from "./SystemCheck";
import LOCALIZE from "../../text_resources";

const failingMessage = <Label>{LOCALIZE.commons.failStatus}</Label>;
const passingMessage = <Label>{LOCALIZE.commons.passStatus}</Label>;

it("renders description", () => {
  const wrapper = shallow(
    <SystemCheck isPassing={false} description={"hello world"} currentSettingsDetails={"details"} />
  );
  const description = "hello world";
  expect(wrapper.contains(description)).toEqual(true);
});

it("renders Fail when isPassing is false", () => {
  const wrapper = shallow(
    <SystemCheck isPassing={false} description={"hello world"} currentSettingsDetails={"details"} />
  );
  expect(wrapper.contains(failingMessage)).toEqual(true);
  expect(wrapper.contains(passingMessage)).toEqual(false);
});

it("renders Pass when isPassing is true", () => {
  const wrapper = shallow(
    <SystemCheck isPassing={true} description={"hello world"} currentSettingsDetails={"details"} />
  );
  expect(wrapper.contains(failingMessage)).toEqual(false);
  expect(wrapper.contains(passingMessage)).toEqual(true);
});

it("renders currentSettingsDetails", () => {
  const wrapper = shallow(
    <SystemCheck
      isPassing={true}
      description={"hello world"}
      currentSettingsDetails={"hello world"}
    />
  );
  const currentSettingsDetails = "hello world";
  expect(wrapper.contains(currentSettingsDetails)).toEqual(true);
});
