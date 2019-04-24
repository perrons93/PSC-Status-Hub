import React from "react";
import { shallow } from "enzyme";
import { UnconnectedActionViewTask } from "../../../components/eMIB/ActionViewTask";
import { ACTION_TYPE } from "../../../components/eMIB/constants";

const actionStub = {
  actionType: ACTION_TYPE.task,
  task: "Liste of my tasks here...",
  reasonsForAction: "Reasons for action here..."
};

const emailStub = {
  id: 0,
  to: "To 1",
  from: "From 1",
  subject: "hello team",
  date: "Date 1",
  body: "body"
};

describe("renders component's content", () => {
  const deleteMock = jest.fn();
  const wrapper = shallow(
    <UnconnectedActionViewTask
      action={actionStub}
      actionId={0}
      email={emailStub}
      deleteTask={deleteMock}
    />
  );

  it("task content", () => {
    const taskContent = <p>{"Liste of my tasks here..."}</p>;
    expect(wrapper.containsMatchingElement(taskContent)).toEqual(true);
  });

  it("reasons for action content", () => {
    const reasonsForActionContent = <p>{"Reasons for action here..."}</p>;
    expect(wrapper.containsMatchingElement(reasonsForActionContent)).toEqual(true);
  });
});
