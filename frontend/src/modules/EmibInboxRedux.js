import { emailsJson } from "./sampleEmibJson";
import { SET_LANGUAGE } from "./LocalizeRedux";

// Initial State
const initialState = {
  emails: emailsJson.emailsEN
};

// Reducer
const emibInbox = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        emails: action.language === "fr" ? emailsJson.emailsFR : emailsJson.emailsEN
      };

    default:
      return state;
  }
};

export default emibInbox;
export { addEmail, initialState };
