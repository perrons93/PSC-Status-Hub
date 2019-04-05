import { emailsJson } from "./sampleEmibJson";
import { SET_LANGUAGE } from "./LocalizeRedux";

export const initializeEmailSummaries = length => {
  let emailSummaries = [];
  for (let i = 0; i < length; i++) {
    emailSummaries.push({ isRead: false, emailCount: 0, taskCount: 0 });
  }
  return emailSummaries;
};

// Action Types
const READ_EMAIL = "emibInbox/READ_EMAIL";
const ADD_EMAIL = "emibInbox/ADD_EMAIL";
const ADD_TASK = "emibInbox/ADD_TASK";

// Action Creators
const readEmail = emailIndex => ({ type: READ_EMAIL, emailIndex });
// emailIndex refers to the index of the original parent email.
const addEmail = emailIndex => ({ type: ADD_EMAIL, emailIndex });
// emailIndex refers to the index of the original parent email.
const addTask = emailIndex => ({ type: ADD_TASK, emailIndex });

// Initial State
// emails - represents an array of emails in the currently selected language.
// emailSummaries - represents an array of objects indicating read state of each email.
const initialState = {
  // Loads emails from a static JSON file until an API exists.
  emails: emailsJson.emailsEN,
  emailSummaries: initializeEmailSummaries(emailsJson.emailsEN.length)
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
      return {
        ...state,
        emailSummaries: modifiedEmailSummaries
      };
    case ADD_TASK:
      let duplicatedEmailSummaries = Array.from(state.emailSummaries);
      duplicatedEmailSummaries[action.emailIndex].taskCount++;
      return {
        ...state,
        emailSummaries: duplicatedEmailSummaries
      };
    default:
      return state;
  }
};

export default emibInbox;
export { initialState, readEmail, addEmail, addTask };
