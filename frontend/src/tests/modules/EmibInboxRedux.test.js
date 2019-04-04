import emibInbox, { initializeEmailSummaries, readEmail } from "../../modules/EmibInboxRedux";
import { setLanguage } from "../../modules/LocalizeRedux";
import { emailsJson } from "../../modules/sampleEmibJson";

describe("setLanguage action", () => {
  let stubbedInitialState;
  beforeEach(() => {
    stubbedInitialState = {
      emails: emailsJson.emailsEN,
      emailSummaries: initializeEmailSummaries(emailsJson.emailsEN.length)
    };
  });

  afterEach(() => {
    stubbedInitialState = {};
  });
  it("should update emails to french or english", () => {
    const action1 = setLanguage("fr");
    expect(emibInbox(stubbedInitialState, action1).emails).toEqual(emailsJson.emailsFR);
    const action2 = setLanguage("en");
    expect(emibInbox(stubbedInitialState, action2).emails).toEqual(emailsJson.emailsEN);
  });
});

describe("read email action", () => {
  let stubbedInitialState;
  beforeEach(() => {
    stubbedInitialState = {
      emails: emailsJson.emailsEN,
      emailSummaries: initializeEmailSummaries(emailsJson.emailsEN.length)
    };
  });

  afterEach(() => {
    stubbedInitialState = {};
  });

  it("should update email 0 read state to true", () => {
    const readAction = readEmail(0);
    expect(emibInbox(stubbedInitialState, readAction).emailSummaries[0]).toEqual({
      isRead: true
    });
    expect(emibInbox(stubbedInitialState, readAction).emailSummaries[1]).toEqual({
      isRead: false
    });
  });

  it("should update email 1 read state to true", () => {
    const readAction = readEmail(1);
    expect(emibInbox(stubbedInitialState, readAction).emailSummaries[0]).toEqual({
      isRead: false
    });
    expect(emibInbox(stubbedInitialState, readAction).emailSummaries[1]).toEqual({
      isRead: true
    });
  });
});
