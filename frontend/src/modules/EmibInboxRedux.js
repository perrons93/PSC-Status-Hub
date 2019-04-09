import { emailsJson } from "./sampleEmibJson";
import { SET_LANGUAGE } from "./LocalizeRedux";
import { ACTION_TYPE } from "../components/eMIB/constants";

// Initializers
export const initializeEmailSummaries = length => {
  let emailSummaries = [];
  for (let i = 0; i < length; i++) {
    emailSummaries.push({ isRead: false, emailCount: 0, taskCount: 0 });
  }
  return emailSummaries;
};

const initializeEmailActions = length => {
  let emailActions = [];
  for (let i = 0; i < length; i++) {
    emailActions.push([]);
  }
  return emailActions;
};

// Action Types
const READ_EMAIL = "emibInbox/READ_EMAIL";
const ADD_EMAIL = "emibInbox/ADD_EMAIL";
const ADD_TASK = "emibInbox/ADD_TASK";
const UPDATE_EMAIL = "emibInbox/UPDATE_EMAIL";
const UPDATE_TASK = "emibInbox/UPDATE_TASK";

// Action Creators
const readEmail = emailIndex => ({ type: READ_EMAIL, emailIndex });
// emailIndex refers to the index of the original parent email and emailAction is an actionShape
const addEmail = (emailIndex, emailAction) => ({ type: ADD_EMAIL, emailIndex, emailAction });
// emailIndex refers to the index of the original parent email and taskAction is an actionShape
const addTask = (emailIndex, taskAction) => ({ type: ADD_TASK, emailIndex, taskAction });
// emailIndex refers to the index of the original parent email, responseId is the id of the response that is being edited and emailAction is an actionShape
const updateEmail = (emailIndex, responseId, emailAction) => ({
  type: UPDATE_EMAIL,
  emailIndex,
  responseId,
  emailAction
});
// emailIndex refers to the index of the original parent email, responseId is the id of the response that is being edited, and taskAction is an actionShape
const updateTask = (emailIndex, responseId, taskAction) => ({
  type: UPDATE_TASK,
  emailIndex,
  responseId,
  taskAction
});

// Initial State
// emails - represents an array of emailShape objects in the currently selected language.
// emailSummaries - represents an array of objects indicating read state of each email.
// emailActions - represents an array of arrays, each array contains actionShape objects, representing an ACTION_TYPE.
const initialState = {
  // Loads emails from a static JSON file until an API exists.
  emails: emailsJson.emailsEN,
  emailSummaries: initializeEmailSummaries(emailsJson.emailsEN.length),
  emailActions: initializeEmailActions(emailsJson.emailsEN.length)
};

// Reducer
const emibInbox = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        emails: action.language === "fr" ? emailsJson.emailsFR : emailsJson.emailsEN
      };
    case READ_EMAIL:
      let updatedEmailSummaries = Array.from(state.emailSummaries);
      updatedEmailSummaries[action.emailIndex].isRead = true;
      return {
        ...state,
        emailSummaries: updatedEmailSummaries
      };
    case ADD_EMAIL:
      let modifiedEmailSummaries = Array.from(state.emailSummaries);
      modifiedEmailSummaries[action.emailIndex].emailCount++;

      let modifiedEmailActions = Array.from(state.emailActions);
      modifiedEmailActions[action.emailIndex].push({
        ...action.emailAction,
        actionType: ACTION_TYPE.email
      });
      return {
        ...state,
        emailSummaries: modifiedEmailSummaries,
        emailActions: modifiedEmailActions
      };
    case ADD_TASK:
      let duplicatedEmailSummaries = Array.from(state.emailSummaries);
      duplicatedEmailSummaries[action.emailIndex].taskCount++;
      return {
        ...state,
        emailSummaries: duplicatedEmailSummaries
      };
    case UPDATE_EMAIL:
      let updatedEmailActions = Array.from(state.emailActions);
      updatedEmailActions[action.emailIndex][action.responseId] = {
        ...action.emailAction,
        actionType: ACTION_TYPE.email
      };
      return {
        ...state,
        emailActions: updatedEmailActions
      };
    //TODO jcherry handle calls to UPDATE_EMAIL and UPDATE_TASK
    default:
      return state;
  }
};

// Selector functions
const selectEmailActions = (actionState, emailId) => {
  return actionState[emailId];
};

export default emibInbox;
export { initialState, readEmail, addEmail, addTask, updateEmail, updateTask, selectEmailActions };
