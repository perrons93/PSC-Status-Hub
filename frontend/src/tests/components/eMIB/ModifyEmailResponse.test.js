import React from "react";
import { shallow } from "enzyme";
import ModifyEmailResponse, {
  RESPONSE_TYPE,
  MODIFICATION_TYPE
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
  const saveMock = jest.fn();
  const wrapper = shallow(
    <ModifyEmailResponse
      showDialog={true}
      handleClose={() => {}}
      saveEmail={saveMock}
      responseType={responseType}
      modificationType={modificationType}
    />
  );
  const emailIcon = <i className="fas fa-envelope" />;
  const taskIcon = <i className="fas fa-tasks" />;
  if (responseType === RESPONSE_TYPE.email) {
    expect(wrapper.contains(emailIcon)).toEqual(true);
    expect(wrapper.contains(taskIcon)).toEqual(false);
  }

  if (responseType === RESPONSE_TYPE.task) {
    expect(wrapper.contains(emailIcon)).toEqual(false);
    expect(wrapper.contains(taskIcon)).toEqual(true);
  }
  wrapper.find("#unit-test-email-response-button").simulate("click");
  expect(saveMock).toHaveBeenCalledTimes(1);
}
