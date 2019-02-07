import React from "react";
import { shallow } from "enzyme";
import { Label } from "react-bootstrap";
import StatusCheck from "./StatusCheck";

const failingMessage = <Label>Fail</Label>;
const passingMessage = <Label>Pass</Label>;

it("renders description", () => {
  const wrapper = shallow(<StatusCheck isPassing={false} description="hello world" />);
  const description = "hello world";
  expect(wrapper.contains(description)).toEqual(true);
});

it("renders fail when isPassing is false", () => {
  const wrapper = shallow(<StatusCheck isPassing={false} description="hello world" />);
  expect(wrapper.contains(failingMessage)).toEqual(true);
  expect(wrapper.contains(passingMessage)).toEqual(false);
});

it("renders pass when isPassing is true", () => {
  const wrapper = shallow(<StatusCheck isPassing={true} description="hello world" />);
  expect(wrapper.contains(failingMessage)).toEqual(false);
  expect(wrapper.contains(passingMessage)).toEqual(true);
});
