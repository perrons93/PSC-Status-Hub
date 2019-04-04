import emibInbox, { initializeEmailSummaries, readEmail } from "../../modules/EmibInboxRedux";
import { setLanguage } from "../../modules/LocalizeRedux";
import { emailsJson } from "../../modules/sampleEmibJson";

const STUBBED_INITIAL_STATE = {
  emails: emailsJson.emailsEN,
  emailSummaries: initializeEmailSummaries(emailsJson.emailsEN.length)
};

describe("setLanguage action", () => {
  it("should update emails to french or english", () => {
    const action1 = setLanguage("fr");
    expect(emibInbox(STUBBED_INITIAL_STATE, action1).emails).toEqual(emailsJson.emailsFR);
    const action2 = setLanguage("en");
    expect(emibInbox(STUBBED_INITIAL_STATE, action2).emails).toEqual(emailsJson.emailsEN);
  });
});

describe("read email action", () => {
  it("should update emails read state to true", () => {
    const readAction = readEmail(0);
    expect(emibInbox(STUBBED_INITIAL_STATE, readAction).emailSummaries).toEqual([
      { isRead: true },
      { isRead: false },
      { isRead: false }
    ]);
  });
});
