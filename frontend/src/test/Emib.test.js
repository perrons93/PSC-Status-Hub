import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import Emib, { PAGES } from "../components/eMIB/Emib";

it("renders welcome page", () => {
  const wrapper = shallow(<Emib />);
  const initialMessage = <p>Welcome to the eMIB Sample Test</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
  expect(wrapper.state("curPage")).toEqual(PAGES.welcome);
});

it("renders howTo page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.howTo });
  const initialMessage = <h2>HowTo Page</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders background page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.background });
  const initialMessage = <h2>Background Page</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders inbox page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.inbox });
  const initialMessage = <h2>Inbox</h2>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});

it("renders confirm page", () => {
  const wrapper = mount(<Emib />);
  wrapper.setState({ curPage: PAGES.confirm });
  const initialMessage = <p>Submission Confirmed</p>;
  expect(wrapper.contains(initialMessage)).toEqual(true);
});
