import emibInbox, { initialState } from "../../modules/EmibInboxRedux";
import { setLanguage } from "../../modules/LocalizeRedux";
import { emailsJson } from "../../modules/sampleEmibJson";

describe("setLanguage action", () => {
  it("should update emails to french or english", () => {
    const action1 = setLanguage("fr");
    expect(emibInbox(initialState, action1)).toEqual({ emails: emailsJson.emailsFR });
    const action2 = setLanguage("en");
    expect(emibInbox(initialState, action2)).toEqual({ emails: emailsJson.emailsEN });
  });
});
