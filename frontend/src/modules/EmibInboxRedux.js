import { emailsJson } from "./sampleEmibJson";
import { SET_LANGUAGE } from "./LocalizeRedux";

export const initializeEmailSummaries = length => {
  let emailSummaries = [];
  for (let i = 0; i < length; i++) {
    emailSummaries.push({ isRead: false });
  }
  return emailSummaries;
};

// Action Types
const READ_EMAIL = "emibInbox/READ_EMAIL";

// Action Creators
const readEmail = emailIndex => ({ type: READ_EMAIL, emailIndex });

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

    default:
      return state;
  }
};

export default emibInbox;
export { initialState, readEmail };
