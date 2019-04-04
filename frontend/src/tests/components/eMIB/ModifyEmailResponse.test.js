import React from "react";
import { shallow } from "enzyme";
import ModifyEmailResponse, {
  RESPONSE_TYPE,
  MODIFICATION_TYPE,
  styles
} from "../../../components/eMIB/ModifyEmailResponse";
import LOCALIZE from "../../../text_resources";

it("renders Add Email dialog", () => {
  testCore(RESPONSE_TYPE.email, MODIFICATION_TYPE.add);
});

it("renders Modify Email dialog", () => {
  testCore(RESPONSE_TYPE.email, MODIFICATION_TYPE.modify);
});

it("renders Add Task dialog", () => {
  testCore(RESPONSE_TYPE.task, MODIFICATION_TYPE.add);
});

it("renders Modify Task dialog", () => {
  testCore(RESPONSE_TYPE.task, MODIFICATION_TYPE.modify);
});

function testCore(responseType, modificationType) {
  //Simulation of the save function
  const saveMock = jest.fn();

  //shallow wrapper of the dialog
  const wrapper = shallow(
    <ModifyEmailResponse
      showDialog={true}
      handleClose={() => {}}
      saveEmail={saveMock}
      responseType={responseType}
      modificationType={modificationType}
    />
  );

  // The components to test; these should only be present when the proper parameters are passed in
  const emailIcon = <i className="fas fa-envelope" />;
  const taskIcon = <i className="fas fa-tasks" />;
  const addSpan = <span>{LOCALIZE.emibTest.inboxPage.modifyEmailResponse.add}</span>;
  const modifySpan = <span>{LOCALIZE.emibTest.inboxPage.modifyEmailResponse.modify}</span>;

  // Check if it is an email or a task
  if (responseType === RESPONSE_TYPE.email) {
    expect(wrapper.contains(emailIcon)).toEqual(true);
    expect(wrapper.contains(taskIcon)).toEqual(false);
  }
  if (responseType === RESPONSE_TYPE.task) {
    expect(wrapper.contains(emailIcon)).toEqual(false);
    expect(wrapper.contains(taskIcon)).toEqual(true);
  }

  // Check if it is an addition or a modification
  if (modificationType === MODIFICATION_TYPE.add) {
    expect(wrapper.contains(addSpan)).toEqual(true);
    expect(wrapper.contains(modifySpan)).toEqual(false);
  }
  if (modificationType === MODIFICATION_TYPE.modify) {
    expect(wrapper.contains(addSpan)).toEqual(false);
    expect(wrapper.contains(modifySpan)).toEqual(true);
  }

  //Check that the button click triggers the function
  wrapper.find("#unit-test-email-response-button").simulate("click");
  expect(saveMock).toHaveBeenCalledTimes(1);
}
