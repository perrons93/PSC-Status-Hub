import React from "react";
import { shallow } from "enzyme";
import CollapsingItemContainer, {
  ICON_TYPE
} from "../../../components/eMIB/CollapsingItemContainer";

const body = { body: <div>body</div> };
describe("Icons content types", () => {
  const emailIcon = <i className="fas fa-envelope" />;
  const taskIcon = <i className="fas fa-tasks" />;

  it("renders email icon", () => {
    const emailWrapper = shallow(
      <CollapsingItemContainer iconType={ICON_TYPE.email} title={"title"} body={body} />
    );
    expect(emailWrapper.containsMatchingElement(emailIcon)).toEqual(true);
    expect(emailWrapper.containsMatchingElement(taskIcon)).toEqual(false);
  });

  it("renders task icon", () => {
    const taskWrapper = shallow(
      <CollapsingItemContainer iconType={ICON_TYPE.task} title={"title"} body={<div>body</div>} />
    );
    expect(taskWrapper.containsMatchingElement(emailIcon)).toEqual(false);
    expect(taskWrapper.containsMatchingElement(taskIcon)).toEqual(true);
  });
});

describe("Icons collapsing types", () => {
  const wrapper = shallow(
    <CollapsingItemContainer iconType={ICON_TYPE.email} title={"title"} body={body} />
  );

  const arrowDownIconDisplayed = <i className="fas fa-angle-down blue-expand-icon" />;
  const arrowUpIconDisplayed = <i className="fas fa-angle-up white-expand-icon" />;

  it("renders arrow up icon", () => {
    wrapper.setState({ isCollapsed: true });
    expect(wrapper.containsMatchingElement(arrowDownIconDisplayed)).toEqual(true);
    expect(wrapper.containsMatchingElement(arrowUpIconDisplayed)).toEqual(false);
  });

  it("renders arrow down icon", () => {
    wrapper.setState({ isCollapsed: false });
    expect(wrapper.containsMatchingElement(arrowDownIconDisplayed)).toEqual(false);
    expect(wrapper.containsMatchingElement(arrowUpIconDisplayed)).toEqual(true);
  });
});

/*it("renders title and/or body depending on the 'isCollapsed ' state", () => {
  const wrapper = shallow(
    <CollapsingItemContainer iconType={ICON_TYPE.email} title={"title"} body={body} />
  );

  //display only title
  const contentWhenClosed = (
    <div>
      <button>
        <span />
        title
      </button>
      <span />
    </div>
  );

  //display title and body
  const contentWhenExpanded = (
    <div>
      <button>
        <span />
        title
      </button>
      <span />
      <div>{body}</div>
    </div>
  );

  //collapsing item is closed
  wrapper.setState({ isCollapsed: true });
  expect(wrapper.containsMatchingElement(contentWhenClosed)).toEqual(true);

  //collapsing item is expanded
  wrapper.setState({ isCollapsed: false });
  expect(wrapper.containsMatchingElement(contentWhenExpanded)).toEqual(true);
});*/
