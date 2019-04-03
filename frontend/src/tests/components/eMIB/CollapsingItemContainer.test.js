import React from "react";
import { shallow } from "enzyme";
import CollapsingItemContainer, {
  ICON_TYPE
} from "../../../components/eMIB/CollapsingItemContainer";

const body = { body: <div>body</div> };

it("renders the right icon types (email, task)", () => {
  //email
  const emailWrapper = shallow(
    <CollapsingItemContainer iconType={ICON_TYPE.email} title={"title"} body={body} />
  );

  //task
  const taskWrapper = shallow(
    <CollapsingItemContainer iconType={ICON_TYPE.task} title={"title"} body={<div>body</div>} />
  );

  const buttonWithEmailIcon = (
    <button>
      <span className="fas fa-envelope" />
      title
    </button>
  );

  const buttonWithTaskIcon = (
    <button>
      <span className="fas fa-tasks" />
      title
    </button>
  );

  //email
  expect(emailWrapper.containsMatchingElement(buttonWithEmailIcon)).toEqual(true);
  expect(emailWrapper.containsMatchingElement(buttonWithTaskIcon)).toEqual(false);

  //task
  expect(taskWrapper.containsMatchingElement(buttonWithEmailIcon)).toEqual(false);
  expect(taskWrapper.containsMatchingElement(buttonWithTaskIcon)).toEqual(true);
});

it("renders the right arrow (up, down) icons when closed or expanded", () => {
  const wrapper = shallow(
    <CollapsingItemContainer iconType={ICON_TYPE.email} title={"title"} body={body} />
  );

  const arrowDownIconDisplayed = (
    <div className=" collapsing-item-container">
      <button className="btn btn-secondary">
        <span className={ICON_TYPE.email} />
        title
      </button>
      <span className="fas fa-angle-down blue-expand-icon" />
    </div>
  );
  const arrowUpIconDisplayed = (
    <div className="expanded-container-style collapsing-item-container">
      <button>
        <span className={ICON_TYPE.email} />
        title
      </button>
      <span className="fas fa-angle-up white-expand-icon" />
      <div>{body}</div>
    </div>
  );

  //arrow 'down' icon displayed (when closed)
  wrapper.setState({ isCollapsed: true });
  expect(wrapper.containsMatchingElement(arrowDownIconDisplayed)).toEqual(true);
  expect(wrapper.containsMatchingElement(arrowUpIconDisplayed)).toEqual(false);

  //arrow 'up' icon displayed (when expanded)
  wrapper.setState({ isCollapsed: false });
  expect(wrapper.containsMatchingElement(arrowDownIconDisplayed)).toEqual(false);
  expect(wrapper.containsMatchingElement(arrowUpIconDisplayed)).toEqual(true);
});

it("renders title and/or body depending on the 'isCollapsed ' state", () => {
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
});
