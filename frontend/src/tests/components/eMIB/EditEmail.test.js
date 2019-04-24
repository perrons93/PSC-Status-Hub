import React from "react";
import { mount } from "enzyme";
import EditEmail from "../../../components/eMIB/EditEmail";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

//Note: need to use mount, otherwise the radiobuttons are not found for some reason

const initialState = {
  emibInbox: {
    addressBook: [
      { id: 0, name: "Joe", role: "Developer" },
      { id: 1, name: "Bob", role: "Developer" },
      { id: 2, name: "Smithers", role: "Butler" },
      { id: 3, name: "Arthur", role: "King of Britain" },
      { id: 4, name: "Richard", role: "Lionheart" },
      { id: 5, name: "Robert", role: "The Bruce" }
    ]
  }
};

const mockStore = configureStore();

describe("check that the disabled prop works as expected", () => {
  it("inputs are not disabled if flag is not present", () => {
    const wrapper = mount(
      <Provider store={mockStore(initialState)}>
        <EditEmail onChange={() => {}} />
      </Provider>
    );
    expect(wrapper.find("#reply-radio").prop("disabled")).toEqual(false);
    expect(wrapper.find("#reply-all-radio").prop("disabled")).toEqual(false);
    expect(wrapper.find("#forward-radio").prop("disabled")).toEqual(false);
    expect(wrapper.find("#to-field").prop("disabled")).toEqual(false);
    expect(wrapper.find("#cc-field").prop("disabled")).toEqual(false);
    expect(wrapper.find("#your-response-text-area").prop("disabled")).toEqual(false);
    expect(wrapper.find("#reasons-for-action-text-area").prop("disabled")).toEqual(false);
  });

  it("inputs are not disabled if flag is set to false", () => {
    const wrapper = mount(
      <Provider store={mockStore(initialState)}>
        <EditEmail onChange={() => {}} disabled={false} />
      </Provider>
    );
    expect(wrapper.find("#reply-radio").prop("disabled")).toEqual(false);
    expect(wrapper.find("#reply-all-radio").prop("disabled")).toEqual(false);
    expect(wrapper.find("#forward-radio").prop("disabled")).toEqual(false);
    expect(wrapper.find("#to-field").prop("disabled")).toEqual(false);
    expect(wrapper.find("#cc-field").prop("disabled")).toEqual(false);
    expect(wrapper.find("#your-response-text-area").prop("disabled")).toEqual(false);
    expect(wrapper.find("#reasons-for-action-text-area").prop("disabled")).toEqual(false);
  });

  it("inputs are disabled if flag is set to true", () => {
    const wrapper = mount(
      <Provider store={mockStore(initialState)}>
        <EditEmail onChange={() => {}} disabled={true} />
      </Provider>
    );
    expect(wrapper.find("#reply-radio").prop("disabled")).toEqual(true);
    expect(wrapper.find("#reply-all-radio").prop("disabled")).toEqual(true);
    expect(wrapper.find("#forward-radio").prop("disabled")).toEqual(true);
    expect(wrapper.find("#to-field").prop("disabled")).toEqual(true);
    expect(wrapper.find("#cc-field").prop("disabled")).toEqual(true);
    expect(wrapper.find("#your-response-text-area").prop("disabled")).toEqual(true);
    expect(wrapper.find("#reasons-for-action-text-area").prop("disabled")).toEqual(true);
  });
});
