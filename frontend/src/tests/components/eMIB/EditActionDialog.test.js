import React from "react";
import { shallow, mount } from "enzyme";
import { UnconnectedEditActionDialog as EditActionDialog } from "../../../components/eMIB/EditActionDialog";
import { ACTION_TYPE, EDIT_MODE, EMAIL_TYPE } from "../../../components/eMIB/constants";

describe("email action type", () => {
  it("renders Add Email dialog", () => {
    testCore(ACTION_TYPE.email, EDIT_MODE.create);
  });

  it("renders Modify Email dialog", () => {
    testCore(ACTION_TYPE.email, EDIT_MODE.update);
  });
});

describe("task action type", () => {
  it("renders Add Task dialog", () => {
    testCore(ACTION_TYPE.task, EDIT_MODE.create);
  });

  it("renders Modify Task dialog", () => {
    testCore(ACTION_TYPE.task, EDIT_MODE.update);
  });
});

function testCore(actionType, editMode) {
  //Simulation of the save function
  const addEmail = jest.fn();
  const addTask = jest.fn();

  //shallow wrapper of the dialog
  const wrapper = shallow(
    <EditActionDialog
      emailId={1}
      emailSubject={"hello team"}
      showDialog={true}
      handleClose={() => {}}
      addEmail={addEmail}
      addTask={addTask}
      actionType={actionType}
      editMode={editMode}
    />
  );

  // The components to test; these should only be present when the proper parameters are passed in
  const emailIcon = "fas fa-envelope";
  const taskIcon = "fas fa-tasks";

  // Check if it is an email or a task
  if (actionType === ACTION_TYPE.email) {
    expect(wrapper.find("i").hasClass(emailIcon)).toEqual(true);
    expect(wrapper.find("i").hasClass(taskIcon)).toEqual(false);
  }
  if (actionType === ACTION_TYPE.task) {
    expect(wrapper.find("i").hasClass(emailIcon)).toEqual(false);
    expect(wrapper.find("i").hasClass(taskIcon)).toEqual(true);
  }

  //Check that the button click triggers the function
  wrapper.find("#unit-test-email-response-button").simulate("click");
  if (actionType === ACTION_TYPE.email) {
    expect(addTask).toHaveBeenCalledTimes(0);
    expect(addEmail).toHaveBeenCalledTimes(1);
  } else if (actionType === ACTION_TYPE.task) {
    expect(addTask).toHaveBeenCalledTimes(1);
    expect(addEmail).toHaveBeenCalledTimes(0);
  }
}

describe("email action type", () => {
  it("renders Add Email dialog without filled fields", () => {
    testMode(ACTION_TYPE.email, EDIT_MODE.create);
  });

  it("renders Modify Email dialog with filled fields", () => {
    testMode(ACTION_TYPE.email, EDIT_MODE.update);
  });
});

function testMode(actionType, editMode) {
  //Simulation of the save function
  const addEmail = jest.fn();
  const addTask = jest.fn();
  const reasonForAction = "reasons";
  const emailTo = "to";
  const emailCc = "cc";
  const emailBody = "body of email";
  const task = "task";
  const emailType = EMAIL_TYPE.forward;

  const actionStub = {
    actionType: actionType,
    reasonForAction: reasonForAction,
    emailTo: emailTo,
    emailCc: emailCc,
    emailBody: emailBody,
    task: task,
    emailType: emailType
  };

  //shallow wrapper of the dialog
  const wrapper = mount(
    <EditActionDialog
      emailId={1}
      emailSubject={"hello team"}
      showDialog={true}
      handleClose={() => {}}
      addEmail={addEmail}
      addTask={addTask}
      actionType={actionType}
      editMode={editMode}
      action={actionStub}
    />
  );

  if (actionType === ACTION_TYPE.email) {
    //const inputEmailType = wrapper.find("#unit-test-popup-box-title");
    const inputEmailTo = wrapper.find("#to-field");
    const inputEmailCc = wrapper.find("#cc-field");
    const inputEmailBody = wrapper.find("#your-response-text-area");
    const inputReasonForAction = wrapper.find("#reasons-for-action-text-area");

    //expect(inputEmailType.value).toEqual(emailType);
    expect(inputEmailTo.props().value).toEqual(emailTo);
    expect(inputEmailCc.props().value).toEqual(emailCc);
    expect(inputEmailBody.props().value).toEqual(emailBody);
    expect(inputReasonForAction.props().value).toEqual(reasonForAction);
    //TODO jcherry: this should fail if the trype is not update
  } else if (actionType === ACTION_TYPE.task) {
    //TODO jcherry populate this when task editing has been added
  }
}
