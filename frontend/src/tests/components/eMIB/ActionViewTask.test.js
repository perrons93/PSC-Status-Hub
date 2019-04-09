import React from "react";
import { shallow } from "enzyme";
import LOCALIZE from "../../../text_resources";
import ActionViewTask from "../../../components/eMIB/ActionViewTask";
import { ACTION_TYPE } from "../../../components/eMIB/constants";

const actionStub = {
  actionType: ACTION_TYPE.task,
  task: "Liste of my tasks here...",
  reasonForAction: "Reasons for action here..."
};

describe("renders component's content", () => {
  const wrapper = shallow(<ActionViewTask action={actionStub} />);

  it("task content", () => {
    const taskContent = (
      <div>
        <p>{LOCALIZE.emibTest.inboxPage.taskContent.task}</p>
        <p>{"Liste of my tasks here..."}</p>
      </div>
    );
    expect(wrapper.containsMatchingElement(taskContent)).toEqual(true);
  });

  it("reasons for action content", () => {
    const reasonsForActionContent = (
      <div>
        <p>{LOCALIZE.emibTest.inboxPage.emailResponse.reasonsForAction}</p>
        <p>{"Reasons for action here..."}</p>
      </div>
    );
    expect(wrapper.containsMatchingElement(reasonsForActionContent)).toEqual(true);
  });
});
