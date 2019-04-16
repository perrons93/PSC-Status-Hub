import React from "react";
import { shallow } from "enzyme";
import { UnconnectedActionViewTask } from "../../../components/eMIB/ActionViewTask";
import { ACTION_TYPE } from "../../../components/eMIB/constants";

const actionStub = {
  actionType: ACTION_TYPE.task,
  task: "Liste of my tasks here...",
  reasonsForAction: "Reasons for action here..."
};

describe("renders component's content", () => {
  const deleteMock = jest.fn();
  const wrapper = shallow(
    <UnconnectedActionViewTask
      action={actionStub}
      actionId={0}
      emailId={1}
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
