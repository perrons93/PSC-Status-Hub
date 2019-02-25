import React from "react";
import { mount } from "enzyme";
import BackToTop from "../../../components/commons/BackToTop";
import scrollToTop from "../../../helpers/scrollToTop";

it("renders displayed back to top button", () => {
  const wrapper = mount(<BackToTop />);
  wrapper.setState({ displayButton: "displayed" });
  const backToTopBtn = <span hidden>The back to top button is displayed</span>;
  expect(wrapper.contains(backToTopBtn)).toEqual(true);
});

it("renders hidden back to top button", () => {
  const wrapper = mount(<BackToTop />);
  wrapper.setState({ displayButton: "hidden" });
  const backToTopBtn = <span hidden>The back to top button is hidden</span>;
  expect(wrapper.contains(backToTopBtn)).toEqual(true);
});

it("renders back the scrollTop to zero", () => {
  //fake the current scroll location to 100
  document.body.scrollTop = 100;
  //call the function that Back to top button uses to brings us back to the top of the page
  scrollToTop();
  //make sure that the new scroll location is now set to 0
  expect(document.body.scrollTop).toEqual(0);
});
